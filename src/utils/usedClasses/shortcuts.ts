import { Data } from "../data/data";
import { ShortcutObject } from "../data/shortcuts";
import { ObjectUsedClass } from "./usedClasses";

export function getShortcutClasses(
  data: Data,
  objectClasses: ObjectUsedClass[]
): ObjectUsedClass[] {
  const shortcuts = data.shortcuts;
  for (const className in shortcuts) {
    let shortcutData: ShortcutData = {
      classes: [],
      important: [],
      fullName: [],
    };
    shortcutData = iterateShortcut(
      shortcuts[className] as ShortcutObject,
      shortcutData,
      data
    );
    const shortcutClass: ObjectUsedClass = {
      className: className,
      classes: shortcutData.classes,
      important: shortcutData.important,
    };
    objectClasses.push(shortcutClass);
  }
  return objectClasses;
}

function iterateShortcut(
  current: ShortcutObject,
  shortcutData: ShortcutData,
  data: Data
): ShortcutData {
  if (typeof current === "object") {
    shortcutData = handleCurrentObject(current, shortcutData, data);
  } else if (typeof current === "string") {
    shortcutData = handleCurrentString(current, shortcutData, data);
  }
  return shortcutData;
}

function handleCurrentObject(
  current: ShortcutObject,
  shortcutData: ShortcutData,
  data: Data
): ShortcutData {
  for (const currentKey in current) {
    const newCurrent = current[currentKey];
    if (typeof newCurrent === "string") {
      if (currentKey === "@apply") {
        shortcutData = handleCurrentApply(
          newCurrent, //todo should be string
          shortcutData,
          data
        );
      } else if (currentKey.startsWith("@")) {
        shortcutData.fullName.push(currentKey.replace(/@/g, ""));
        shortcutData = handleCurrentString(newCurrent, shortcutData, data);
        shortcutData.fullName.splice(-1, 1);
      } else {
        shortcutData = handleCurrentRawCss(
          newCurrent,
          currentKey,
          shortcutData,
          data
        );
      }
    } else if (typeof newCurrent === "object" && currentKey.startsWith("@")) {
      shortcutData.fullName.push(currentKey.replace(/@/g, ""));
      shortcutData = iterateShortcut(newCurrent, shortcutData, data);
      shortcutData.fullName.splice(-1, 1);
    }
  }
  return shortcutData;
}

function handleCurrentApply(
  applyClassesString: string,
  shortcutData: ShortcutData,
  data: Data
): ShortcutData {
  let important = false;
  if (applyClassesString.includes("!important")) {
    important = true;
    applyClassesString = applyClassesString.replace(/(\s*!important\s*)/g, "");
  }
  const applyClasses = applyClassesString.split(" ");
  for (const applyClass of applyClasses) {
    const className =
      shortcutData.fullName
        .join(data.config.delimiters.variant)
        .replace(/^(?!\s*$)(.+)/g, "$1" + data.config.delimiters.variant) +
      applyClass;
    shortcutData.classes.push(className);
    if (important) {
      shortcutData.important.push(className);
    }
  }
  return shortcutData;
}

function handleCurrentRawCss(
  rawCss: string,
  currentKey: string,
  shortcutData: ShortcutData,
  data: Data
): ShortcutData {
  let important = false;
  if (rawCss.includes("!important")) {
    important = true;
    rawCss = rawCss.replace(/(\s*!important\s*)/g, "");
  }
  const className =
    "+" +
    shortcutData.fullName
      .join(data.config.delimiters.variant)
      .replace(/^(?!\s*$)(.+)/g, "$1" + data.config.delimiters.variant) +
    currentKey +
    ":" +
    rawCss;

  shortcutData.classes.push(className);
  if (important) {
    shortcutData.important.push(className);
  }
  return shortcutData;
}

function handleCurrentString(
  current: string,
  shortcutData: ShortcutData,
  data: Data
): ShortcutData {
  let important = false;
  if (current.includes("!important")) {
    important = true;
    current = current.replace(/(\s*!important\s*)/g, "");
  }
  const shortcutClasses = current.split(" ");

  for (const shortcutClass of shortcutClasses) {
    const className =
      shortcutData.fullName
        .join(data.config.delimiters.variant)
        .replace(/^(?!\s*$)(.+)/g, "$1" + data.config.delimiters.variant) +
      shortcutClass;
    // Pushing
    shortcutData.classes.push(className);
    if (important) {
      shortcutData.important.push(className);
    }
  }

  return shortcutData;
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

interface ShortcutData {
  classes: string[];
  important: string[];
  fullName: string[];
}
