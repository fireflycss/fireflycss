import { SimpleArguments } from "simple-arguments";

import { Config, getConfig } from "./config.js";
import { getKeyframes, Keyframes } from "./keyframes.js";
import { getKeys, Keys } from "./keys.js";
import { getSafelist, Safelist } from "./safelist.js";
import { getShortcuts, Shortcuts } from "./shortcuts.js";
import { DataUtilities, getUtilities } from "./utilities.js";
import { getVariants, Variants } from "./variants.js";

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
