import { Config } from "./config";
import { getDataPart } from "./dataPart";

export { getSafelist };

function getSafelist(config: Config): Safelist {
  const dataPartType = "safelist";
  const combined = true;
  return getDataPart(config, dataPartType, combined);
}

export interface Safelist {
  extend?: Safelist;
  [key: string]: Safelist | (string[] | string);
}
