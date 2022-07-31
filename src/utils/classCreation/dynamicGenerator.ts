import { Parser } from "expr-eval";

import { placeVariableIdOnValue } from "../classData/variableId.js";
import { Data } from "../data/data.js";
import { UtilityData } from "../data/utilities.js";
import { determineDataType } from "../general/dataType.js";
import { escapeRegex } from "../general/functions.js";
import { arbitraryGenerator, arbitraryMatch } from "./arbitraryGenerator.js";
import { getColorType, isColor, setupProperColor } from "./colors.js";

export function dynamicGenerator(
  key: string,
  utilityData: UtilityData,
  data: Data
): string {
  let dynamicData: DynamicData = {
    valid: true,
    created: false,
    value: "",
    singleValue: "",
    multipleInputs: [],
    inputs: [],
    multipleInput: "",
    input: "",
    inputType: "keyword",
    variableId: "",
    unit: "",
    math: false,
    calc: false,
    opacity: "",
    gradientStops: "",
    slashSyntaxDelimiter: "",
    usedDelimiters: [],
    shorthandFound: false,
  };
  const multipleInputs = getMultipleInputs(key, data);
  dynamicData.multipleInputs = multipleInputs;
  dynamicData = multipleInputsLoop(
    dynamicData,
    multipleInputs,
    utilityData,
    data
  );
  if (dynamicData.valid) {
    return dynamicData.value;
  }
  return "";
}

function getMultipleInputs(key: string, data: Data): string[] {
  const multipleDelimiter = data.config.delimiters.multiple;
  const multipleDelimiterRegex = new RegExp(
    "(?<![\\[\\(][^\\]\\)]*|\\\\)" +
      escapeRegex(multipleDelimiter) +
      "(?![^\\[\\(]*[\\]\\)])",
    "g"
  );
  return key.split(multipleDelimiterRegex);
}

function getInputs(
  multipleInput: string,
  utilityData: UtilityData,
  data: Data
): string[] {
  const valuesDelimiter = data.config.delimiters.values;
  let slashSyntaxDelimiter = "";

  if (utilityData.dynamic?.slashSyntax === true) {
    //todo maybe support a slash syntax delimiter in config
    slashSyntaxDelimiter = "/";
  }
  const valuesDelimiterRegex = new RegExp(
    "(?<![\\[\\(][^\\]\\)]*|\\\\)[" +
      escapeRegex(valuesDelimiter) +
      escapeRegex(slashSyntaxDelimiter) +
      "](?![^\\[\\(]*[\\]\\)])",
    "g"
  );
  const inputs = multipleInput.split(valuesDelimiterRegex);
  if (!inputs) return [];
  return inputs;
}

function multipleInputsLoop(
  dynamicData: DynamicData,
  multipleInputs: string[],
  utilityData: UtilityData,
  data: Data
): DynamicData {
  for (const [a, multipleInput] of multipleInputs.entries()) {
    if (a > 0) {
      dynamicData.value += utilityData.dynamic?.multipleSeparator; //todo rename to multipleDelimiter
    }
    const inputs = getInputs(multipleInput, utilityData, data);
    const combinations = utilityData.dynamic?.combinations;
    if (combinations && inputs.length > combinations) {
      dynamicData.valid = false;
      return dynamicData;
    }
    dynamicData.inputs = inputs;
    dynamicData.multipleInput = multipleInput;
    dynamicData = inputsLoop(dynamicData, inputs, utilityData, data);

    if (!dynamicData.valid) return dynamicData;
  }
  return dynamicData;
}

function inputsLoop(
  dynamicData: DynamicData,
  inputs: string[],
  utilityData: UtilityData,
  data: Data
): DynamicData {
  for (const [a, input] of inputs.entries()) {
    dynamicData.input = input;
    if (a > 0) {
      dynamicData.value +=
        utilityData.dynamic?.slashSyntax &&
        dynamicData.usedDelimiters[a - 1] === "/"
          ? "/ "
          : utilityData.dynamic?.separator;
    }

    dynamicData = handleInputVariableId(dynamicData, data);
    dynamicData = handleDynamic(dynamicData, utilityData, data);

    if (!dynamicData.valid) return dynamicData;
  }

  return dynamicData;
}

