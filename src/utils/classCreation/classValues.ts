import { ClassData } from "../classData/classData.js";
import { placeVariableIdOnValue } from "../classData/variableId.js";
import { Data } from "../data/data.js";
import { UtilityData } from "../data/utilities.js";
import { escapeRegex } from "../general/functions.js";
import { arbitraryGenerator, arbitraryMatch } from "./arbitraryGenerator.js";
import { setupProperColor } from "./colors.js";
import { dynamicGenerator } from "./dynamicGenerator.js";

export function getClassValue(
  classData: ClassData,
  utilityData: UtilityData,
  data: Data
): string | undefined {
  const prefix = classData.prefix;
  const key = classData.key;
  const keys = utilityData.keys;
  let value: string | undefined = "";
  const possibleValue = keys[key];

  if (
    typeof possibleValue === "string" &&
    (!utilityData.dynamic?.enabled ||
      (utilityData.dynamic?.enabled && !utilityData.dynamic?.dynamicOnly))
  ) {
    value = possibleValue;
    value = setupProperColor(value, "", utilityData.prefix, data);
  } else if (prefix) {
    value = arbitraryDynamicValue(key, utilityData, data);

    if (!value) return undefined;
  }
  value = placeVariableIdOnValue(value, classData.variableId);

  //value = checkRgbOnly(value,utilityData)
  return value;
}
function arbitraryDynamicValue(
  key: string,
  utilityData: UtilityData,
  data: Data
): string | undefined {
  let value: string | undefined = "";
  if (arbitraryMatch(key)) {
    value = arbitraryGenerator(key, utilityData, data);
    if (!value) return undefined;
  } else if (utilityData.dynamic?.enabled) {
    value = dynamicGenerator(key, utilityData, data);
    if (!value) return undefined;
  }
  return value;
}

