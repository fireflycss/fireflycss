import { Data } from "../data/data.js";
import { escapeRegex } from "../general/functions.js";
import { ClassData } from "./classData.js";

export function getPrefixKey(classData: ClassData, data: Data): ClassData {
  if (
    classData.type === "class" ||
    classData.type === "attribute" ||
    classData.type === "variable" ||
    classData.type === "rawCss"
  ) {
    classData = getClassPrefixKey(classData, data);
  } else if (classData.type === "attributeWithValue") {
    classData = getAttributeWithValuePrefixKey(classData, data);
  }
  if (classData.key === "~") {
    classData.key = ""; //todo maybe move this to used classes
  }
  return classData;
}
function getClassPrefixKey(classData: ClassData, data: Data): ClassData {
  const variantDelimiter = data.config.delimiters.variant;
  const valueDelimiter = data.config.delimiters.value;
  classData =
    variantDelimiter === valueDelimiter
      ? getClassPrefixKeyMatching(classData, data)
      : getClassPrefixKeyDifferent(classData, data);
  return classData;
}
function getClassPrefixKeyMatching(
  classData: ClassData,
  data: Data
): ClassData {
  const className = classData.className;
  const variantDelimiter = data.config.delimiters.variant;
  const prefixKey = className.split(variantDelimiter).splice(-2);
  if (prefixKey.length === 2 && prefixKey[0] && prefixKey[1]) {
    classData.prefix = prefixKey[0];
    classData.key = prefixKey[1];
    classData = checkMinusInPrefix(classData, data);
  } else if (prefixKey.length === 1 && prefixKey[0]) {
    classData.prefix = "";
    classData.key = prefixKey[0];
  }
  return classData;
}
function getClassPrefixKeyDifferent(
  classData: ClassData,
  data: Data
): ClassData {
  const className = classData.className;
  const valueDelimiter = data.config.delimiters.value;
  const variantDelimiterRegex = getVariantDelimiterRegex(data);
  const valueDelimiterRegex = getValueDelimiterRegex(data);
  let prefixKey = className
    .split(variantDelimiterRegex)
    .splice(-1)[0]
    ?.split(valueDelimiterRegex);
  if (!prefixKey) return classData;
  if (prefixKey.length > 2 && prefixKey[0]) {
    prefixKey = [prefixKey[0], prefixKey.slice(1).join(valueDelimiter)];
  } else if (prefixKey.length === 2 && prefixKey[0] && prefixKey[1]) {
    classData.prefix = prefixKey[0];
    classData.key = prefixKey[1];
    classData = checkMinusInPrefix(classData, data);
  } else if (prefixKey.length == 1 && prefixKey[0]) {
    if (classData.type === "class") {
      classData.prefix = prefixKey[0];
      classData.key = "";
    } else if (classData.type === "attribute") {
      classData.prefix = className;
      classData.key = "";
    }
  }
  return classData;
}
function getAttributeWithValuePrefixKey(
  classData: ClassData,
  data: Data
): ClassData {
  const className = classData.className;
  const classNameArray = className.split(/~=/);

  if (!classNameArray[0] || !classNameArray[1]) return classData;
  const attribute = classNameArray[0];
  const attributeValue = classNameArray[1];

  switch (classData.attributeType) {
    case "combination": {
      classData = attributeCombination(
        classData,
        attribute,
        attributeValue,
        data
      );

      break;
    }
    case "combinationDash": {
      classData = attributeCombinationDash(
        classData,
        attribute,
        attributeValue,
        data
      );

      break;
    }
    case "special": {
      classData = attributeSpecial(classData, attribute, attributeValue, data);

      break;
    }
    case "prefix": {
      classData = attributePrefix(classData, attribute, attributeValue, data);

      break;
    }
    case "variantsAndPrefix": {
      classData = attributeVariantsAndPrefix(
        classData,
        attribute,
        attributeValue,
        data
      );

      break;
    }
    case "variants": {
      classData = attributeVariants(classData, attributeValue, data);

      break;
    }
    // No default
  }
  return classData;
}
function attributeCombination(
  classData: ClassData,
  attribute: string,
  attributeValue: string,
  data: Data
): ClassData {
  const variantDelimiterRegex = getVariantDelimiterRegex(data);
  const valueDelimiterRegex = getValueDelimiterRegex(data);
  const valuePrefix = attributeValue
    .split(variantDelimiterRegex)
    .splice(-1)[0]
    ?.split(valueDelimiterRegex)[0];

  const valueKey = attributeValue
    .split(variantDelimiterRegex)
    .slice(-1)[0]
    ?.split(valueDelimiterRegex)
    .splice(-1)[0];
  classData = checkMinusInPrefix(classData, data);
  if (!valuePrefix || !valueKey) return classData;
  classData.prefix = valuePrefix;
  classData.key = valueKey;
  const attributePrefix = attribute.split(variantDelimiterRegex).splice(-1)[0];
  classData.prefix = attributePrefix + classData.prefix;
  classData = checkMinusInPrefix(classData, data);
  return classData;
}
function attributeCombinationDash(
  classData: ClassData,
  attribute: string,
  attributeValue: string,
  data: Data
): ClassData {
  const variantDelimiterRegex = getVariantDelimiterRegex(data);
  const valueDelimiterRegex = getValueDelimiterRegex(data);
  const attributeValuePrefix = attributeValue
    .split(variantDelimiterRegex)
    .splice(-1)[0]
    ?.split(valueDelimiterRegex)[0];
  const prefix =
    attribute.split(variantDelimiterRegex).splice(-1)[0] +
    "-" +
    attributeValuePrefix;

  const key = valueDelimiterRegex.test(attributeValue)
    ? attributeValue
        .split(variantDelimiterRegex)
        .slice(-1)[0]
        ?.split(valueDelimiterRegex)
        .splice(-1)[0]
    : "";
  if (!prefix || typeof key !== "string") return classData;
  classData.prefix = prefix;
  classData.key = key;
  return classData;
}
function attributeSpecial(
  classData: ClassData,
  attribute: string,
  attributeValue: string,
  data: Data
): ClassData {
  if (attributeValue === "" || attributeValue === "~") {
    classData.prefix = attribute;
    classData.key = "";
    return classData;
  } else {
    const className = classData.className;
    classData.className = attributeValue;
    classData = getClassPrefixKey(classData, data);
    classData.className = className;
  }

  return classData;
}
function attributePrefix(
  classData: ClassData,
  attribute: string,
  attributeValue: string,
  data: Data
): ClassData {
  const variantDelimiterRegex = getVariantDelimiterRegex(data);
  const key = attributeValue.split(variantDelimiterRegex).splice(-1)[0];
  if (!key) return classData;
  classData.prefix = attribute;
  classData.key = key;
  return classData;
}
function attributeVariantsAndPrefix(
  classData: ClassData,
  attribute: string,
  attributeValue: string,
  data: Data
): ClassData {
  const variantDelimiter = data.config.delimiters.variant;
  const valueDelimiter = data.config.delimiters.value;
  const variantDelimiterRegex = getVariantDelimiterRegex(data);
  const valueDelimiterRegex = getValueDelimiterRegex(data);

  const prefix = attribute.split(variantDelimiterRegex).splice(-1)[0];
  let key = attributeValue.split(variantDelimiterRegex).splice(-1)[0];
  if (variantDelimiter !== valueDelimiter) {
    key = key?.split(valueDelimiterRegex).splice(-1)[0];
  }
  if (!prefix || !key) return classData;
  classData.prefix = prefix;
  classData.key = key;
  classData = checkMinusInPrefix(classData, data);
  return classData;
}
function attributeVariants(
  classData: ClassData,
  attributeValue: string,
  data: Data
): ClassData {
  const className = classData.className;
  classData.className = attributeValue;
  classData = getClassPrefixKey(classData, data);
  classData.className = className;
  return classData;
}
function checkMinusInPrefix(classData: ClassData, data: Data): ClassData {
  const minusDelimiter = data.config.delimiters.minus;
  const importantDelimiter = data.config.delimiters.important;
  //const minusDelimiterRegex = /^-/g;
  const minusRegex = new RegExp(
    "(?<=^" +
      escapeRegex(importantDelimiter) +
      "|^)" +
      escapeRegex(minusDelimiter)
  );
  if (minusRegex.test(classData.prefix)) {
    classData.key = "-" + classData.key;
    classData.prefix = classData.prefix.replace(minusRegex, "");
  }
  return classData;
}
function getVariantDelimiterRegex(data: Data): RegExp {
  const variantDelimiter = data.config.delimiters.variant;
  const importantDelimiter = data.config.delimiters.important;
  const variableDelimiter = data.config.delimiters.variable;
  return new RegExp(
    "(?<!^|" +
      escapeRegex(variantDelimiter) +
      "|[\\[\\(][^\\]\\)]*|\\\\)" +
      escapeRegex(variantDelimiter) +
      "(?!$|[0-9]|[^a-zA-Z\\-" +
      escapeRegex(importantDelimiter + variableDelimiter) +
      "]|[^\\[\\(]*[\\]\\)])",
    "g"
  );
}
function getValueDelimiterRegex(data: Data): RegExp {
  const valueDelimiter = data.config.delimiters.value;
  return new RegExp(
    "(?<!^|" +
      escapeRegex(valueDelimiter) +
      "|[\\[\\(][^\\]\\)]*|\\\\)" +
      escapeRegex(valueDelimiter) +
      "(?!$|[^\\[\\(]*[\\]\\)])",
    "g"
  );
}
