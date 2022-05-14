import { Data } from "../data/data.js";
import { escapeRegex } from "../general/functions.js";
import { ClassData } from "./classData.js";

export function getVariableId(classData: ClassData, data: Data): ClassData {
  const prefix = classData.prefix;
  const variableIdDelimiter = data.config.delimiters.variableId;
  const variableIdDelimiterRegex = new RegExp(
    escapeRegex(variableIdDelimiter) + "[0-9]+",
    "g"
  );
  if (variableIdDelimiterRegex.test(prefix)) {
    const variableIdArray = prefix.match(variableIdDelimiterRegex);
    if (!variableIdArray || typeof variableIdArray[0] !== "string")
      return classData;
    const variableId = variableIdArray[0].replace(variableIdDelimiter, "");
    classData.prefix = prefix.replace(variableIdDelimiterRegex, "");
    classData.variableId = variableId;
  }
  return classData;
}
export function placeVariableIdOnValue(
  value: string,
  variableId: string
): string {
  if (variableId) {
    //value = value.replace(/((?<=var\().+?(?=,.+?|\)))/g, "$1-" + variableId); //Adds class variable id after the inputs variable id
    value = value.replace(
      /((?<=var\().+?(?=,.+?|-\d|\)))/g,
      "$1-" + variableId
    ); //adds class variableId before the inputs variable id
  }
  return value;
}
