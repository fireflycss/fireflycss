import * as fs from "node:fs";

import { isColor } from "../classCreation/colors.js";
import { getAllFiles } from "../general/functions.js";
import { DataPart, DataPartType } from "./dataPart.js";

export function readDataFiles(
  folder: string,
  combined: boolean,
  dataPartType: DataPartType
): DataPart {
  let dataPart: DataPart = {};
  //dataPart[dataPartType] = {}
  if (!fs.existsSync(folder)) return dataPart;
  const files = getAllFiles(folder, ".js");
  //const filesData = {};
  for (const file of files) {
    let fileContent = require(file);
    if (typeof fileContent !== "object") continue;
    if (fileContent["default"]) {
      fileContent = fileContent["default"]; //support for "exports.default/export default"
    }
    delete require.cache[require.resolve(file)]; // deletes cache for hot updates of data
    dataPart = compileDataPart(fileContent, dataPart, combined, dataPartType);
  }
  return dataPart;
}

function compileDataPart(
  fileContent: { [key: string]: DataPart },
  dataPart: DataPart,
  combined: boolean,
  dataPartType: DataPartType
): DataPart {
  const fileContentKeys = Object.keys(fileContent);
  for (const key of fileContentKeys) {
    const keyData: DataPart = fileContent[key] || {};
    if (typeof keyData !== "object") continue;
    dataPart = combined
      ? compileCombined(dataPart, keyData)
      : compileUncombined(dataPart, keyData, key, dataPartType);
  }

  return dataPart;
}

function compileCombined(dataPart: DataPart, keyData: DataPart): DataPart {
  if (!keyData) return dataPart;
  if (typeof keyData === "object" && !Array.isArray(keyData)) {
    return { ...dataPart, ...keyData };
  }
  return dataPart;
}

function compileUncombined(
  dataPart: DataPart,
  keyData: DataPart,
  key: string,
  dataPartType: DataPartType
): DataPart {
  if (!dataPart || !keyData) return dataPart;

  if (!dataPart[key]) {
    dataPart[key] = {};
  }
  if (dataPartType === "keys") {
    keyData = checkForCombinedKeys(keyData);
  }
  dataPart[key] = keyData;
  return dataPart;
}

function checkForCombinedKeys(keyData: DataPart): DataPart {
  const newKeyData: DataPart = {};
  const keyDataKeys = Object.keys(keyData);
  for (const keyDataKey of keyDataKeys) {
    const possibleObject = keyData[keyDataKey];
    if (typeof possibleObject !== "object" || Array.isArray(possibleObject)) {
      newKeyData[keyDataKey] = possibleObject || "";
      continue;
    }
    const possibleObjectKeys = Object.keys(possibleObject);
    for (const possibleObjectKey of possibleObjectKeys) {
      const value = possibleObject[possibleObjectKey];
      if (typeof value !== "string") continue;
      newKeyData[keyDataKey + "-" + possibleObjectKey] = value;
      if (possibleObjectKey === "500" && isColor(value)) {
        newKeyData[keyDataKey] = value;
      }
    }
  }
  //todo figure out if there is a better way to do this
  return newKeyData;
}
