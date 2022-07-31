import { ClassData } from "../classData/classData.js";
import { getValueImportant } from "../classData/classImportance.js";
import { Data } from "../data/data.js";
import { UtilityData } from "../data/utilities.js";
import { escapeRegex } from "../general/functions.js";
import { getClassValue, getClassValues } from "./classValues.js";
import { setupFullClassName } from "./fullClassName.js";

export function creator(
  classData: ClassData,
  utilityData: UtilityData,
  data: Data
) {
  if (utilityData.creator == "general") {
    classData = generalCreator(classData, utilityData, data);
  } else if (utilityData.creator == "multi") {
    classData = generalMultiCreator(classData, utilityData, data);
  }
  return classData;
}
function generalCreator(
  classData: ClassData,
  utilityData: UtilityData,
  data: Data
): ClassData {
  let property = utilityData.property;
  let important = "";
  if (classData.variableId && property?.startsWith("--")) {
    property = property + "-" + classData.variableId;
  }

  const value = getClassValue(classData, utilityData, data);
  if (!value) return classData;
  classData = setupFullClassName(classData, data, utilityData.variants);
  important = getValueImportant(classData);
  const cssClass =
    classData.fullClassName +
    " {\n\t" +
    property +
    ": " +
    value +
    important +
    ";\n}";
  classData.created = true;
  classData.cssClass = cssClass;
  classData.properties = [property + ": " + value];
  return classData;
}

function generalMultiCreator(
  classData: ClassData,
  utilityData: UtilityData,
  data: Data
): ClassData {
  const properties: string[] = utilityData.properties || [];
  let important = "";
  if (classData.variableId) {
    for (let a = 0; a < properties.length; a++) {
      if (properties[a]?.startsWith("--")) {
        properties[a] = properties[a] + "-" + classData.variableId;
      }
    }
  }
  const values = getClassValues(classData, utilityData, data);
  if (!values) return classData;
  classData = setupFullClassName(classData, data, utilityData.variants);
  important = getValueImportant(classData);
  let cssClass = classData.fullClassName + " {";
  const classProperties: string[] = [];
  for (const [a, property] of properties.entries()) {
    cssClass += "\n\t" + property + ": " + values[a] + important + ";";
    classProperties.push(properties[a] + ": " + values[a]);
    //todo properties important proper implementation with no duplicates
  }
  cssClass += "\n}";
  classData.created = true;
  classData.cssClass = cssClass;
  classData.properties = classProperties;
  return classData;
}

export function arbitraryCreator(classData: ClassData, data: Data): ClassData {
  const spaceDelimiter = data.config.delimiters.space;
  let important = "";
  classData = setupFullClassName(classData, data);
  important = getValueImportant(classData);
  const reSpaceDelimiter = new RegExp(
    "(?<!\\\\)" + escapeRegex(spaceDelimiter),
    "g"
  );
  const propertyValueArray = classData.className?.match(/(?<=\[).+(?=]$)/g);
  if (!propertyValueArray || !propertyValueArray[0]) return classData;
  const propertyValue = propertyValueArray[0]
    .replace(reSpaceDelimiter, " ")
    .replace(/(?<!\\)\\/g, "")
    .replace(/:(?!\s)/, ": ");

  const cssClass =
    classData.fullClassName + " {\n\t" + propertyValue + important + ";\n}";
  classData.created = true;
  classData.cssClass = cssClass;
  classData.properties = [propertyValue];
  return classData;
}

export function variableCreator(classData: ClassData, data: Data): ClassData {
  const variableDelimiter = data.config.delimiters.variable;
  const key = classData.key;
  if (!key) return classData;
  classData = setupFullClassName(classData, data);
  const reVariableDelimiter = new RegExp(
    "^" + escapeRegex(variableDelimiter),
    ""
  );
  let important = "";
  let property = classData.prefix?.replace(reVariableDelimiter, "");
  if (classData.variableId) {
    property = property + "-" + classData.variableId;
  }

  const value = escapeSpaceInValue(key, data);

  important = getValueImportant(classData);

  const cssClass =
    classData.fullClassName +
    " {\n\t--" +
    property +
    ": " +
    value +
    important +
    ";\n}";
  classData.created = true;
  classData.cssClass = cssClass;
  classData.properties = ["--" + property + ": " + value];

  return classData;
}

function escapeSpaceInValue(string: string, data: Data): string {
  const spaceDelimiter = data.config.delimiters.space;
  const reSpaceDelimiter = new RegExp(
    "(?<!\\\\)" + escapeRegex(spaceDelimiter),
    "g"
  );
  return string.replace(reSpaceDelimiter, " ").replace(/(?<!\\)\\/g, "");
}
