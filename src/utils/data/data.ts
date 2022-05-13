import { SimpleArguments } from "simple-arguments";

import { Config, getConfig } from "./config";
import { getKeyframes, Keyframes } from "./keyframes";
import { getKeys, Keys } from "./keys";
import { getSafelist, Safelist } from "./safelist";
import { getShortcuts, Shortcuts } from "./shortcuts";
import { DataUtilities, getUtilities } from "./utilities";
import { getVariants, Variants } from "./variants";

export { getData };

function getData(cliArguments: SimpleArguments) {
  const start = Date.now();

  const config: Config = getConfig(cliArguments);
  const keys: Keys = getKeys(config);
  const utilities: DataUtilities = getUtilities(config, keys);
  const variants: Variants = getVariants(config);
  const keyframes: Keyframes = getKeyframes(config);
  const shortcuts: Shortcuts = getShortcuts(config);
  const safelist: Safelist = getSafelist(config);

  const data: Data = {
    cliArguments: cliArguments,
    config: config,
    keys: keys,
    utilities: utilities,
    variants: variants,
    keyframes: keyframes,
    shortcuts: shortcuts,
    safelist: safelist,
  };

  const timeUsed = Date.now() - start;
  console.log("Data Setup Time: %dms", timeUsed);
  return data;
}

export interface Data {
  cliArguments: SimpleArguments;
  config: Config;
  keys: Keys;
  utilities: DataUtilities;
  variants: Variants;
  keyframes: Keyframes;
  shortcuts: Shortcuts;
  safelist: Safelist;
}
