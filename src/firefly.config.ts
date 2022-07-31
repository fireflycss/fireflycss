import { defineConfig } from "./helpers/helpers";

export default defineConfig({
  /* --------------------------- FireFlyCSS Options --------------------------- */
  build: true,
  watch: false,
  developmentTools: false,
  watchMode: "build",
  minify: false,
  useThemes: true,
  port: 3000,
  debug: true,
  /* ------------------------------- File Paths ------------------------------- */
  folder: "./test",
  output: "./test/firefly.css",
  project: "./test/fireflycss",
  scanFiles: [], // specific files to scan
  scanFolders: [], // specific folders to scan
  scanFileExtensions: [".html", ".php", ".js", ".ts"],
  /* ----------------------- Delimiters and Identifiers ----------------------- */
  //!note: changing these is not certain to work as intended as of now
  delimiters: {
    variant: ".",
    value: ":",
    values: ",",
    multiple: ";",
    minus: "-",
    important: "!",
    space: "_",
    variable: "$",
    variableDefaultValue: "~",
    opacity: "/",
    permanent: "*",
    gradientPercentage: "%",
    variableId: "#",
  },
  //keyframes: { extend: { spin: { from: ["test"] } } },
  //utilities: { extend: { screenReader: { prefix: "test2" } } },
  /* ---------------------------- Dynamic Defaults ---------------------------- */
  defaultUnits: {}, //{length:"rem"}
  valueFunctions: {}, //{length:(x)=>x/4}
  //files

  /* ------------------------- Default Class Behavior ------------------------- */
  keyframesProperties: ["animation", "animation-name"],
  innerStringFunctions: ["url", "path"],
  prefix: "",
  functionPrefix: "f-",
  colorFormat: "rgba", //todo add support for this. // Output of values of dynamic generator for color inputs
  permanentOpacity: false, // determines the default behavior of colors opacity. False=variable can be set via its respective opacity utility.
  test: false,
});
