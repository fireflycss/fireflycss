import { Data } from "../data/data.js";
import { escapeRegex } from "../general/functions.js";
import { ClassData } from "./classData.js";

export function checkIfClassIsImportant(
  classData: ClassData,
  data: Data
): ClassData {
  const importantDelimiter: string = data.config.delimiters.important;
  const minusDelimiter = data.config.delimiters.minus;
  const className = classData.className;
  const prefix = classData.prefix;
  const key = classData.key;
  //if (!className.includes(minusDelimiter)) return classData;
  //todo figure this out and why it doesn't work properly and implement important identifier

  const importantRegex = new RegExp(
    "((?<=^(" +
      escapeRegex(minusDelimiter) +
      "|))" +
      escapeRegex(importantDelimiter) +
      ")|(" +
      escapeRegex(importantDelimiter) +
      ")$",
    "g"
  );
  if (
    classData.type === "rawCSS" &&
    (className.endsWith("!important") || className.endsWith(importantDelimiter))
  ) {
    classData.important = true;
    classData.className = className.replace(/(\s*!(important)?\s*$)/g, "");
  } else if (classData.className.startsWith("!")) {
    classData.important = true;
  } else if (importantRegex.test(prefix)) {
    classData.prefix = prefix.replace(importantRegex, "");
    classData.important = true;
  } else if (importantRegex.test(key)) {
    classData.key = key.replace(importantRegex, "");
    classData.important = true;
  }
  return classData;
}

export function getValueImportant(classData: ClassData): string {
  if (classData.important) {
    return " !important";
  }
  return "";
}