function handleInputVariableId(
  dynamicData: DynamicData,
  data: Data
): DynamicData {
  const variableIdDelimiter = data.config.delimiters.variableId;
  const variableIdDelimiterRegex = new RegExp(
    "(?<!^)" + escapeRegex(variableIdDelimiter) + "[0-9]+",
    "g"
  );
  const input = dynamicData.input;
  if (variableIdDelimiterRegex.test(input)) {
    const inputArray = input.match(variableIdDelimiterRegex);
    if (!inputArray || !inputArray[0]) return dynamicData;
    dynamicData.variableId = inputArray[0].replace(variableIdDelimiter, "");
    dynamicData.input = input.replace(variableIdDelimiterRegex, "");
  } else {
    dynamicData.variableId = "";
  }
  return dynamicData;
}

function handleDynamic(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  dynamicData.singleValue = "";
  const oldValue = dynamicData.value;
  dynamicData = handleKey(dynamicData, utilityData, data);
  if (!dynamicData.valid || dynamicData.value !== oldValue) return dynamicData;

  dynamicData = handleShorthand(dynamicData, utilityData, data);
  if (!dynamicData.valid || dynamicData.value !== oldValue) return dynamicData;

  dynamicData = handleCssFunction(dynamicData, utilityData, data);
  if (!dynamicData.valid || dynamicData.value !== oldValue) return dynamicData;

  dynamicData = handleArbitrary(dynamicData, utilityData, data);
  if (!dynamicData.valid || dynamicData.value !== oldValue) return dynamicData;

  dynamicData = handleGeneration(dynamicData, utilityData, data);

  return dynamicData;
}

function handleKey(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  const input = dynamicData.input;
  let singleValue = utilityData.keys[input];
  if (
    singleValue &&
    typeof singleValue === "string" && //todo needed because it thinks it can be be string[] fix
    utilityData.dynamic?.dynamicOnly === false
  ) {
    singleValue = setupProperColor(singleValue, "", utilityData.prefix, data);
    singleValue = placeVariableIdOnValue(singleValue, dynamicData.variableId);
    dynamicData.value += singleValue;
  }
  return dynamicData;
}

function handleShorthand(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  if (Object.keys(utilityData.dynamic?.shorthand || []).length === 0) {
    return dynamicData;
  }

  const prefixes = Object.keys(utilityData.dynamic?.shorthand || []);
  let shorthandType: "shorthand" | "shorthandSingle" = "shorthand";
  if (
    dynamicData.inputs.length === 1 &&
    Object.keys(utilityData.dynamic?.shorthandSingle || []).length > 0
  ) {
    shorthandType = "shorthandSingle";
  }
  dynamicData = shorthandIteration(
    dynamicData,
    utilityData,
    prefixes,
    shorthandType,
    data
  );
  dynamicData = updateDynamicDataValue(dynamicData);
  return dynamicData;
}

function shorthandIteration(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  prefixes: string[],
  shorthandType: "shorthand" | "shorthandSingle",
  data: Data
) {
  if (!utilityData.dynamic) return dynamicData;
  const shorthands = utilityData.dynamic[shorthandType];
  if (!shorthands) return dynamicData;

  dynamicData.inputType = determineDataType(dynamicData.input);
  for (const prefix of prefixes) {
    const utilities = shorthands[prefix];
    if (!utilities) return dynamicData;
    dynamicData = shorthandUtilitiesIteration(
      dynamicData,
      prefix,
      utilities,
      data
    );
    if (dynamicData.shorthandFound) {
      dynamicData.shorthandFound = false;
      return dynamicData;
    }
  }
  return dynamicData;
}

function shorthandUtilitiesIteration(
  dynamicData: DynamicData,
  prefix: string,
  utilities: string[],
  data: Data
): DynamicData {
  const prefixUtilities = data.utilities[prefix];
  if (!prefixUtilities) return dynamicData;
  for (const utilityName of utilities) {
    const utility = prefixUtilities[utilityName];
    if (!utility) continue;
    dynamicData = shorthandUtility(dynamicData, utility, data);
    if (dynamicData.shorthandFound) {
      dynamicData.shorthandFound = false;
      return dynamicData;
    }
  }

  return dynamicData;
}

