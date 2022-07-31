import path from "node:path";

import { Config } from "./config.js";
import { mergeData } from "./mergeData.js";
import { readDataFiles } from "./readDataFiles.js";

export function getDataPart(
  config: Config,
  dataPartType: DataPartType,
  combined: boolean
): DataPart {
  const dataPartFolder = path.join(__dirname, "../../data/" + dataPartType);
  let dataPart: DataPart = readDataFiles(
    dataPartFolder,
    combined,
    dataPartType
  );
  if (config.project) {
    const projectDataPartFolder = path.join(
      config.project,
      "./" + dataPartType
    );
    const projectDataPart: DataPart = readDataFiles(
      projectDataPartFolder,
      combined,
      dataPartType
    );
    dataPart = mergeData(dataPart, projectDataPart);
  }
  const configDataPart = config[dataPartType];
  if (configDataPart) {
    dataPart = mergeData(dataPart, configDataPart);
  }
  return dataPart;
}
export interface DataPart {
  extend?: DataPart;
  [key: string]: DataPart | DataPartValue;
}
export type DataPart3 = DataPartKeys;

export interface RawData {
  type: DataPartType;
  keys?: object;
  utilities?: object;
  variants?: object;
  keyframes?: object;
  shortcuts?: object;
}
export type DataPartValue =
  | string[]
  | string
  | { [key: string]: DataPartValue };

export type DataPartType =
  | "keys"
  | "utilities"
  | "variants"
  | "keyframes"
  | "shortcuts"
  | "safelist";

interface DataPartKeys {
  extend?: DataPartKeys;
  [key: string]: DataPartKeys | string;
}
