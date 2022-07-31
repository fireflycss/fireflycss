import { Data } from "../data/data.js";
import { UtilityData } from "../data/utilities.js";
import { escapeRegex } from "../general/functions.js";
import { isValueValid } from "./valueValid.js";

export function arbitraryMatch(input: string): boolean {
  if (/^\[.+?]$/.test(input)) {
    return true;
  }
  return false;
}

export function arbitraryGenerator(
  input: string,
  utilityData: UtilityData,
  data: Data
): string {
  const spaceDelimiter: string = data.config.delimiters.space;
  //todo better logic
  //todo utility data- to define what type for arbitrary for shared prefixes
  //todo      will probably have to add to utility data and give each a type for arbitrary
  //todo keep underscore if underscore is common and spaces are invalid, such as in url()
  //todo      if want underscore, escape
  //todo support var character

  //todo only put it inside dynamic generator, and compare data types to see if it would be a valid data type
  //todo      as long as it isn't a function. if function, allow truly arbitrary

  //todo var support for any property as long as the data type is defined
  //todo      EX) bg:[color:var(--primary-color)]
  //? might be faster to build if passing the count of utilities with the same prefix, that way, valid value does
  //?         does not have to occur. if more than 1, check if valid, otherwise dont check.
  //?         although, to prevent invalid properties and less css file, check? guess can pass data
  //?         for config to determine the behavior.

  //todo support dynamic math here to solve something like 10+20

  const value: string = input
    .replace(/^\[|]$/g, "")
    .replace(new RegExp("(?<!\\\\)" + escapeRegex(spaceDelimiter), "g"), "")
    .replace(/(?<!\\)\\/g, "");

  //value validity
  if (isValueValid(value /*, utilityData*/) === false) {
    console.log(utilityData);
    return "";
  }
  return value;
}
