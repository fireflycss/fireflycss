import { Config } from "./config.js";
import { getDataPart } from "./dataPart.js";

export { getShortcuts };

function getShortcuts(config: Config): Shortcuts {
  const dataPartType = "shortcuts";
  const combined = true;
  return getDataPart(config, dataPartType, combined);
}

export interface Shortcuts {
  extend?: Shortcuts;
  [key: string]: Shortcuts | (string[] | string) | ShortcutObject;
}

export interface ShortcutObject {
  [key: string]: string | ShortcutObject;
}
