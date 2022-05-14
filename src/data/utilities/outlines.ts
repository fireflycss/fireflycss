export default {
  outlineStyle: {
    prefix: "outline",
    property: "outline-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: ["borderStyles", { auto: "auto" }],
  },
  outlineColor: {
    prefix: "outline",
    property: "outline-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  outlineOpacity: {
    prefix: "outline-o",
    property: "--ff-outline-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  outlineWidth: {
    prefix: "outline",
    property: "outline-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { thin: "thin", medium: "medium", thick: "thick" },
  },
  outline: {
    prefix: "outline",
    property: "outline",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      shorthand: {
        outline: ["outlineStyle", "outlineColor", "outlineWidth"],
      },
    },
    keys: {},
  },
  outlineOffset: {
    prefix: "outline-offset",
    property: "outline-offset",
    dynamic: { enabled: true, dataTypes: ["length"] },
    keys: {},
  },
};
