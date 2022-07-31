import { readdirSync, statSync } from "node:fs";
import path, { join } from "node:path";

export function stringReplaceAt(
  inputString: string,
  index: number,
  replacement: string
): string {
  if (index > inputString.length - 1) return inputString;
  const inputStringArray = [...inputString];
  inputStringArray[index] = replacement;
  return inputStringArray.join("");
}

export function getAllFiles(
  directory: string,
  extension: string,
  files: string[] | false = false,
  result: string[] | false = false
): string[] {
  if (!files) files = readdirSync(directory);
  if (!result) result = [];
  const regex = new RegExp(`\\${extension}$`);
  for (const fileName of files) {
    const file = join(directory, fileName);
    if (statSync(file).isDirectory()) {
      try {
        result = getAllFiles(file, extension, readdirSync(file), result);
      } catch {
        continue;
      }
    } else {
      if (regex.test(file)) {
        result.push(file);
      }
    }
  }
  return result;
}
export function escapeRegex(string: string): string {
  //todo test if this is faster
  /*

  let x= {"!":1}
  let newString = ""
  for(let a=0;a<string.length;a++){
      if(string.charAt(a)in x){
          newString+= "\\"+string.charAt(a)
      }else{
          newString += string.charAt(a)
      }
  }
  return newString
  */
  return string.replace(/[$()*+.?[\\\]^{|}]/g, "\\$&"); // $& means the whole matched string
}
export function escapeCssCharacters(string: string): string {
  return string
    .replace(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g, "\\$&")
    .replace(/^(\d)/, "\\3$1 "); // $& means the whole matched string
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumber(x: any): boolean {
  return typeof x == "number" && !Number.isNaN(x) ? true : false;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isInt(x: any): boolean {
  return typeof x == "number" && !Number.isNaN(x) && Number.isInteger(x)
    ? true
    : false;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isFloat(x: any): boolean {
  return typeof x == "number" && !Number.isNaN(x) && !Number.isInteger(x)
    ? true
    : false;
}

export function removeAllFromArray(
  array: Array<string>,
  value: string
): Array<string> {
  let index = 0;
  while (index < array.length) {
    if (array[index] === value) {
      array.splice(index, 1);
    } else {
      ++index;
    }
  }
  return array;
}

export function checkArrayAllNumbers(
  array: RegExpMatchArray | (string | number)[] | undefined
): number[] {
  if (!array) return [];
  const returnArray: number[] = [];
  for (const item of array) {
    if (typeof item === "number") {
      returnArray.push(item);
    } else {
      return [];
    }
  }
  return returnArray;
}

export function getProperPath(filePath: string): string {
  if (
    filePath === path.basename(filePath) ||
    filePath.startsWith("./") ||
    filePath.startsWith("../")
  ) {
    filePath = path.join(process.cwd(), filePath);
  }
  return filePath;
}
