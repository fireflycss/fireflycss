import { cssDataToCss } from "../utils/cssCompiling/cssDataToCss";
import { getBaseCss } from "../utils/cssCompiling/getBaseCss";
import { writeToFile } from "../utils/cssCompiling/writeToFile";
import { Data } from "../utils/data/data";
import { getUsedClasses, UsedClasses } from "../utils/usedClasses/usedClasses";
import { createdClasses, CssData, mainLoop } from "./loop";

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
