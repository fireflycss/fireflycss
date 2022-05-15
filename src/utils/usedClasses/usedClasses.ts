import { readFileSync, statSync } from "node:fs";

import { Data } from "../data/data.js";
import { getAllFiles } from "../general/functions.js";
import { parseHtmlClasses } from "./html.js";
import { getSafelistClasses } from "./safelist.js";
import { getShortcutClasses } from "./shortcuts.js";

export function getUsedClasses(data: Data): UsedClasses {
  const filePaths = getFilePaths(data);
  const content = getFilesContent(filePaths);
  const stringClasses = parseContentClasses(content, data);
  const objectClasses = getObjectClasses(data);
  const testClasses: string[] = []; //["bg:hwb(108_39%_29%/0.5)"]; //todo Dev only
  return {
    strings: [...testClasses, ...stringClasses],
    objects: objectClasses,
  };
}

function getFilePaths(data: Data): string[] {
  let filePaths: string[] = [];

  /* ------------------------------- Root Folder ------------------------------ */
  if (data.config.folder) {
    filePaths = [...filePaths, ...getFilesFromFolder(data.config.folder, data)];
  }

  /* ------------------------------ Scan Folders ------------------------------ */
  if (data.config.scanFolders) {
    for (const folder of data.config.scanFolders) {
      filePaths = [...filePaths, ...getFilesFromFolder(folder, data)];
    }
  }
  /* ------------------------------- Scan Files ------------------------------- */
  if (data.config.scanFiles) {
    filePaths = [...filePaths, ...data.config.scanFiles];
  }
  return filePaths;
}

function getFilesFromFolder(folder: string, data: Data): string[] {
  let filePaths: string[] = [];
  if (!statSync(folder).isDirectory()) return filePaths;
  for (const extension of data.config.scanFileExtensions) {
    filePaths = [...filePaths, ...getAllFiles(folder, extension)];
  }
  return filePaths;
}

function getFilesContent(filePaths: string[]) {
  let content = "";
  for (const filePath of filePaths) {
    content += readFileSync(filePath, "utf8");
    +"\n";
  }
  return content;
}

function parseContentClasses(content: string, data: Data) {
  let stringClasses: string[] = [];
  stringClasses = parseHtmlClasses(content, stringClasses);
  stringClasses = getSafelistClasses(data, stringClasses);
  //todo support javascript, css @apply
  return stringClasses;
}

function getObjectClasses(data: Data): ObjectUsedClass[] {
  let objectClasses: ObjectUsedClass[] = [];
  objectClasses = getShortcutClasses(data, objectClasses);
  return objectClasses;
}

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
export interface UsedClasses {
  strings: string[];
  objects: ObjectUsedClass[];
}
export type ObjectUsedClass = {
  className: string;
  classes: string[];
  important: string[];
};
