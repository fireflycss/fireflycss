import { SimpleArguments } from "simple-arguments";

import { Data, getData } from "../utils/data/data";
import { mainBuild } from "./build";
import { mainDevelopmentTools as mainDevelopmentTools } from "./developmentTools";
import { mainTest } from "./test";
import { mainWatch } from "./watch";

export function main(cliArguments: SimpleArguments) {
  //console.log(cliArguments);
  const data: Data = getData(cliArguments);
  if (data.config.test) {
    mainTest(data);
  } else if (data.config.build) {
    mainBuild(data);
  } else if (data.config.watch) {
    mainWatch(data);
  } else if (data.config.developmentTools) {
    mainDevelopmentTools(data);
  } else {
    console.log("No option selected");
  }
}
