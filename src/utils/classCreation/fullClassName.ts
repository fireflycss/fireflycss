import { ClassData } from "../classData/classData.js";
import { Data } from "../data/data.js";
import { escapeCssCharacters, escapeRegex } from "../general/functions.js";

export function setupFullClassName(
  classData: ClassData,
  data: Data,
  utilityVariants: string[] = []
): ClassData {
  let preClasses = "";
  let postClassName = "";
  let usedSelectors = { pre: "", post: "" };

  const usedVariants: string[] = getUsedVariants(
    classData,
    utilityVariants,
    data
  );

  /* -------------------------------- Variants -------------------------------- */

  let usedMedia: string[] = [];
  const createdVariants: string[] = [];

  /* --------------------------- Used Variants Loop --------------------------- */

  for (const usedVariant of usedVariants) {
    /* ---------------------------------- Media --------------------------------- */
    const oldUsedMedia = usedMedia;
    usedMedia = checkForMedia(usedVariant, usedMedia, createdVariants, data);
    if (usedMedia !== oldUsedMedia) continue;

    /* --------------------------------- Themes --------------------------------- */

    const oldPreClasses = preClasses;
    preClasses = checkForThemes(usedVariant, preClasses, createdVariants, data);
    if (preClasses !== oldPreClasses) continue;

    /* ----------------------------- Pseudo Classes ----------------------------- */

    let oldPostClassName = postClassName;
    postClassName = checkForPseudoClasses(
      usedVariant,
      postClassName,
      createdVariants,
      data
    );
    if (postClassName !== oldPostClassName) continue;

    /* ----------------------------- Pseudo Elements ---------------------------- */

    oldPostClassName = postClassName;
    postClassName = checkForPseudoElements(
      usedVariant,
      postClassName,
      createdVariants,
      data
    );
    if (postClassName !== oldPostClassName) continue;

    /* --------------------------------- Groups --------------------------------- */

    preClasses = checkForGroups(usedVariant, preClasses, createdVariants, data);
    if (preClasses !== oldPreClasses) continue;

    /* -------------------------------- Selectors ------------------------------- */

    const oldUsedSelectors = usedSelectors;
    usedSelectors = checkForSelectors(
      usedVariant,
      usedSelectors,
      createdVariants,
      data
    );
    if (usedSelectors !== oldUsedSelectors) continue;
  }
  /* -------------------------------- Execution ------------------------------- */

  classData.usedVariants = createdVariants;
  classData.usedMedia = usedMedia;
  classData.preClasses = preClasses;
  classData.preSelectors = usedSelectors.pre;
  classData.postClassName = postClassName;
  classData.postSelectors = usedSelectors.post;
  classData.fullClassName = getFullClassName(classData, data);
  return classData;
}

function getUsedVariants(
  classData: ClassData,
  utilityVariants: string[],
  data: Data
): string[] {
  const variantDelimiter = data.config.delimiters.variant;
  const variantDelimiterRegex = new RegExp(
    "\\" + variantDelimiter + `(?!$|[0-9]|\\-)(?![^[\\[\\(]*[\\]\\)])`,
    "g"
  );
  const className = classData.className;
  let usedVariants: string[] | undefined = [];
  if (classData.type === "attributeWithValue") {
    usedVariants = className
      .split(/~=/)[1]
      ?.replace(/^!/, "")
      .split(variantDelimiterRegex)
      .slice(0, -1);
    const usedVariantsAttribute = className
      .split(/~=/)[0]
      ?.split(variantDelimiterRegex);
    if (!usedVariants || !usedVariantsAttribute) return [];
    usedVariants = [...usedVariantsAttribute, ...usedVariants];
  } else {
    usedVariants = className.split(variantDelimiterRegex).slice(0, -1);
  }
  if (utilityVariants.length > 0) {
    //todo determine if for selectors utility variants should be first or after.
    usedVariants = [...utilityVariants, ...usedVariants];
  }
  return usedVariants;
}

