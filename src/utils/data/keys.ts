import { Config } from "./config.js";
import { getDataPart } from "./dataPart.js";

export function getKeys(config: Config): Keys {
  const dataPartType = "keys";
  const combined = false;
  return getDataPart(config, dataPartType, combined);
}

export interface Keys {
  extend?: Keys;
  [key: string]: Keys | (string[] | string);
}