export function getClassValues(
  classData: ClassData,
  utilityData: UtilityData,
  data: Data
): string[] | undefined {
  const prefix = classData.prefix;
  const key = classData.key;

  const properties = utilityData.properties;
  let values: string[] | undefined = [];
  const keys = utilityData.keys;
  const possibleValues = keys[key];
  if (possibleValues) {
    if (Array.isArray(possibleValues)) {
      values = possibleValues;
    } else if (
      typeof possibleValues === "string" &&
      Array.isArray(properties)
    ) {
      for (let a = 0; a < properties.length; a++) {
        values.push(possibleValues);
      }
    }
    values = insertColorVariables(values, utilityData);
  } else if (prefix && utilityData.dynamic?.enabled) {
    values = getDynamicValues(classData, utilityData, data);
    if (!values) return undefined;
  }
  values = overwritePermanentValues(values, utilityData);
  return values;
}
function getDynamicValues(
  classData: ClassData,
  utilityData: UtilityData,
  data: Data
): string[] | undefined {
  let values: string[] | undefined = [];
  const key = classData.key;

  if (!utilityData.dynamic?.duplicateValues) {
    values = dynamicDuplicateValues(key, values, utilityData, data);
    if (!values) return undefined;
  } else {
    const value = dynamicGenerator(key, utilityData, data);
    if (!value) return undefined;
    const properties = utilityData.properties || [];
    for (let a = 0; a < properties.length; a++) {
      values.push(value);
    }
  }
  values = overwritePermanentValues(values, utilityData);
  return values;
}
function dynamicDuplicateValues(
  key: string,
  values: string[] | undefined,
  utilityData: UtilityData,
  data: Data
): string[] | undefined {
  const multipleDelimiter = data.config.delimiters.multiple;
  const valuesDelimiter = data.config.delimiters.values;
  const reMultipleDelimiter = new RegExp(
    "(?<![\\[\\(][^\\]\\)]*|\\\\)" +
      escapeRegex(multipleDelimiter) +
      "(?![^\\[\\(]*[\\]\\)])",
    "g"
  );
  const reValuesDelimiter = new RegExp(
    "(?<![\\[\\(][^\\]\\)]*|\\\\)" +
      escapeRegex(valuesDelimiter) +
      "(?![^\\[\\(]*[\\]\\)])",
    "g"
  );
  const multipleInputs: string[] = key.split(reMultipleDelimiter);
  for (const multipleInput of multipleInputs) {
    const inputs: string[] = multipleInput.split(reValuesDelimiter);
    values =
      inputs.length === 1 && inputs[0]
        ? singleInputMultipleValues(inputs[0], values, utilityData, data)
        : multipleInputsMultipleValues(inputs, values, utilityData, data);
    if (!values) return undefined;
  }
  return values;
}
function multipleInputsMultipleValues(
  inputs: string[],
  values: string[] | undefined,
  utilityData: UtilityData,
  data: Data
): string[] | undefined {
  if (!values) return undefined;
  for (const [a, input] of inputs.entries()) {
    if (a === utilityData.dynamic?.combinations || !input) {
      return undefined;
    }
    const value: string | undefined = dynamicGenerator(
      input,
      utilityData,
      data
    );
    if (!value) return undefined;
    values.push(value);
  }
  return values;
}
function singleInputMultipleValues(
  input: string,
  values: string[] | undefined,
  utilityData: UtilityData,
  data: Data
): string[] | undefined {
  let value: string | undefined = dynamicGenerator(input, utilityData, data);
  if (!value || !values) return undefined;
  const properties = utilityData.properties || [];
  const propertiesKeys = Object.keys(properties);
  for (let a = 0; a < propertiesKeys.length; a++) {
    value = dynamicTemplate(value, utilityData, a);
    values.push(value);
  }
  return values;
}
function overwritePermanentValues(
  values: string[],
  utilityData: UtilityData
): string[] {
  const permanentValues = utilityData.dynamic?.permanentValues;
  if (!permanentValues) return values;
  const permanentValuesKeys: string[] = Object.keys(permanentValues);
  //todo see if there is a faster or better way to implement this, maybe by implementing it directly in the for loop where the value is added to the values array.
  if (utilityData.dynamic?.enabled && permanentValuesKeys.length > 0) {
    for (const indexString of permanentValuesKeys) {
      const index: number = Number.parseInt(indexString);
      const permanentValue = permanentValues[index];
      if (!permanentValue) continue;
      values.splice(index, 1, permanentValue);
    }
  }
  return values;
}
function dynamicTemplate(
  value: string,
  utilityData: UtilityData,
  index: number
): string {
  if (
    utilityData.dynamic?.enabled &&
    utilityData.dynamic.template?.length !== 0
  ) {
    const templateArray = utilityData.dynamic.template;
    if (!templateArray) return value;
    const template = templateArray[index];
    if (!template) return value;
    if (/(\$value)/.test(template) === true) {
      value = template.replace(/(\$value)/g, value);
    }
  }
  return value;
}
function insertColorVariables(
  values: string[],
  utilityData: UtilityData
): string[] {
  if (!utilityData.dynamic?.colorVariable) return values;

  for (let a = 0; a < values.length; a++) {
    let value = values[a];
    if (!value) continue;

    value = insertColorVariable(value, utilityData, true);
    values[a] = value;
  }
  return values;
}
function insertColorVariable(
  value: string,
  utilityData: UtilityData,
  colorVariable = false
): string {
  if (
    colorVariable ||
    utilityData.dynamic?.colorVariable //&&
    //isColor(value) &&
    //getColorType(value) === "rgba"//todo update. determine if checking for a color is needed. this solution wont work as the other shadow parameters are also here.
  ) {
    return insertRgbaColorVariable(value, utilityData);
  }
  return value;
}
function insertRgbaColorVariable(
  value: string,
  utilityData: UtilityData
): string {
  const replacementVariable = utilityData.dynamic?.colorVariable;
  const colors = value.match(
    /(rgba\((?:\d{1,3},\s*){2}\d{1,3}(,\s*[\d.]+?)*\))/g
  );
  if (!Array.isArray(colors)) return value;
  for (let a = 0; a < colors?.length; a++) {
    let replacement = "";
    const color = colors[a];
    if (!color) return value;
    if (utilityData.dynamic?.preserveColorOpacity) {
      const colorAlpha = getRgbaAlpha(color);
      const colorReplacement = getRgbaReplacement(color);
      if (!colorAlpha || !colorReplacement) return value;
      replacement =
        "rgba(var(" +
        replacementVariable +
        ", " +
        colorReplacement +
        "), " +
        colorAlpha +
        ")";
    } else {
      replacement = "var(" + replacementVariable + ", " + color + ")";
    }
    value = value.replace(color, replacement);
  }
  return value;
}
function getRgbaAlpha(color: string): string | undefined {
  const colorOpacityArray = color.match(/((?<=,\s*)[\d.]+(?=\)))/g);

  if (!colorOpacityArray || !colorOpacityArray[0]) {
    return undefined;
  }
  return colorOpacityArray[0];
}
function getRgbaReplacement(color: string): string | undefined {
  const colorReplacementArray = color.match(
    /(?<=rgba\()(?:\d{1,3},\s*){2}\d{1,3}/g
  );
  if (!colorReplacementArray || !colorReplacementArray[0]) return undefined;
  return colorReplacementArray[0];
}
