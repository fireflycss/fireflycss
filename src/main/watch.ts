import chokidar from "chokidar";
import fs from "node:fs";
import path from "node:path";

import { Data, getData } from "../utils/data/data";
import { getProperPath } from "../utils/general/functions";
import { mainBuild } from "./build";
export { mainWatch };

function mainWatch(data: Data) {
  //const createdShortcuts = { ...data.shortcuts };
  const createdClasses = getCssClasses(data.config.output);
  const watcher = chokidar.watch(data.config.folder);
  watcher.on("change", (pathChanged: string) => {
    if (data.config.debug) {
      console.log("File " + pathChanged + "has been changed");
    }
    if (path.basename(pathChanged) !== path.basename(data.config.output)) {
      if (data.config.watchMode === "build") {
        watchBuild(data);
      } else if (data.config.watchMode === "update") {
        watchUpdate(pathChanged, createdClasses, data);
      }
    }
  });
}

function getCssClasses(file: string): CssClasses {
  file = getProperPath(file); // todo needed?
  if (!fs.existsSync(file)) return {};
  const css = fs.readFileSync(file).toString();
  if (css === "") return {};
  const rawCssClasses: string[] | null = css.match(/(\..*?(?={))|(\[.*?])/g);
  if (!rawCssClasses) return {};

  const cssClasses: CssClasses = {};
  for (let cssClass of rawCssClasses) {
    cssClass = cssClass.replace(/((?<!\\):{1,2}[\d()A-Za-z-]+)$/gm, ""); // removes pseudo classes and elements from the name
    cssClass = cssClass.replace(/^\.|\\(?!=[\dA-Za-z])/gm, ""); // removes the beginning . and the \\ for the special characters
    cssClasses[cssClass] = 1;
  }
  return cssClasses;
}

function watchBuild(data: Data): void {
  mainBuild(getData(data.cliArguments));
}

function watchUpdate(
  pathChanged: string,
  createdClasses: CssClasses,
  data: Data
): void {
  //todo
  console.log(pathChanged, createdClasses, data);
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

interface CssClasses {
  [key: string]: number;
}
