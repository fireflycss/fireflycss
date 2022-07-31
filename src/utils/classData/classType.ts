import { Data } from "../data/data.js";
import { escapeRegex } from "../general/functions.js";
import { ClassData } from "./classData.js";

export function getClassType(classData: ClassData, data: Data): ClassData {
  const variantDelimiter = data.config.delimiters.variant;
  const variableDelimiter = data.config.delimiters.variable;
  const className = classData.className;
  if (/^\[.*?]$/.test(className) === true) {
    classData = typeAttribute(classData, data);
  } else if (
    new RegExp("(?<=" + escapeRegex(variantDelimiter) + ")\\[.*?\\]$").test(
      className
    )
  ) {
    classData.type = "arbitrary";
  } else if (className.startsWith("+")) {
    classData.type = "rawCss";
    classData.className = className.replace("+", "");
  } else if (
    new RegExp(
      "^" +
        escapeRegex(variableDelimiter) +
        "|(?<=" +
        escapeRegex(variantDelimiter) +
        ")" +
        escapeRegex(variableDelimiter) +
        "(?=[a-z0-9])"
    ).test(className)
  ) {
    classData.type = "variable";
  } else {
    classData.type = "class";
  }
  return classData;
}

function typeAttribute(classData: ClassData, data: Data): ClassData {
  classData.className = classData.className.replace(/^\[|]$/g, "");
  const className = classData.className;
  if (className.includes("~=") && !className.endsWith("~=")) {
    classData.type = "attributeWithValue";
    classData = determineAttributeType(classData, data);
  } else if (className.endsWith("~=")) {
    classData.type = "attribute";
    classData.className = className.replace(/(~=)$/, "");
  } else {
    classData.type = "arbitrary";
    classData.className = "[" + className + "]";
  }
  return classData;
}
function determineAttributeType(classData: ClassData, data: Data): ClassData {
  const variantDelimiter = data.config.delimiters.variant;
  const valueDelimiter = data.config.delimiters.value;
  const importantDelimiter = data.config.delimiters.important;

  const className = classData.className;
  const classNameArray = className.split("~=");
  const attributeName = classNameArray[0];
  const attributeValue = classNameArray[1];
  if (!attributeName || !attributeValue) return classData;
  const variantDelimiterRegex = new RegExp(
    "(?<!^)" + escapeRegex(variantDelimiter) + "(?!$|[0-9]|[^a-zA-Z\\-\\!])",
    "g"
  );
  const prefixOnlyRegex = new RegExp(
    "^-|^" +
      escapeRegex(importantDelimiter) +
      "|" +
      escapeRegex(importantDelimiter) +
      "$",
    "g"
  );
  let combinedPrefix = "";
  let combinedPrefixDash = "";
  const valueDelimiterRegex = new RegExp(
    "(?<!^|" +
      escapeRegex(valueDelimiter) +
      ")" +
      escapeRegex(valueDelimiter) +
      "(?!$)",
    "g"
  );
  const attributeValuePrefix = attributeValue
    .split(variantDelimiterRegex)
    .slice(-1)[0]
    ?.split(valueDelimiterRegex)[0];
  if (!attributeValuePrefix) return classData;
  combinedPrefix =
    attributeName.split(variantDelimiterRegex).splice(-1)[0] +
    attributeValuePrefix;
  combinedPrefixDash =
    attributeName.split(variantDelimiterRegex).splice(-1)[0] +
    "-" +
    attributeValuePrefix;
  combinedPrefix = combinedPrefix.replace(prefixOnlyRegex, "");
  combinedPrefixDash = combinedPrefixDash.replace(prefixOnlyRegex, "");

  if (combinedPrefix !== "" && data.utilities[combinedPrefix]) {
    classData.attributeType = "combination";
  } else if (combinedPrefixDash !== "" && data.utilities[combinedPrefixDash]) {
    classData.attributeType = "combinationDash";
  } else if (data.utilities[attributeName.replace(prefixOnlyRegex, "")]) {
    classData.attributeType = "prefix";
  } else if (
    attributeName.includes(variantDelimiter) &&
    data.utilities[
      attributeName
        .split(variantDelimiterRegex)
        .splice(-1)[0]
        ?.replace(prefixOnlyRegex, "") || ""
    ]
  ) {
    classData.attributeType = "variantsAndPrefix";
  } else {
    classData.attributeType = "variant";
  }
  return classData;
}
