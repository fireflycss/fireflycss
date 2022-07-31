import { CssData } from "../../main/loop.js";
import { ClassData } from "../classData/classData.js";
import { Data } from "../data/data.js";

export function classDataToCssData(
  classData: ClassData,
  cssData: CssData,
  data: Data
): CssData {
  const cssClass: string | undefined = classData.cssClass;
  if (!cssClass) return cssData;
  const usedMedia: string[] = classData.usedMedia || [];
  let includedMedia = false;
  if (usedMedia.length > 0) {
    includedMedia = true;
  }
  let cssDataReference = cssData;
  for (const media of usedMedia) {
    let mediaReference = cssDataReference[media];
    if (!cssDataReference[media]) {
      cssDataReference[media] = { DEFAULT: [] };
      mediaReference = cssDataReference[media];
    }
    if (typeof mediaReference === "object" && !Array.isArray(mediaReference)) {
      cssDataReference = mediaReference;
    }
  }
  if (includedMedia && Array.isArray(cssDataReference["DEFAULT"])) {
    cssDataReference["DEFAULT"]?.push(cssClass);
  } else if (Array.isArray(cssData["DEFAULT"])) {
    cssData["DEFAULT"].push(cssClass);
  } else {
    cssData["DEFAULT"] = [cssClass];
  }
  cssData = cssDataKeyframes(cssData, classData, data);
  return cssData;
}

function cssDataKeyframes(
  cssData: CssData,
  classData: ClassData,
  data: Data
): CssData {
  if (!classData.properties) return cssData;
  for (const propertyValue of classData.properties) {
    const propertyArray = propertyValue.match(/^[\da-z-]+?(?=:)/g);
    if (!propertyArray || !propertyArray[0]) continue;
    const property = propertyArray[0];
    if (data.config.keyframesProperties.includes(property)) {
      cssData = cssDataKeyframesInsert(cssData, propertyValue, data);
    }
  }
  return cssData;
}

function cssDataKeyframesInsert(
  cssData: CssData,
  propertyValue: string,
  data: Data
): CssData {
  const values: string[] = propertyValue
    .replace(/[a-z-]+:\s*/, "")
    .split(/\s|,/g);
  for (const value of values) {
    if (data.keyframes[value]) {
      if (!cssData.keyframes) {
        cssData.keyframes = [];
      }
      cssData.keyframes.push(
        "@keyframes " + value + " {\n" + data.keyframes[value] + "\n}"
      );
    }
  }
  return cssData;
}
