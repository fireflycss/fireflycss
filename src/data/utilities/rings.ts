export default {
  ringWidth: {
    prefix: "ring",
    properties: ["--ff-ring-shadow", "box-shadow"],
    dynamic: {
      enabled: true,
      dataTypes: ["number", "length", "percentage"],
      defaultUnit: "px",
      template: [
        "var(--ff-ring-inset,) 0 0 0 calc($value + var(--ff-ring-offset-width, 0px)) var(--ff-ring-color)",
      ],
      permanentValues: {
        1: "var(--ff-ring-offset-shadow, 0 0 #0000), var(--ff-ring-shadow, 0 0 #0000), var(--ff-shadow, 0 0 #0000)",
      },
    },
    keys: {},
  },
  ringInset: {
    prefix: "ring",
    property: "--ff-ring-inset",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { inset: "inset" },
  },
  ringColor: {
    prefix: "ring",
    property: "--ff-ring-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  ringOpacity: {
    prefix: "ring-opacity",
    property: "--ff-ring-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  ringOffsetWidth: {
    prefix: "ring-offset",
    properties: ["--ff-ring-offset-width", "--ff-ring-offset-shadow"],
    dynamic: {
      enabled: true,
      dataTypes: ["number", "length", "percentage"],
      defaultUnit: "px",
      template: ["", "0 0 0 $value var(--ff-ring-offset-color, #fff)"],
    },
    keys: {},
  },
  ringOffsetColor: {
    prefix: "ring-offset",
    property: "--ff-ring-offset-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  ringOffsetColorOpacity: {
    prefix: "ring-offset-o",
    property: "--ff-ring-offset-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
};
