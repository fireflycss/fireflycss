import { CssData } from "../../main/loop.js";
import { dynamicGenerator } from "../classCreation/dynamicGenerator.js";
import { Data } from "../data/data.js";
import { removeAllFromArray } from "../general/functions.js";

export function cssDataToCss(
  cssData: CssData,
  css: string,
  data: Data
): string {
  const cssDataKeys = Object.keys(cssData);
  //controls the order, normal classes first, then media, etc
  if (cssDataKeys[0] !== "DEFAULT" && cssDataKeys.includes("DEFAULT")) {
    cssDataKeys.splice(cssDataKeys.indexOf("DEFAULT"));
    cssDataKeys.unshift("DEFAULT");
    //todo not sure exactly how this works
  }
  //first level
  for (const selectedMedia of cssDataKeys) {
    let currentMedia: string[] = [];
    if (!selectedMedia) continue;
    let cssDataReference = cssData[selectedMedia];
    if (!cssDataReference) continue;

    if (selectedMedia === "DEFAULT" && Array.isArray(cssDataReference)) {
      css += cssDataReference.join("\n") + "\n";
    } else if (selectedMedia === "keyframes") {
      continue;
    } else if (
      typeof cssDataReference === "object" &&
      !Array.isArray(cssDataReference)
    ) {
      currentMedia.push(selectedMedia);
      let compilationData: CompilationData = {
        cssData: cssData,
        css: css,
        cssDataReference: cssDataReference,
        selectedMedia: selectedMedia,
        currentMedia: currentMedia,
        cssMediaEnd: "",
      };
      compilationData = iterateCssDataLevel(compilationData, data);
      cssData = compilationData.cssData;
      css = compilationData.css;
      cssDataReference = compilationData.cssDataReference;
      currentMedia = compilationData.currentMedia;
      css += "\n";
    }
  }
  if (cssData["keyframes"]) {
    css += Object.values(cssData["keyframes"]).join("\n") + "\n";
  }
  return css;
}

function iterateCssDataLevel(
  compilationData: CompilationData,
  data: Data
): CompilationData {
  const cssDataReference = compilationData.cssDataReference;
  const cssDataReferenceKeys = Object.keys(cssDataReference);
  //controls the order, normal classes first, then media, etc
  if (
    cssDataReferenceKeys[0] !== "DEFAULT" &&
    cssDataReferenceKeys.includes("DEFAULT")
  ) {
    cssDataReferenceKeys.splice(cssDataReferenceKeys.indexOf("DEFAULT"));
    cssDataReferenceKeys.unshift("DEFAULT");
    //todo not sure exactly how this works
  }
  for (const selectedMedia of cssDataReferenceKeys) {
    compilationData.selectedMedia = selectedMedia;
    compilationData =
      selectedMedia !== "DEFAULT"
        ? goToNextCssDataLevel(compilationData, data)
        : compileCss(compilationData, data);
  }
  return compilationData;
}

function goToNextCssDataLevel(
  compilationData: CompilationData,
  data: Data
): CompilationData {
  const selectedMedia = compilationData.selectedMedia;
  compilationData.currentMedia.push(selectedMedia);
  const newCssDataReference = compilationData.cssDataReference[selectedMedia];
  if (!newCssDataReference || Array.isArray(newCssDataReference))
    return compilationData;
  compilationData.cssDataReference = newCssDataReference;
  compilationData = iterateCssDataLevel(compilationData, data);

  compilationData.currentMedia = removeAllFromArray(
    compilationData.currentMedia,
    selectedMedia
  );
  compilationData.cssDataReference = compilationData.cssData;
  for (const selectedCurrentMedia of compilationData.currentMedia) {
    const newCssDataReference =
      compilationData.cssDataReference[selectedCurrentMedia];
    if (!newCssDataReference || Array.isArray(newCssDataReference)) continue;
    compilationData.cssDataReference = newCssDataReference;
  }
  return compilationData;
}

function compileCss(
  compilationData: CompilationData,
  data: Data
): CompilationData {
  const currentMedia = compilationData.currentMedia;
  const media = data.variants.media;
  compilationData.cssMediaEnd = "";
  for (let a = 0; a < currentMedia.length; a++) {
    compilationData.cssMediaEnd += "\n}";
  }
  const lastCurrentMedia = currentMedia[currentMedia.length - 1];
  if (!lastCurrentMedia) return compilationData;
  if (lastCurrentMedia in media) {
    compilationData = compileCssMedia(compilationData, data);
  } else if (/[\d%]+/.test(lastCurrentMedia)) {
    compilationData = compileCssDynamicMedia(compilationData, data);
  }
  compilationData = compileCssClasses(compilationData);

  return compilationData;
}

