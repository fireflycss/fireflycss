import { Data } from "../data/data.js";
import { checkIfClassIsImportant } from "./classImportance.js";
import { getClassType } from "./classType.js";
import { getPrefixKey } from "./prefixKey.js";
import { getVariableId } from "./variableId.js";

export function setupClassData(className: string, data: Data): ClassData {
  let classData: ClassData = {
    className: className,
    created: false,
    type: "",
    attributeType: "",
    prefix: "",
    key: "",
    important: false,
    variableId: "",
    fullClassName: "",
    usedMedia: [],
    usedVariants: [],
    preClasses: "",
    preSelectors: "",
    postClassName: "",
    postSelectors: "",
    cssClass: "",
    properties: [],
  };
  classData = getClassType(classData, data);
  classData = getPrefixKey(classData, data);
  classData = checkIfClassIsImportant(classData, data);
  classData = getVariableId(classData, data);
  //console.log(classData);
  return classData;
}

export interface ClassData {
  className: string;
  created: boolean;
  type: string;
  attributeType: string;
  prefix: string;
  key: string;
  important: boolean;
  variableId: string;
  fullClassName: string;
  usedMedia: string[];
  usedVariants: string[];
  preClasses: string;
  preSelectors: string;
  postClassName: string;
  postSelectors: string;
  cssClass: string;
  properties: string[];
}
