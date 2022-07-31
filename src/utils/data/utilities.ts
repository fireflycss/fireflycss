import { Config } from "./config.js";
import { DataPart, DataPartValue, getDataPart } from "./dataPart.js";
import { Keys } from "./keys.js";

export function getUtilities(config: Config, keys: Keys): DataUtilities {
  if (!config && !keys) {
    return {};
  }
  const dataPartType = "utilities";
  const combined = false;
  const rawUtilities = getDataPart(config, dataPartType, combined);
  const utilities: DataUtilities = compileUtilities(rawUtilities, keys);
  return utilities;
}
/* -------------------------------------------------------------------------- */
/*                                  Utilities                                 */
/* -------------------------------------------------------------------------- */
function compileUtilities(rawUtilities: DataPart, keys: Keys): DataUtilities {
  let utilities: DataUtilities = {};
  const rawUtilitiesKeys = Object.keys(rawUtilities);
  for (const rawUtilityName of rawUtilitiesKeys) {
    const rawUtilityData = rawUtilities[rawUtilityName];
    if (typeof rawUtilityData !== "object" || Array.isArray(rawUtilityData))
      continue;
    const utilityData = compileUtilityData(rawUtilityData, keys);
    if (!utilityData) continue;

    if (!utilities[utilityData.prefix]) {
      utilities[utilityData.prefix] = {};
    }
    const utilitiesPrefix = utilities[utilityData.prefix];
    if (utilityData.prefix !== "" && utilitiesPrefix) {
      utilitiesPrefix[rawUtilityName] = utilityData;
    } else {
      utilities = compilePrefixLess(utilities, rawUtilityName, utilityData);
    }

    utilities = createAliasUtilities(utilities, rawUtilityName, utilityData);
  }

  return utilities;
}
function compilePrefixLess(
  utilities: DataUtilities,
  rawUtilityName: string,
  utilityData: UtilityData
): DataUtilities {
  const keysArray = Object.keys(utilityData.keys);
  for (const prefix of keysArray) {
    if (!utilities[prefix]) utilities[prefix] = {};
    const utilitiesPrefix = utilities[prefix];
    const keyValue = utilityData.keys[prefix];
    if (
      utilityData.property &&
      typeof utilitiesPrefix === "object" &&
      keyValue
    ) {
      utilitiesPrefix[rawUtilityName] = {
        prefix: prefix,
        property: utilityData.property,
        dynamic: utilityData.dynamic || { enabled: false },
        keys: { "": keyValue },
        creator: utilityData.creator || "general",
      };
    } else if (utilityData.properties && utilitiesPrefix && keyValue) {
      utilitiesPrefix[rawUtilityName] = {
        prefix: prefix,
        properties: utilityData.properties,
        dynamic: utilityData.dynamic || { enabled: false },
        keys: { "": keyValue },
        creator: utilityData.creator || "multi",
      };
    }
  }
  return utilities;
}
/* --------------------------------- Aliases -------------------------------- */
function createAliasUtilities(
  utilities: DataUtilities,
  utilityName: string,
  utilityData: UtilityData
): DataUtilities {
  if (utilityData.alias) {
    const alias = utilityData.alias;
    utilities = aliasToUtilities(utilities, alias, utilityName, utilityData);
  } else if (utilityData.aliases) {
    for (const alias of utilityData.aliases) {
      utilities = aliasToUtilities(utilities, alias, utilityName, utilityData);
    }
  }
  return utilities;
}
function aliasToUtilities(
  utilities: DataUtilities,
  alias: string,
  utilityName: string,
  utilityData: UtilityData
): DataUtilities {
  if (!utilities[alias]) {
    utilities[alias] = {};
  }
  const UtilitiesAlias = utilities[alias];
  if (!UtilitiesAlias) return utilities;
  UtilitiesAlias[utilityName] = utilityData;
  return utilities;
}
/* -------------------------------------------------------------------------- */
/*                                 UtilityData                                */
/* -------------------------------------------------------------------------- */
export function compileUtilityData(
  rawUtilityData: DataPart,
  dataKeys: Keys
): UtilityData | undefined {
  const prefix = utilityDataPrefix(rawUtilityData);
  const dynamic = utilityDataDynamic(rawUtilityData);
  const variants = utilityDataVariants(rawUtilityData);
  const keys = utilityDataKeys(rawUtilityData, dataKeys);

  /* ------------------------------- Compilation ------------------------------ */
  if (typeof prefix !== "string" || !dynamic || !variants || !keys) {
    return undefined;
  }
  let utilityData: UtilityData | undefined = {
    prefix: prefix,
    dynamic: dynamic,
    variants: variants,
    keys: keys,
  };
  utilityData = utilityDataProperties(utilityData, rawUtilityData);
  if (!utilityData) return undefined;
  utilityData = utilityDataCreator(utilityData);
  utilityData = utilityDataAliases(utilityData, rawUtilityData);
  return utilityData;
}

function utilityDataCreator(utilityData: UtilityData): UtilityData {
  if (utilityData.property) {
    utilityData.creator = "general";
  } else if (typeof utilityData.properties === "string") {
    utilityData.creator = "general";
  } else if (Array.isArray(utilityData.properties)) {
    utilityData.creator =
      utilityData.properties.length === 1 ? "general" : "multi";
  }
  return utilityData;
}

