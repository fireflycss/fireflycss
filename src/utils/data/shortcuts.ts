import { Config } from "./config";
import { getDataPart } from "./dataPart";

export { getShortcuts };

function getShortcuts(config: Config): Shortcuts {
  const dataPartType = "shortcuts";
  const combined = true;
  return getDataPart(config, dataPartType, combined);
}

export interface Shortcuts {
  extend?: Shortcuts;
  [key: string]: Shortcuts | (string[] | string);
}
