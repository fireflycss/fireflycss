import { cssDataToCss } from "../utils/cssCompiling/cssDataToCss.js";
import { Data } from "../utils/data/data.js";
import { createdClasses, CssData, mainLoop } from "./loop.js";

export function mainTest(data: Data) {
  const start = Date.now(); // Time build time
  const testingData = getTestClasses();
  const testClasses = Object.keys(testingData);
  const testsAmount = testClasses.length;
  const testsFailed: string[] = [];
  let testsPassed = 0;
  for (const className of testClasses) {
    if (!className) continue;
    const usedClasses = { strings: [className], objects: [] };
    const createdClasses: createdClasses = {};
    const cssData: CssData = mainLoop(usedClasses, createdClasses, data);
    const css = cssDataToCss(cssData, "", data);
    if (css === testingData[className]) {
      testsPassed += 1;
    } else {
      console.log(className + ":", [css]);
      testsFailed.push(className);
    }
  }

  console.log("Tests Passed: " + testsPassed + "/" + testsAmount);
  if (testsPassed !== testsAmount) {
    console.log("Tests Failed: " + testsFailed.join(", "));
  }
  const end = Date.now() - start;
  console.info("Test time: %dms", end);
}
//! all must end with \n
function getTestClasses(): { [key: string]: string } {
  return {
    /* --------------------------------- Colors --------------------------------- */
    "bg:red":
      ".bg\\:red {\n" +
      "\tbackground-color: rgba(244, 67, 54, var(--ff-bg-opacity, 1));\n" +
      "}\n",
    "bg:red/20":
      ".bg\\:red\\/20 {\n" +
      "\tbackground-color: rgba(244, 67, 54, var(--ff-bg-opacity, 0.2));\n" +
      "}\n",
    "bg:red/20*":
      ".bg\\:red\\/20\\* {\n" +
      "\tbackground-color: rgba(244, 67, 54, 0.2);\n" +
      "}\n",
    "bg:red/[20]":
      ".bg\\:red\\/\\[20\\] {\n" +
      "\tbackground-color: rgba(244, 67, 54, var(--ff-bg-opacity, 20));\n" +
      "}\n",
    "bg:red/[20]*":
      ".bg\\:red\\/\\[20\\]\\* {\n" +
      "\tbackground-color: rgba(244, 67, 54, 20);\n" +
      "}\n",
    "bg:#456":
      ".bg\\:\\#456 {\n" +
      "\tbackground-color: rgba(68, 85, 102, var(--ff-bg-opacity, 1));\n" +
      "}\n",
    "bg:#4564":
      ".bg\\:\\#4564 {\n" +
      "\tbackground-color: rgba(68, 85, 102, var(--ff-bg-opacity, 0.27));\n" +
      "}\n",
    "bg:#145643":
      ".bg\\:\\#145643 {\n" +
      "\tbackground-color: rgba(20, 86, 67, var(--ff-bg-opacity, 1));\n" +
      "}\n",
    "bg:#14564377":
      ".bg\\:\\#14564377 {\n" +
      "\tbackground-color: rgba(20, 86, 67, var(--ff-bg-opacity, 0.47));\n" +
      "}\n",
    "bg:#145643/20":
      ".bg\\:\\#145643\\/20 {\n" +
      "\tbackground-color: rgba(20, 86, 67, var(--ff-bg-opacity, 0.2));\n" +
      "}\n",
    "bg:#14564377/20":
      ".bg\\:\\#14564377\\/20 {\n" +
      "\tbackground-color: rgba(20, 86, 67, var(--ff-bg-opacity, 0.2));\n" +
      "}\n",
    "bg:#14564377/20*":
      ".bg\\:\\#14564377\\/20\\* {\n" +
      "\tbackground-color: rgba(20, 86, 67, 0.2);\n" +
      "}\n",
    "bg:f-rgba(244,67,54,0.77)":
      ".bg\\:f-rgba\\(244\\,67\\,54\\,0\\.77\\) {\n" +
      "\tbackground-color: rgba(244,67,54,0.77);\n" +
      "}\n", //todo maybe add spaces in functions where they should be. for consistency. of course, only when they are not followed by _. potential issue is that it interferes with potential arbitrary string, it would add a space when user does not want a space
    "bg:f-rgba(244,_67,_54,_0.77)":
      ".bg\\:f-rgba\\(244\\,_67\\,_54\\,_0\\.77\\) {\n" +
      "\tbackground-color: rgba(244, 67, 54, 0.77);\n" +
      "}\n",
    /* -------------------------- Dynamic Simple Values ------------------------- */
    "w:10": ".w\\:10 {\n" + "\twidth: 2.5rem;\n" + "}\n",
    "w:200px": ".w\\:200px {\n" + "\twidth: 200px;\n" + "}\n",
  };
}