function shorthandUtility(
  dynamicData: DynamicData,
  utility: UtilityData,
  data: Data
): DynamicData {
  if (
    dynamicData.inputType !== "function" &&
    (utility.dynamic?.enabled === false ||
      (utility.dynamic?.enabled &&
        utility.dynamic?.dynamicOnly === false &&
        utility.keys[dynamicData.input]))
  ) {
    let singleValue = utility.keys[dynamicData.input];
    if (typeof singleValue === "string") {
      singleValue = setupProperColor(
        singleValue,
        dynamicData.opacity,
        utility.prefix,
        data
      );
      dynamicData.singleValue = singleValue;
    }
    dynamicData.shorthandFound = true;
    return dynamicData;
  } else if (
    (utility.dynamic?.enabled === true &&
      utility.dynamic?.dataTypes?.includes(dynamicData.inputType) === true) ||
    (dynamicData.inputType === "integer" &&
      utility.dynamic?.dataTypes?.includes("number")) /*||
(inputType === "integer" &&
    valueUnitTypes.includes(
        utility.dynamic.dataTypes[0]
    ))*/
    //todo Some shorthands have a number utility along with a length-percentage utility so, this would override that if the number comes after the length. i believe animation shorthand was the one that took a number, not sure if want to leave this in, only way to leave it in is to make sure the number utility comes first.
  ) {
    const singleValue = dynamicGenerator(dynamicData.input, utility, data);
    if (singleValue) {
      dynamicData.singleValue = singleValue;
      dynamicData.shorthandFound = true;
      return dynamicData;
    }
  }
  return dynamicData;
}

function handleCssFunction(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  if (utilityData.dynamic?.functions?.length === 0) return dynamicData;
  let compiledFunction = "";
  if (
    /^(f-)?[a-z-]+$/.test(dynamicData.input) &&
    utilityData.dynamic?.functions?.includes(
      dynamicData.input.replace(/^f-/, "")
    )
  ) {
    compiledFunction = generateCssVariable(dynamicData, data);
  } else if (
    /^((f-)?[a-z-]+)\(.+\)$/g.test(dynamicData.input) &&
    utilityData.dynamic?.functions?.includes(
      dynamicData.input.replace(/(^f-)|(\(.+?\))/g, "")
    )
  ) {
    compiledFunction = generateCustomCssFunction(
      dynamicData,
      utilityData,
      data
    );
  } else {
    return dynamicData; //required for non functions
  }
  if (!compiledFunction) {
    //dynamicData.valid = false;
    return dynamicData;
  }
  compiledFunction = placeVariableIdOnValue(
    compiledFunction,
    dynamicData.variableId
  );
  dynamicData.value += compiledFunction;
  return dynamicData;
}

function generateCssVariable(dynamicData: DynamicData, data: Data): string {
  let cssFunction = dynamicData.input;
  if (cssFunction.startsWith("f-")) {
    cssFunction = cssFunction.slice(2);
  }
  let compiledFunction = "";
  compiledFunction = data.config.innerStringFunctions.includes(cssFunction)
    ? "var(--ff-function-" + cssFunction + ")"
    : cssFunction + "(var(--ff-function-" + cssFunction + "))";
  return compiledFunction;
}

function generateCustomCssFunction(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): string {
  const cssFunction = dynamicData.input.replace(/(^f-)|(\(.+?\))/g, "");
  const innerFunctionArray = dynamicData.input.match(
    /(?<=^(f-)?[a-z-]+\().+(?=\)$)/g
  );
  if (!innerFunctionArray || !innerFunctionArray[0]) return "";
  const innerFunction = innerFunctionArray[0]
    .replace(/(?<!\\)_/g, " ")
    .replace(/(?<!\\)\\/g, "")
    .replace(/,(?!\s)/g, ", "); // todo determine whether to keep or not
  let compiledFunction = "";
  compiledFunction = data.config.innerStringFunctions.includes(cssFunction)
    ? cssFunction + "('" + innerFunction + "')"
    : cssFunction + "(" + innerFunction + ")";
  if (isColor(compiledFunction)) {
    compiledFunction = setupProperColor(
      compiledFunction,
      "",
      utilityData.prefix,
      data,
      true
    );
  }

  return compiledFunction;
}

