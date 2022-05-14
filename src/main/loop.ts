import { classCreator } from "../utils/classCreation/classCreator.js";
import { ClassData, setupClassData } from "../utils/classData/classData.js";
import { classDataToCssData } from "../utils/cssCompiling/classDataToCssData.js";
import {
  MultiClassData,
  multiClassDataToCssData,
} from "../utils/cssCompiling/multiClassDataToCssData.js";
import { Data } from "../utils/data/data.js";
import {
  ObjectUsedClass,
  UsedClasses,
} from "../utils/usedClasses/usedClasses.js";

export { mainLoop };
function mainLoop(
  usedClasses: UsedClasses,
  createdClasses: createdClasses,
  data: Data
): CssData {
  const stringUsedClasses: string[] = usedClasses.strings;
  const objectUsedClasses: ObjectUsedClass[] = usedClasses.objects;
  let cssData: CssData = {};
  cssData = objectClassLoop(cssData, objectUsedClasses, createdClasses, data);
  cssData = stringClassLoop(cssData, stringUsedClasses, createdClasses, data);
  return cssData;
}
function stringClassLoop(
  cssData: CssData,
  stringUsedClasses: string[],
  createdClasses: createdClasses,
  data: Data
): CssData {
  for (const className of stringUsedClasses) {
    if (
      className === "" ||
      className === "group" ||
      createdClasses[className]
    ) {
      continue;
    }
    createdClasses[className] = 1;
    let classData: ClassData = setupClassData(className, data);
    classData = classCreator(classData, data);
    //console.log(classData);
    if (classData.created) {
      cssData = classDataToCssData(classData, cssData, data);
    }
  }
  //console.log(cssData);
  return cssData;
}
function objectClassLoop(
  cssData: CssData,
  objectUsedClasses: ObjectUsedClass[],
  createdClasses: createdClasses,
  data: Data
): CssData {
  for (const objectUsedClass of objectUsedClasses) {
    const className = objectUsedClass.className;
    if (createdClasses[className]) {
      continue;
    }
    const classesData: ClassData[] = [];
    const classesToCreate: string[] = objectUsedClass.classes;
    for (const classToCreate of classesToCreate) {
      let classData: ClassData = setupClassData(classToCreate, data);
      classData = classCreator(classData, data);
      if (classData.created) {
        if (objectUsedClass.important.includes(classToCreate)) {
          classData.important = true;
        }
        classesData.push(classData);
      }
    }
    const multiClassData: MultiClassData = {
      ...objectUsedClass,
      classesData: classesData,
    };
    cssData = multiClassDataToCssData(multiClassData, cssData, data);
  }
  return cssData;
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
export interface CssData {
  keyframes?: string[];
  [key: string]: CssData | string[];
}

export interface createdClasses {
  [key: string]: number;
}
