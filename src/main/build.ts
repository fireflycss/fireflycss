import { cssDataToCss } from "../utils/cssCompiling/cssDataToCss.js";
import { getBaseCss } from "../utils/cssCompiling/getBaseCss.js";
import { writeToFile } from "../utils/cssCompiling/writeToFile.js";
import { Data } from "../utils/data/data.js";
import {
  getUsedClasses,
  UsedClasses,
} from "../utils/usedClasses/usedClasses.js";
import { createdClasses, CssData, mainLoop } from "./loop.js";

export function mainBuild(data: Data) {
  const usedClasses: UsedClasses = getUsedClasses(data); // Timed separately
  const start = Date.now(); // Time build time
  const createdClasses: createdClasses = {};
  const cssData: CssData = mainLoop(usedClasses, createdClasses, data);
  //console.log(cssData);
  const css = cssDataToCss(cssData, getBaseCss(), data);
  writeToFile(css, data.config.output);
  const end = Date.now() - start;
  console.info("Build time: %dms", end);
}
