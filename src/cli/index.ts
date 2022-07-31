#!/usr/bin/env node
import simpleArguments, { SimpleArguments } from "simple-arguments";

import { main } from "../main/main.js";

const version = "0.0.1";
const documentation = `Documentation Info for the FireFlyCSS CLI`;

const cliArguments: SimpleArguments = simpleArguments([
  { name: "help", alias: "h", type: Boolean },
  { name: "version", alias: "v", type: Boolean },
  { name: "build", alias: "b", type: Boolean },
  { name: "watch", alias: "w", type: Boolean },
  { name: "developerTools", alias: "d", type: Boolean },
  { name: "config", alias: "c", type: String, multiple: false, lazy: true }, //todo multiple or not multiple configs support. current is false
  { name: "port", alias: "p", type: Number },
  { name: "files", type: String, multiple: true, default: true },
  { name: "test", type: Boolean },
  { name: "verbose", alias: "v", type: Boolean, count: true }, //!test remove after
]);

if (cliArguments["help"]) {
  console.log(documentation);
  process.exit();
} else if (cliArguments["version"]) {
  console.log("Version: " + version);
  process.exit();
} else if (
  cliArguments["build"] ||
  cliArguments["watch"] ||
  cliArguments["devTools"] ||
  cliArguments["config"] ||
  cliArguments["test"]
) {
  main(cliArguments);
} else {
  console.log(documentation);
}