function handleArbitrary(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  if (arbitraryMatch(dynamicData.input)) {
    const singleValue = arbitraryGenerator(
      dynamicData.input,
      utilityData,
      data
    ); //todo place variable Id??? use the function to update the value?
    if (!singleValue) {
      dynamicData.valid = false;
      return dynamicData;
    }
    dynamicData.value += singleValue;
  }
  return dynamicData;
}

function handleGeneration(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  const valueUnitTypes = [
    "length",
    "percentage",
    "angle",
    "time",
    "number",
    "integer",
    "alpha",
    "flex",
    "frequency",
    "resolution",
    "dimension",
  ];
  const primaryDataType = utilityData.dynamic?.primaryDataType;
  if (!primaryDataType) return dynamicData;
  if (valueUnitTypes.includes(primaryDataType)) {
    dynamicData = generateValueUnit(dynamicData, utilityData, data);
  } else
    switch (primaryDataType) {
      case "color": {
        dynamicData = generateColor(dynamicData, utilityData, data);
        break;
      }
      case "gradient": {
        dynamicData = generateGradient(dynamicData, utilityData, data);
        break;
      }
      case "ratio": {
        dynamicData = generateRatio(dynamicData, utilityData);
        break;
      }
      // No default
    }
  dynamicData = updateDynamicDataValue(dynamicData);
  return dynamicData;
}

function updateDynamicDataValue(dynamicData: DynamicData): DynamicData {
  if (!dynamicData.singleValue || !dynamicData.valid) {
    dynamicData.valid = false;
    return dynamicData;
  }
  dynamicData.singleValue = placeVariableIdOnValue(
    dynamicData.singleValue,
    dynamicData.variableId
  );
  dynamicData.value += dynamicData.singleValue;
  return dynamicData;
}

function generateValueUnit(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  dynamicData = determineTypeAndUnit(dynamicData, data);

  dynamicData = valueUnitSimpleNumber(dynamicData, utilityData, data);
  if (!dynamicData.valid) return dynamicData;

  if (dynamicData.singleValue) {
    dynamicData = placeUnitOnValue(dynamicData, utilityData, data);
    return dynamicData;
  }

  dynamicData = valueUnitCssCalc(dynamicData, data);
  if (!dynamicData.valid) return dynamicData;
  if (dynamicData.singleValue) {
    dynamicData = placeUnitOnValue(dynamicData, utilityData, data);
    return dynamicData;
  }

  dynamicData = valueUnitMath(dynamicData, utilityData);
  if (!dynamicData.valid) return dynamicData;
  if (dynamicData.singleValue) {
    dynamicData = placeUnitOnValue(dynamicData, utilityData, data);
    return dynamicData;
  }

  return dynamicData;
}

function determineTypeAndUnit(
  dynamicData: DynamicData,
  data: Data
): DynamicData {
  if (/^\(.+\)$/.test(dynamicData.input)) {
    dynamicData.input = dynamicData.input.replace(/^\(|\)$/g, "");
  }
  const variableDelimiter = data.config.delimiters.variable;
  const variableDelimiterRegex = new RegExp(
    "(var\\()|" + escapeRegex(variableDelimiter),
    ""
  );
  if (
    /[%a-z]+$/.test(dynamicData.input) &&
    ((/[\d.]+/g.test(dynamicData.input) &&
      dynamicData.input.match(/[\d.]+/g)?.length === 1) ||
      (/(?<=[\d)])[%a-z]+/g.test(dynamicData.input) &&
        dynamicData.input.match(/(?<=[\d)])[%a-z]+/g)?.length === 1)) &&
    !variableDelimiterRegex.test(dynamicData.input)
  ) {
    dynamicData.math = true;
    const unitArray = dynamicData.input.match(/[%a-z]+$/g);
    if (unitArray && unitArray[0]) {
      dynamicData.unit = unitArray[0];
    }
    dynamicData.input = dynamicData.input.replace(/[%a-z]+$/g, "");
  } else if (
    /[%a-z]+/.test(dynamicData.input) &&
    (dynamicData.input.match(/[%a-z]+/g)?.length || 0) > 1 &&
    dynamicData.input
      .match(/[%a-z]+/g)
      ?.every((value, _index, array) => value === array[0])
  ) {
    dynamicData.math = true;
    const unitArray = dynamicData.input.match(/[%a-z]+$/g);
    if (unitArray && unitArray[0]) {
      dynamicData.unit = unitArray[0];
    }
    dynamicData.input = dynamicData.input.replace(/[%a-z]+/g, "");
  }
  return dynamicData;
}

