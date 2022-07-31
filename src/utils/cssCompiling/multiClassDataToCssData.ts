import { CssData } from "../../main/loop.js";
import { ClassData } from "../classData/classData.js";
import { getValueImportant } from "../classData/classImportance.js";
import { Data } from "../data/data.js";
import { classDataToCssData } from "./classDataToCssData.js";

export function multiClassDataToCssData(
  multiClassData: MultiClassData,
  cssData: CssData,
  data: Data
): CssData {
  const className = multiClassData.className;
  const classesData: ClassData[] = multiClassData.classesData;

  const combinedClassesData = combineClassesData(classesData);
  const combinedClassesDataKeys = Object.keys(combinedClassesData);
  for (const combinedClassDataKey of combinedClassesDataKeys) {
    const combinedClassData = combinedClassesData[combinedClassDataKey];
    if (!combinedClassData) continue;
    const fullClassName =
      combinedClassData.preClasses +
      combinedClassData.preSelectors +
      "." +
      className +
      combinedClassData.postClassName +
      combinedClassData.postSelectors;

    let properties = "";
    for (const property of combinedClassData.properties) {
      properties += "\n\t" + property + ";";
    }
    const cssClass = fullClassName + " {" + properties + "\n}";
    combinedClassData.cssClass = cssClass;
    cssData = classDataToCssData(combinedClassData, cssData, data);
  }

  return cssData;
}

function combineClassesData(classesData: ClassData[]) {
  const combinedClassesData: { [key: string]: ClassData } = {};

  for (const classData of classesData) {
    const usedVariantsString = classData.usedVariants.join(",");
    if (!combinedClassesData[usedVariantsString]) {
      combinedClassesData[usedVariantsString] = {
        properties: [],
        usedMedia: classData.usedMedia,
        usedVariants: classData.usedVariants,
        preClasses: classData.preClasses,
        preSelectors: classData.preSelectors,
        postClassName: classData.postClassName,
        postSelectors: classData.postSelectors,
        important: classData.important,
        //required for classData. Not used
        className: "",
        created: true,
        type: "",
        attributeType: "",
        prefix: "",
        key: "",
        variableId: "",
        fullClassName: "",
        cssClass: "",
      };
    }
    for (let property of classData.properties) {
      property += getValueImportant(classData);
      combinedClassesData[usedVariantsString]?.properties.push(property);
    }
  }
  /*
  if (!combinedClassesData[""]) {
    //todo figure out why this is needed
    combinedClassesData[""] = {
      properties: [],
      usedMedia: [],
      usedVariants: [],
      preClasses: "",
      preSelectors: "",
      postClassName: "",
      postSelectors: "",
      important: false,
      //required for classData. Not used
      className: "",
      created: true,
      type: "",
      attributeType: "",
      prefix: "",
      key: "",
      variableId: "",
      fullClassName: "",
      cssClass: "",
    };
  }
  */
  return combinedClassesData;
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
export interface MultiClassData {
  className: string;
  classes: string[];
  important: string[];
  classesData: ClassData[];
}
