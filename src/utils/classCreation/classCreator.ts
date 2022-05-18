import { ClassData } from "../classData/classData.js";
import { Data } from "../data/data.js";
import { UtilityData } from "../data/utilities.js";
import { arbitraryCreator, creator, variableCreator } from "./creators.js";
import { setupFullClassName } from "./fullClassName.js";

export function classCreator(classData: ClassData, data: Data): ClassData {
  if (classData.type === "arbitrary") {
    return arbitraryCreator(classData, data);
  }
  if (classData.type === "variable") {
    return variableCreator(classData, data);
  }
  if (classData.type === "rawCss") {
    classData = setupFullClassName(classData, data);
    classData.created = true;
    return classData;
  }

  let prefix: string = classData.prefix || "";
  let key: string = classData.key || "";
  if (!prefix && !key) return classData;
  if (!prefix && key) {
    prefix = key;
    key = "";
  }

  const prefixData: PrefixData = data.utilities[prefix];
  classData = createFromPrefixData(classData, prefixData, key, data);
  return classData;
}

function createFromPrefixData(
  classData: ClassData,
  prefixData: PrefixData,
  key: string,
  data: Data
): ClassData {
  if (!prefixData) return classData;
  const prefixDataKeys: string[] = Object.keys(prefixData);
  const validKeys: { [key: string]: number } = {};
  for (const prefixDataKey of prefixDataKeys) {
    const utilityKeys = Object.keys(prefixData[prefixDataKey]?.keys || {});
    for (const utilityKey of utilityKeys) {
      validKeys[utilityKey] = 1;
    }
  }

  for (const prefixDataKey of prefixDataKeys) {
    const utilityData = prefixData[prefixDataKey];

    if (
      !utilityData ||
      (!utilityData.keys[key] && !utilityData.dynamic?.enabled) ||
      (validKeys[key] && !utilityData.keys[key])
    ) {
      continue;
    }

    //console.log(utilityData);
    classData = creator(classData, utilityData, data);
    if (classData.created) return classData;
  }
  return classData;
}
type PrefixData = { [key: string]: UtilityData } | undefined;
