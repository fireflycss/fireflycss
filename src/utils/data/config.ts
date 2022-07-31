import fs, { existsSync } from "node:fs";
import path from "node:path";
import { SimpleArguments } from "simple-arguments";

import { getProperPath } from "../general/functions.js";
import { Keyframes } from "./keyframes.js";
import { Keys } from "./keys.js";
import { Safelist } from "./safelist.js";
import { Shortcuts } from "./shortcuts.js";
import { rawUtilities } from "./utilities.js";
import { Variants } from "./variants.js";

export function getConfig(cliArguments: SimpleArguments): Config {
  let config: Config = require("../../firefly.config");
  if (config["default"]) {
    config = config["default"];
  }
  const configLocations: string[] = [];
  if (typeof cliArguments["project"] === "string") {
    configLocations.push(
      getProperPath(cliArguments["project"] + "firefly.config.js")
    );
  }
  if (typeof cliArguments["folder"] === "string") {
    configLocations.push(
      getProperPath(cliArguments["folder"] + "firefly.config.js")
    );
  }
  if (typeof cliArguments["config"] === "string") {
    configLocations.push(getProperPath(cliArguments["config"]));
  }
  for (const configLocation of configLocations) {
    if (!existsSync(configLocation)) continue;

    let newConfig = require(configLocation);
    if (newConfig["default"]) {
      newConfig = newConfig["default"];
    }
    config = { ...config, ...newConfig };
  }
  config = argumentsToConfig(config, cliArguments);
  config = validateConfig(config);
  return config;
}

function argumentsToConfig(
  config: Config,
  cliArguments: SimpleArguments
): Config {
  if (cliArguments["build"]) {
    config.build = true;
  }
  if (cliArguments["watch"]) {
    config.watch = true;
  }
  if (cliArguments["developmentTools"]) {
    config.developmentTools = true;
  }
  if (typeof cliArguments["output"] === "string") {
    config.output = cliArguments["output"];
  }
  if (typeof cliArguments["folder"] === "string") {
    config.folder = cliArguments["folder"];
  }
  if (typeof cliArguments["project"] === "string") {
    config.project = cliArguments["project"];
  }
  if (typeof cliArguments["port"] === "number") {
    config.port = cliArguments["port"];
  }
  if (cliArguments["test"]) {
    config.test = true;
  }
  return config;
}

function validateConfig(config: Config): Config {
  if (config.folder) {
    config.folder = getProperPath(config.folder);
    if (fs.existsSync(config.folder) !== true) {
      console.log("Folder path is not valid");
      config.folder = process.cwd();
    }
  }
  if (config.output) {
    config.output = getProperPath(config.output);
    if (fs.existsSync(path.dirname(config.output)) !== true) {
      console.log("Output path is not valid");
      config.output = path.join(config.folder, "./firefly.css");
    }
  }
  if (config.project) {
    config.project = getProperPath(config.project);
    if (fs.existsSync(config.project) !== true) {
      console.log("Project data folder path is not valid");
      config.project = path.join(config.folder, "./fireflycss");
    }
  }
  return config;
}
/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */
export interface Config {
  build: boolean;
  watch: boolean;
  developmentTools: boolean;
  watchMode: string;
  minify: boolean;
  useThemes: boolean;
  port: number;
  debug: boolean;

  folder: string;
  output: string;
  project: string;
  scanFiles: string[];
  scanFolders: string[];
  scanFileExtensions: string[];
  delimiters: {
    variant: string;
    value: string;
    values: string;
    multiple: string;
    minus: string;
    important: string;
    space: string;
    variable: string;
    variableDefaultValue: string;
    opacity: string;
    permanent: string;
    gradientPercentage: string;
    variableId: string;
  };
  defaultUnits: object;
  valueFunctions: object;
  permanentOpacity: boolean;
  keyframesProperties: string[];
  innerStringFunctions: string[];
  colorFormat: string;
  prefix?: string;
  functionPrefix?: string;
  shortcuts?: Shortcuts;
  variants?: Variants;
  keys?: Keys;
  safelist?: Safelist;
  keyframes?: Keyframes;
  utilities?: rawUtilities;
  default?: Config;
  test?: boolean;
}