function compileCssMedia(
  compilationData: CompilationData,
  data: Data
): CompilationData {
  const currentMedia = compilationData.currentMedia;
  const media = data.variants.media;
  if (!/\n$/.test(compilationData.css) && compilationData.css !== "") {
    const mediaEndCount = compilationData.cssMediaEnd.match(/}/g)?.length;
    if (!mediaEndCount) return compilationData;
    let cssString = "";
    for (let a = mediaEndCount - 1; a > 0; a--) {
      cssString = cssString.replace(/^/gm, "\t");
    }
    compilationData.css += "\n" + cssString;
  }
  const lastCurrentMedia = currentMedia[currentMedia.length - 1] || "";
  const mediaValue = media[lastCurrentMedia];
  compilationData.css += "@media (" + mediaValue + ") {";
  return compilationData;
}

function compileCssDynamicMedia(
  compilationData: CompilationData,
  data: Data
): CompilationData {
  const currentMedia = compilationData.currentMedia;
  const dynamicMedia = data.variants.dynamicMedia;
  const valueDelimiter = data.config.delimiters.value;
  const valueDelimiterRegex = new RegExp(
    "(\\" + valueDelimiter + "\\d+(\\.|\\/|)\\d+(\\w+|\\%|))"
  );
  const lastCurrentMedia = currentMedia[currentMedia.length - 1];
  if (!lastCurrentMedia) return compilationData;
  const dynamicMediaElement = lastCurrentMedia.replace(valueDelimiterRegex, "");
  if (!dynamicMedia[dynamicMediaElement]) return compilationData;
  let value = "";
  if (dynamicMediaElement !== "aspect") {
    const utilityData = {
      prefix: "",
      property: "",
      dynamic: {
        enabled: true,
        primaryDataType: "length",
        dataTypes: ["length"],
        combinations: 1,
      },
      keys: {},
    };
    const lastCurrentMediaSplit = lastCurrentMedia.split(
      dynamicMediaElement + valueDelimiter
    );
    const input = lastCurrentMediaSplit[lastCurrentMediaSplit.length - 1];
    if (!input) return compilationData;
    value = dynamicGenerator(input, utilityData, data);
  } else {
    const dynamicMediaSplit = lastCurrentMedia.split(
      dynamicMediaElement + valueDelimiter
    );
    value = dynamicMediaSplit[dynamicMediaSplit.length - 1] || "";
  }

  if (!value) return compilationData;
  if (!/\n$/.test(compilationData.css) && compilationData.css !== "") {
    const mediaEndCount = compilationData.cssMediaEnd.match(/}/g)?.length;
    if (!mediaEndCount) return compilationData;
    let cssString = "";
    for (let a = mediaEndCount - 1; a > 0; a--) {
      cssString = cssString.replace(/^/gm, "\t");
    }
    compilationData.css += "\n" + cssString;
  }
  compilationData.css +=
    "@media (" + dynamicMedia[dynamicMediaElement] + ": " + value + ") {";
  return compilationData;
}

function compileCssClasses(compilationData: CompilationData): CompilationData {
  const classesArray = compilationData.cssDataReference["DEFAULT"];
  const mediaEndCount = compilationData.cssMediaEnd.match(/}/g)?.length;
  if (!mediaEndCount) return compilationData;
  if (!Array.isArray(classesArray)) return compilationData;
  let cssString = classesArray.join("\n");
  if (cssString) {
    for (let a = 0; a < mediaEndCount; a++) {
      cssString = cssString.replace(/^/gm, "\t");
    }
    compilationData.css += "\n" + cssString;
  }
  if (Object.keys(compilationData.cssDataReference).length === 1) {
    for (let a = mediaEndCount - 1; a > 0; a--) {
      compilationData.cssMediaEnd = compilationData.cssMediaEnd.replace(
        /((?<!\t)})/,
        "\t".repeat(a) + "$1"
      );
    }
    compilationData.css += compilationData.cssMediaEnd;
  }

  return compilationData;
}

/* -------------------------------------------------------------------------- */
/*                                    types                                   */
/* -------------------------------------------------------------------------- */
type CompilationData = {
  cssData: CssData;
  css: string;
  cssDataReference: CssData;
  selectedMedia: string;
  currentMedia: string[];
  cssMediaEnd: string;
};
