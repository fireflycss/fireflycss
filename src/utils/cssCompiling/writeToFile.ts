import * as fs from "node:fs";

export function writeToFile(css: string, output: string) {
  fs.writeFileSync(output, css);
}