function checkForMedia(
  usedVariant: string,
  usedMedia: string[],
  createdVariants: string[],
  data: Data
): string[] {
  const media = data.variants.media;
  const dynamicMedia = data.variants.dynamicMedia;
  if (media[usedVariant]) {
    usedMedia.push(usedVariant);
    createdVariants.push(usedVariant);
  } else {
    const valueDelimiter = data.config.delimiters.value;
    //todo improve regex
    if (/\d+/.test(usedVariant) === true) {
      const valueDelimiterRegex = new RegExp(
        "(" + escapeRegex(valueDelimiter) + "[0-9]+(\\.|\\/)?[0-9]+(\\w|\\%)*)"
      );
      const mediaElement = usedVariant.replace(valueDelimiterRegex, "");
      if (dynamicMedia[mediaElement]) {
        createdVariants.push(usedVariant);
        usedMedia.push(usedVariant);
      }
    }
  }
  return usedMedia;
}

function checkForThemes(
  usedVariant: string,
  preClasses: string,
  createdVariants: string[],
  data: Data
): string {
  const themes = data.variants.themes;
  const useThemes = data.config.useThemes;
  if (useThemes === true && themes[usedVariant]) {
    createdVariants.push(usedVariant);
    preClasses += "." + usedVariant + " ";
  }
  return preClasses;
}

function checkForGroups(
  usedVariant: string,
  preClasses: string,
  createdVariants: string[],
  data: Data
): string {
  //const valueDelimiter = data.config.delimiters.value;
  const pseudoClasses = data.variants.pseudoClasses;
  if (usedVariant.startsWith("group-")) {
    const UsedVariantNoGroup = usedVariant.replace("group-", "");
    if (pseudoClasses[UsedVariantNoGroup]) {
      preClasses += ".group:" + pseudoClasses[UsedVariantNoGroup] + " "; //todo check if : next to group is required or is it supposed to be the value delimiter
      createdVariants.push(usedVariant);
    }
  }
  return preClasses;
}

function checkForPseudoClasses(
  usedVariant: string,
  postClassName: string,
  createdVariants: string[],
  data: Data
): string {
  const pseudoClasses = data.variants.pseudoClasses;
  if (pseudoClasses[usedVariant]) {
    postClassName += ":" + pseudoClasses[usedVariant];
    createdVariants.push(usedVariant);
  }
  return postClassName;
}

function checkForPseudoElements(
  usedVariant: string,
  postClassName: string,
  createdVariants: string[],
  data: Data
): string {
  const pseudoElements = data.variants.pseudoElements;
  if (pseudoElements[usedVariant]) {
    postClassName += "::" + pseudoElements[usedVariant];
    createdVariants.push(usedVariant);
  }
  return postClassName;
}

function checkForSelectors(
  usedVariant: string,
  usedSelectors: UsedSelectors,
  createdVariants: string[],
  data: Data
): { pre: string; post: string } {
  const selectors = data.variants.selectors;
  /* -------------------------------- Selectors ------------------------------- */

  if (selectors[usedVariant]) {
    usedSelectors.post += " " + selectors[usedVariant];
    createdVariants.push(usedVariant);
    return usedSelectors;
  }
  /* ---------------------------- Dynamic Selectors --------------------------- */
  usedSelectors = setupDynamicSelector(usedVariant, usedSelectors, data);

  return usedSelectors;
}