function valueUnitSimpleNumber(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  if (!/^-?[\d.]+$/.test(dynamicData.input)) return dynamicData;

  /* ----------------------------- Custom Function ---------------------------- */

  //todo rework the function thing, new naming scheme.

  let valueFunctions: {
    [key: string]: ((x: number) => string | number | undefined) | undefined;
  } = {
    length: (x: number) => x / 4,
    alpha: (x: number) => x / 100,
  };
  if (Object.keys(data.config.valueFunctions).length > 0) {
    valueFunctions = { ...valueFunctions, ...data.config.valueFunctions };
  }
  const primaryDataType = utilityData.dynamic?.primaryDataType;
  let customFunction: ((x: number) => string | number | undefined) | undefined;
  if (
    typeof utilityData.dynamic?.customFunction === "function" &&
    utilityData.dynamic?.customFunction.length === 1
  ) {
    customFunction = utilityData.dynamic?.customFunction;
  } else if (
    primaryDataType &&
    valueFunctions[primaryDataType] &&
    dynamicData.unit === ""
  ) {
    customFunction = valueFunctions[primaryDataType];
  }
  /* --------------- Custom Function Execution or Simple Number --------------- */

  if (customFunction) {
    try {
      const singleValue = customFunction(
        Number.parseFloat(dynamicData.input)
      )?.toString();
      if (!singleValue) {
        console.log(
          "something went wrong with custom function of " + utilityData.property
        );
        dynamicData.valid = false;
        return dynamicData;
      }
      dynamicData.singleValue = singleValue;
    } catch (error) {
      console.log(error);
      console.log(
        "something went wrong with custom function of " + utilityData.property
      );
      dynamicData.valid = false;
      return dynamicData;
    }
  } else {
    dynamicData.singleValue = dynamicData.input;
  }
  return dynamicData;
}

