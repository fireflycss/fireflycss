import { Data } from "../data/data";

export function getUsedClasses(data: Data): UsedClasses {
  if (data.config.build === true) {
    console.log("TEMP"); //todo remove
  }
  return {
    strings: ["bg:hwb(108_39%_29%/0.5)"],
    objects: [],
  };
}

export interface UsedClasses {
  strings: string[];
  objects: ObjectUsedClass[];
}
export type ObjectUsedClass = {
  className: string;
  classes: string[];
  important: string[];
};