function setupDynamicSelector(
  usedVariant: string,
  usedSelectors: UsedSelectors,
  data: Data
): UsedSelectors {
  const dynamicPreSelectors = data.variants.dynamicPreSelectors;
  const dynamicPostSelectors = data.variants.dynamicPostSelectors;
  const valueDelimiter = data.config.delimiters.value;
  const valueDelimiterRegex = new RegExp(
    "(?<!\\\\|\\" +
      escapeRegex(valueDelimiter) +
      ")" +
      escapeRegex(valueDelimiter) +
      "(?![^[\\[\\(]*[\\]\\)])",
    "g"
  );
  const selectorArray = usedVariant.split(valueDelimiterRegex);
  const selectorName = selectorArray[0];
  let selecting = selectorArray[1];
  if (!selectorName || !selecting) return usedSelectors;

  /* -------------------------- Pre Dynamic Selectors ------------------------- */
  let selector = dynamicPreSelectors[selectorName];
  if (typeof selector === "string") {
    selecting = checkForSelectingIdentifier(selecting);
    if (selector === ".") {
      usedSelectors.pre += selecting;
    } else if (selector === " ") {
      usedSelectors.pre += selecting + " ";
    } else {
      usedSelectors.pre += selecting + " " + selector;
    }
    return usedSelectors;
  }
  /* ------------------------- Post Dynamic Selectors ------------------------- */
  selector = dynamicPostSelectors[selectorName];
  if (typeof selector === "string") {
    selecting = checkForSelectingIdentifier(selecting);
    usedSelectors.post +=
      selector === " " ? " " + selecting : " " + selector + " " + selecting;
    return usedSelectors;
  }

  return usedSelectors;
}

function checkForSelectingIdentifier(selecting: string): string {
  if (/^\(.+\)$/.test(selecting) === true) {
    selecting = "." + escapeCssCharacters(selecting.replace(/^\(|\)$/g, ""));
  } /*else if (/^\[.+]$/.test(selecting) === true) {
    selecting =
      "[" + escapeCssCharacters(selecting.replace(/^\[|]$/g, "")) + "]";
  }*/
  return selecting;
}

function getFullClassName(classData: ClassData, data: Data): string {
  const className = classData.className;
  const preClasses = classData.preClasses;
  const preSelectors = classData.preSelectors;
  const postClassName = classData.postClassName;
  const postSelectors = classData.postSelectors;

  let fullClassName = "";
  switch (classData.type) {
    case "class":
    case "arbitrary": {
      const escapedClassName = escapeCssCharacters(className);
      fullClassName =
        preClasses +
        preSelectors +
        "." +
        escapedClassName +
        postClassName +
        postSelectors;

      break;
    }
    case "attribute": {
      const escapedClassName = escapeCssCharacters(className);
      fullClassName =
        preClasses +
        preSelectors +
        "[" +
        escapedClassName +
        "]" +
        postClassName +
        postSelectors;

      break;
    }
    case "attributeWithValue": {
      const classNameArray = className.split(/~=/);
      if (!classNameArray[0] || !classNameArray[1]) return "";
      const attribute = escapeCssCharacters(classNameArray[0]);
      const attributeValue = escapeCssCharacters(classNameArray[1]);
      fullClassName =
        preClasses +
        preSelectors +
        "[" +
        attribute +
        "~=" +
        attributeValue +
        "]" +
        postClassName +
        postSelectors;

      break;
    }
    case "variable":
      {
        let escapedClassName = escapeCssCharacters(className);
        if (escapedClassName.startsWith("\\$")) {
          escapedClassName = escapedClassName.replace("\\$", "\\0024");
          //todo move this to escape css character, replace the first character in a class. this will allow this to go with class as they are the same
        }
        fullClassName =
          preClasses +
          preSelectors +
          "." +
          escapedClassName +
          postClassName +
          postSelectors;
      }
      break;
    case "rawCss":
      {
        const variantDelimiter = data.config.delimiters.variant;
        const usedVariants = classData.usedVariants;
        let property = className;
        for (const usedVariant of usedVariants) {
          property = property.replace(
            usedVariant + variantDelimiter, //todo figure out what this line is doing
            ""
          );
        }
        classData.properties = [property];
      }
      break;

    // No default
  }

  return fullClassName;
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
interface UsedSelectors {
  pre: string;
  post: string;
}