function valueUnitCssCalc(dynamicData: DynamicData, data: Data): DynamicData {
  if (
    !/(-?[\d.]+[%a-z]+|\$[a-z-]+|var\(.+?\))([*+/-].+)/g.test(dynamicData.input)
  ) {
    return dynamicData;
  }
  //todo shorten regex names and update variable names
  dynamicData.calc = true;
  let insideCalc = dynamicData.input;
  const variableDelimiter = data.config.delimiters.variable;
  const variableDelimiterOnlyRegex = new RegExp(
    escapeRegex(variableDelimiter),
    "g"
  );
  if (variableDelimiterOnlyRegex.test(insideCalc)) {
    const variableDelimiterRegex = new RegExp(
      "(" + escapeRegex(variableDelimiter) + "[a-z0-9\\-\\~]+)",
      "g"
    );
    const variableDefaultValueDelimiter =
      data.config.delimiters.variableDefaultValue;
    const variableDefaultValueDelimiterRegex = new RegExp(
      escapeRegex(variableDefaultValueDelimiter),
      "g"
    );
    insideCalc = insideCalc
      .replace(variableDelimiterRegex, "var(--$1)")
      .replace(variableDelimiterOnlyRegex, "")
      .replace(variableDefaultValueDelimiterRegex, ", ");
  }
  insideCalc = insideCalc
    .replace(/(?<![(_-])(?<!--[a-z-]+)([*+/-])/g, " $1 ")
    .replace(/(?<!\\)_/g, " ");
  dynamicData.singleValue = "calc(" + insideCalc + ")";
  return dynamicData;
}

function valueUnitMath(
  dynamicData: DynamicData,
  utilityData: UtilityData
): DynamicData {
  if (
    !/[a-z]+\(.+?\)|\d!]|\d[*+/-]\d/.test(dynamicData.input) &&
    !/(var\()|\?/.test(dynamicData.input)
  ) {
    //check if not math
    return dynamicData;
  }

  try {
    let rawValue = Parser.evaluate(dynamicData.input);
    if (Number.isNaN(rawValue)) {
      dynamicData.valid = false;
      return dynamicData;
    }
    rawValue =
      Number.parseInt(rawValue.toString()) === rawValue
        ? Number.parseInt(rawValue.toString())
        : +Number.parseFloat(rawValue.toString()).toFixed(2); //todo determine the limits of css decimal points and maybe add config option
    dynamicData.singleValue = rawValue.toString();
  } catch {
    //console.log(error);
    dynamicData.valid = false;
    return dynamicData;
  }
  if (
    utilityData.dynamic?.divisionPercentage &&
    (dynamicData.unit === "" || dynamicData.unit === "%") &&
    /^\d+\/\d+$/.test(dynamicData.input)
  ) {
    // checking for division percentage and multiplying by 100.
    dynamicData.singleValue = (
      Number.parseFloat(dynamicData.singleValue) * 100
    ).toString();
  }
  return dynamicData;
}

function placeUnitOnValue(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  if (dynamicData.unit !== "") {
    dynamicData.singleValue += dynamicData.unit;
    return dynamicData;
  }
  if (dynamicData.calc === true) return dynamicData;
  let defaultUnits: { [key: string]: string } = {
    percentage: "%",
    flex: "fr",
    length: "rem",
    angle: "deg",
    time: "ms",
    frequency: "hz",
    resolution: "dpi",
  };
  if (Object.keys(data.config.defaultUnits).length > 0) {
    defaultUnits = { ...defaultUnits, ...data.config.defaultUnits };
  }
  if (utilityData.dynamic?.defaultUnit) {
    dynamicData.singleValue += utilityData.dynamic?.defaultUnit;
  }
  const primaryDataType = utilityData.dynamic?.primaryDataType;
  if (primaryDataType && defaultUnits[primaryDataType]) {
    dynamicData.singleValue += defaultUnits[primaryDataType];
  }
  return dynamicData;
}

function generateColor(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  dynamicData = getColorOpacity(dynamicData);
  let color = dynamicData.input;
  const colorKey = utilityData.keys[color];
  if (typeof colorKey === "string") {
    color = colorKey;
  }
  color = color.replace(/(?<!\\)_/g, " ").replace(/(?<!\\)\\/g, "");
  if (!isColor(color)) {
    dynamicData.valid = false;
    return dynamicData;
  }
  color = setupProperColor(
    color,
    dynamicData.opacity,
    utilityData.prefix,
    data,
    true
  );
  dynamicData.singleValue = color;
  return dynamicData;
}

function getColorOpacity(dynamicData: DynamicData): DynamicData {
  //if (/\/\[?[\d.]+\*?]?$/.test(dynamicData.input) === true) return dynamicData; //todo check if this is faster
  const colorControlArray =
    dynamicData.input.match(/\/\[?[\d.]+\*?]?\*?$/g) || [];
  if (!colorControlArray[0]) return dynamicData;
  const colorControl = colorControlArray[0];

  dynamicData.opacity = colorControl.replace(/^\//, "");
  dynamicData.input = dynamicData.input.replace(colorControl, "");

  return dynamicData;
}

function generateGradient(
  dynamicData: DynamicData,
  utilityData: UtilityData,
  data: Data
): DynamicData {
  dynamicData = getGradientOpacityAndStops(dynamicData);
  let color = dynamicData.input;
  const colorKey = utilityData.keys[color];
  if (typeof colorKey === "string") {
    color = colorKey;
  }

  if (color === "transparent") {
    dynamicData = handleGradientTransparency(dynamicData);
  } else if (isColor(color)) {
    color = setupProperColor(
      color,
      dynamicData.opacity,
      utilityData.prefix,
      data,
      true
    );

    dynamicData.singleValue = color;
  } else {
    dynamicData.valid = false;
    return dynamicData;
  }
  dynamicData = handleGradientStops(dynamicData);
  dynamicData = handleGradientSingleInput(dynamicData);
  return dynamicData;
}

function getGradientOpacityAndStops(dynamicData: DynamicData): DynamicData {
  dynamicData.opacity = "";
  dynamicData.gradientStops = "";
  const gradientControlArray = dynamicData.input.match(
    /(%[\d.-]+[a-z]*(_[\d.-]+[a-z]*)*)|(\/\[?[\d.]+\*?]?\*?)/g
  );
  if (!gradientControlArray) return dynamicData;
  const gradientControl = gradientControlArray.join("");
  dynamicData.input = dynamicData.input.replace(gradientControl, "");
  /* ----------------------------- Gradient Stops ----------------------------- */
  const gradientStopsArray =
    gradientControl.match(/(?<=%)[\d.-]+[a-z]*(_[\d.-]+[a-z]*)*/g) || [];
  if (gradientStopsArray[0]) {
    dynamicData.gradientStops = gradientStopsArray[0];
  }
  /* --------------------------------- Opacity -------------------------------- */
  const opacityArray = gradientControl.match(/(?<=\/)\[?[\d.]+\*?]?\*?/) || []; //[] required for arbitrary
  if (opacityArray[0]) {
    dynamicData.opacity = opacityArray[0];
  }
  return dynamicData;
}

function handleGradientTransparency(dynamicData: DynamicData): DynamicData {
  //todo currently only works for rgba
  const colorsArray = dynamicData.value.match(/(rgba\((?:\d+,\s?){3})/g);
  const lastColor = colorsArray?.slice(-1)[0];

  if (!lastColor) return dynamicData;
  dynamicData.singleValue += lastColor + "0)";

  return dynamicData;
}

function handleGradientStops(dynamicData: DynamicData): DynamicData {
  if (!dynamicData.gradientStops) return dynamicData;
  dynamicData.singleValue +=
    /^[\d.]+[a-z]+([\d.]+[a-z])*$/.test(dynamicData.gradientStops) === true
      ? " " + dynamicData.gradientStops
      : " " +
        dynamicData.gradientStops
          .replace(/([\d.]+)(?![\d%a-z])/g, "$1%")
          .replace("_", " ");

  return dynamicData;
}

function handleGradientSingleInput(dynamicData: DynamicData): DynamicData {
  //todo currently only works for rgba
  if (dynamicData.inputs.length !== 1) return dynamicData;

  const colorType = getColorType(dynamicData.singleValue);
  if (colorType === "rgba") {
    const test =
      dynamicData.singleValue.match(/^(rgba\((?:\d+,\s?){3})/g) || [];
    if (!test[0]) return dynamicData;
    dynamicData.singleValue += ", " + test[0] + "0)";
  }

  return dynamicData;
}

function generateRatio(
  dynamicData: DynamicData,
  utilityData: UtilityData
): DynamicData {
  const input = dynamicData.input;
  if (/^[\d.]+\/[\d.]+$/.test(input) === true) {
    dynamicData.singleValue = input.replace("/", " / ");
  } else if (
    /^[\d.]+$/.test(input) === true &&
    utilityData.dynamic?.ratioAllowSingle === true //todo does this really matter??? layout.aspect allows single
  ) {
    dynamicData.singleValue = input;
  }
  return dynamicData;
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
interface DynamicData {
  valid: boolean;
  created: boolean;
  value: string;
  singleValue: string;
  multipleInputs: string[];
  inputs: string[];
  multipleInput: string;
  input: string;
  inputType: string;
  variableId: string;
  unit: string;
  math: boolean;
  calc: boolean;
  opacity: string;
  gradientStops: string;
  slashSyntaxDelimiter: string;
  usedDelimiters: string[];
  shorthandFound: boolean;
}
