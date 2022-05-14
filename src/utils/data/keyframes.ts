import { Config } from "./config.js";
import { DataPart, getDataPart } from "./dataPart.js";

export { getKeyframes };

function getKeyframes(config: Config): Keyframes {
  const dataPartType = "keyframes";
  const combined = true;
  const dataPart = getDataPart(config, dataPartType, combined);
  return compileKeyframes(dataPart);
}

export interface Keyframes {
  extend?: Keyframes;
  [key: string]: Keyframes | (string[] | string);
}

function compileKeyframes(dataPart: DataPart): Keyframes {
  const keyframes: Keyframes = {};
  const dataPartKeys = Object.keys(dataPart);
  for (const possibleKeyframe of dataPartKeys) {
    const rulesObject = dataPart[possibleKeyframe];
    if (typeof rulesObject !== "object" || Array.isArray(rulesObject)) continue;
    const keyframe = handleRules(rulesObject);
    keyframes[possibleKeyframe] = keyframe;
  }
  return keyframes;
}

function handleRules(rulesObject: DataPart): string {
  let keyframe = "";
  const rules = Object.keys(rulesObject);
  for (const rule of rules) {
    const ruleValue = rulesObject[rule];
    if (typeof ruleValue !== "string" && !Array.isArray(ruleValue)) continue;

    const ruleEnd = rule !== rules[rules.length - 1] ? "\n" : "";
    keyframe = handleRule(keyframe, rule, ruleValue, ruleEnd);
  }
  return keyframe;
}

function handleRule(
  keyframe: string,
  rule: string,
  ruleValue: string | string[],
  ruleEnd: string
): string {
  if (rule.includes(",")) {
    rule = rule.replace(/\s/g, "").split(",").join(",\n\t");
  }
  keyframe +=
    typeof ruleValue === "string"
      ? "\t" + rule + " {\n\t\t" + ruleValue + ";\n\t}" + ruleEnd
      : "\t" +
        rule +
        " {\n\t\t" +
        ruleValue.join(";\n\t\t") +
        ";\n\t}" +
        ruleEnd;
  return keyframe;
}
