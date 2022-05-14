import { Config } from "./config.js";
import { DataPart, getDataPart } from "./dataPart.js";

export { getVariants };
function getVariants(config: Config): Variants {
  const dataPartType = "variants";
  const combined = false;
  const dataPart = getDataPart(config, dataPartType, combined);

  /* ----------------------------- Variants Setup ----------------------------- */
  let media = dataPart["media"];
  let dynamicMedia = dataPart["dynamicMedia"];
  let themes = dataPart["themes"];
  let pseudoClasses = dataPart["pseudoClasses"];
  let pseudoElements = dataPart["pseudoElements"];
  let selectors = dataPart["selectors"];
  let dynamicPreSelectors = dataPart["dynamicPreSelectors"];
  let dynamicPostSelectors = dataPart["dynamicPostSelectors"];

  if (typeof media !== "object" || Array.isArray(media)) media = {};
  if (typeof dynamicMedia !== "object" || Array.isArray(dynamicMedia))
    dynamicMedia = {};
  if (typeof themes !== "object" || Array.isArray(themes)) themes = {};
  if (typeof pseudoClasses !== "object" || Array.isArray(pseudoClasses))
    pseudoClasses = {};
  if (typeof pseudoElements !== "object" || Array.isArray(pseudoElements))
    pseudoElements = {};
  if (typeof selectors !== "object" || Array.isArray(selectors)) selectors = {};
  if (
    typeof dynamicPreSelectors !== "object" ||
    Array.isArray(dynamicPreSelectors)
  )
    dynamicPreSelectors = {};
  if (
    typeof dynamicPostSelectors !== "object" ||
    Array.isArray(dynamicPostSelectors)
  )
    dynamicPostSelectors = {};

  return {
    media: media,
    dynamicMedia: dynamicMedia,
    themes: themes,
    pseudoClasses: pseudoClasses,
    pseudoElements: pseudoElements,
    selectors: selectors,
    dynamicPreSelectors: dynamicPreSelectors,
    dynamicPostSelectors: dynamicPostSelectors,
  };
}

export interface Variants {
  media: DataPart;
  dynamicMedia: DataPart;
  themes: DataPart;
  pseudoClasses: DataPart;
  pseudoElements: DataPart;
  selectors: DataPart;
  dynamicPreSelectors: DataPart;
  dynamicPostSelectors: DataPart;
  [key: string]: DataPart; //todo needed for config to work, reword entire thing
}

export type VariantGroup = {
  [key: string]: string;
};
//todo needed for it to work fix
