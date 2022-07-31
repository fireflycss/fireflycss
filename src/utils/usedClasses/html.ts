import { escapeCssCharacters } from "../general/functions.js";

export const parseHtmlClasses = function (
  content: string,
  stringClasses: string[] = []
): string[] {
  const lineFind = /(<(?!\?).*?(?<!\?)>)/gs;
  const linesContent: string[] | null = content.match(lineFind);
  if (!linesContent) return stringClasses;

  for (let lineContent of linesContent) {
    if (lineContent.startsWith("</")) continue;

    lineContent = lineContent
      .replace(/^<[\dA-Za-z]+|>$/g, "")
      .replace(/\s\s+/g, " ");
    stringClasses = findClasses(lineContent, stringClasses);
    stringClasses = findAttributesWithValue(lineContent, stringClasses);
    stringClasses = findAttributesWithoutValue(lineContent, stringClasses);
  }

  return stringClasses;
};

function findClasses(content: string, stringClasses: string[]): string[] {
  const classFind = /((class|className)(=|.=)("|\\"|'|\\').*?("|\\"|'|\\'))/g;
  const classContent: string[] | null = content.match(classFind);
  if (!classContent) return stringClasses;
  const removeExcessRegex = /((class|className)(=|.=)|("|\\"|'\\'))/g;

  let classesString = classContent[0];
  if (!classesString) return stringClasses;
  classesString = classesString.replace(removeExcessRegex, "");
  const lineClasses: string[] = classesString.split(" ");
  for (const lineClass of lineClasses) {
    if (!lineClass) continue;
    stringClasses.push(lineClass);
  }
  return stringClasses;
}

function findAttributesWithValue(
  content: string,
  stringClasses: string[]
): string[] {
  const attributesWithValueFind = /(\S*?=("|\\"|'|\\').*?("|\\"|'|\\'))/g;
  const attributesWithValue: string[] | null = content.match(
    attributesWithValueFind
  );
  if (!attributesWithValue) return stringClasses;
  for (const attributeWithValue of attributesWithValue) {
    const attributeArray = attributeWithValue.split(/=(?=("|\\"|'|\\'))/);
    const attributeName = attributeArray[0];
    if (
      !attributeName ||
      attributeName === "class" ||
      attributeName === "className"
    )
      continue;
    const reRemoveExcess = new RegExp(
      "((" +
        escapeCssCharacters(attributeName) +
        ")(=|.=)|(\\\\\\*?)|(\\\"|'))",
      "g"
    );
    const attributeValuesString: string = attributeWithValue.replace(
      reRemoveExcess,
      ""
    );
    const attributeValues: string[] = attributeValuesString.split(" ");
    for (const attributeValue of attributeValues) {
      stringClasses.push("[" + attributeName + "~=" + attributeValue + "]");
    }
    //todo might have to add a way to delete the attributeWithValue if its being duplicated in attributes without values
  }
  return stringClasses;
}

function findAttributesWithoutValue(
  content: string,
  stringClasses: string[]
): string[] {
  const attributes: string[] = content.split(/\s+/);
  if (!attributes) return stringClasses;
  for (const attribute of attributes) {
    if (!attribute || /=/g.test(attribute)) continue;
    stringClasses.push("[" + attribute + "~=]");
    //todo add a way to filter out common ones
  }
  return stringClasses;
}