function utilityDataPrefix(rawUtilityData: DataPart): string | undefined {
  /* --------------------------------- Prefix --------------------------------- */
  const prefix = rawUtilityData["prefix"];
  if (prefix == undefined || typeof prefix !== "string") {
    console.log("missing prefix or not a string"); //! return undefined
    return undefined;
  }

  return prefix;
}
function utilityDataDynamic(rawUtilityData: DataPart): Dynamic | undefined {
  let dynamic: Dynamic = { enabled: false, dataTypes: ["keyword"] };
  const rawDynamic = rawUtilityData["dynamic"];
  if (typeof rawDynamic !== "object" || Array.isArray(rawDynamic)) {
    return dynamic;
  }
  const defaultDynamicOptions: Dynamic = {
    //!do not change these. add these options to a utility's dynamic object instead
    //! changing these could have grand consequences
    enabled: false,
    allowNegative: true,
    ratioAllowSingle: false,
    combinations: 1, // Amount of maximum combinations to allow
    separator: " ", // Values separator for a property
    multipleSeparator: ", ",
    defaultUnit: "",
    colorVariable: "",
    preserveColorOpacity: false,
    rgbValuesOnly: false,
    customFunction: undefined,
    primaryDataType: "",
    dynamicOnly: false, // for stuff like color and gradients
    duplicateValues: false,
    permanentValues: {}, // for utilities like divide {index:"value"} - {0:"0px"}
    template: [],
    slashSyntax: false,
    divisionPercentage: false,
    shorthandSingle: {},
    shorthand: {},
    dataTypes: ["keyword"],
    functions: [],
  };
  dynamic = { ...defaultDynamicOptions, ...rawDynamic };
  //todo rework primary data type situation.
  if (
    dynamic.primaryDataType === "" &&
    dynamic.dataTypes &&
    dynamic.dataTypes[0]
  ) {
    dynamic.primaryDataType = dynamic.dataTypes[0];
  }
  return dynamic;
}
function utilityDataVariants(rawUtilityData: DataPart): string[] | undefined {
  /* -------------------------------- Variants -------------------------------- */
  let variants: string[] = [];
  if (Array.isArray(rawUtilityData["variants"])) {
    variants = rawUtilityData["variants"];
  }
  return variants;
}
function utilityDataKeys(rawUtilityData: DataPart, dataKeys: Keys): Keys {
  let keys: Keys = {};
  const rawKeys = rawUtilityData["keys"];
  if (Array.isArray(rawKeys)) {
    keys = utilityDataKeysArray(keys, rawKeys, dataKeys);
  } else if (typeof rawKeys === "object") {
    keys = rawKeys;
  } else if (typeof rawKeys === "string") {
    const dataKeysPart = dataKeys[rawKeys];
    if (typeof dataKeysPart !== "object" || Array.isArray(dataKeysPart))
      return keys;
    keys = dataKeysPart;
  }

  return keys;
}
function utilityDataKeysArray(
  keys: DataPart,
  rawKeys: DataPartValue[],
  dataKeys: Keys
): Keys {
  for (const rawKey of rawKeys) {
    if (typeof rawKey === "string" && dataKeys[rawKey]) {
      const dataKeysPart = dataKeys[rawKey];
      if (typeof dataKeysPart !== "object" || Array.isArray(dataKeysPart))
        return keys;
      keys = { ...keys, ...dataKeysPart };
    } else if (typeof rawKey === "object" && !Array.isArray(rawKey)) {
      keys = { ...keys, ...rawKey };
    }
  }
  return keys;
}
function utilityDataProperties(
  utilityData: UtilityData,
  rawUtilityData: DataPart
): UtilityData | undefined {
  /* ------------------------------- Properties ------------------------------- */
  const rawProperties = rawUtilityData["properties"];
  if (typeof rawUtilityData["property"] === "string") {
    utilityData.property = rawUtilityData["property"];
  } else if (Array.isArray(rawProperties)) {
    const firstProperty = rawProperties[0];
    if (rawProperties.length === 1 && firstProperty) {
      utilityData.property = firstProperty;
    } else {
      utilityData.properties = rawProperties;
    }
  } else {
    console.log("missing property or properties");
    return undefined;
  }
  return utilityData;
}
function utilityDataAliases(
  utilityData: UtilityData,
  rawUtilityData: DataPart
): UtilityData {
  /* --------------------------------- Aliases -------------------------------- */
  if (typeof rawUtilityData["alias"] === "string")
    utilityData.alias = rawUtilityData["alias"];
  else if (Array.isArray(rawUtilityData["aliases"]))
    utilityData.aliases = rawUtilityData["aliases"];
  return utilityData;
}
/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

export interface rawUtilities {
  extend?: rawUtilities;
  [key: string]: rawUtilities | string | string[];
}
export interface Utilities {
  extend?: Utilities;
  [key: string]: Utilities | UtilityData;
}
export interface DataUtilities {
  [key: string]: { [key: string]: UtilityData };
}
export interface UtilityData {
  prefix: string;
  alias?: string;
  aliases?: string[];
  property?: string;
  properties?: string[];
  dynamic?: Dynamic;
  variants?: string[];
  keys: Keys;
  creator?: string;
}
export interface Dynamic {
  enabled: boolean;
  allowNegative?: boolean;
  ratioAllowSingle?: boolean;
  combinations?: number;
  separator?: string;
  multipleSeparator?: string;
  defaultUnit?: string;
  customFunction?: ((x: number) => string | number | undefined) | undefined;
  colorVariable?: string;
  preserveColorOpacity?: boolean;
  rgbValuesOnly?: boolean;
  primaryDataType?: string | null;
  dynamicOnly?: boolean;
  duplicateValues?: boolean;
  permanentValues?: { [key: number]: string };
  template?: string[];
  slashSyntax?: boolean;
  divisionPercentage?: boolean;
  shorthandSingle?: { [key: string]: string[] };
  shorthand?: { [key: string]: string[] };
  dataTypes?: string[];
  functions?: string[];
}
