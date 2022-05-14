// Text Decoration Module
export default {
  textDecorationLine: {
    prefix: "",
    property: "text-decoration-line",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "no-decoration": "none",
      underline: "underline",
      overline: "overline",
      strike: "line-through",
      "under-overline": "underline overline",
      "under-strike": "underline line-through",
      "over-strike": "overline line-through",
    },
  },
  textDecorationStyle: {
    prefix: "decoration",
    property: "text-decoration-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      solid: "solid",
      double: "double",
      dotted: "dotted",
      dashed: "dashed",
      wavy: "wavy",
    },
  },
  textDecorationColor: {
    prefix: "decoration",
    property: "text-decoration-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  textDecorationOpacity: {
    prefix: "decoration-o",
    property: "--ff-decoration-opacity",
    dynamic: { dataTypes: ["alpha"] },
    keys: {},
  },
  textDecorationThickness: {
    prefix: "decoration",
    property: "text-decoration-thickness",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto", "from-font": "from-font" },
  },
  textDecorationShorthand: {
    prefix: "decoration",
    property: "text-decoration",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 6,
      shorthand: {
        decoration: [
          "textDecorationStyle",
          "textDecorationColor",
          "textDecorationThickness",
        ],
      },
    },
    keys: {
      "no-decoration": "none",
      underline: "underline",
      overline: "overline",
      strike: "line-through",
      "under-overline": "underline overline",
      "under-strike": "underline line-through",
      "over-strike": "overline line-through",
    },
  },
  textUnderlineOffset: {
    prefix: "underline-offset",
    property: "text-underline-offset",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  textUnderlinePosition: {
    prefix: "underline",
    property: "text-underline-position",
    dynamic: { enabled: true, dataTypes: ["keyword"], combinations: 2 },
    keys: {
      auto: "auto",
      under: "under",
      left: "left",
      right: "right",
      "under-left": "under left",
      "under-right": "under right",
    },
  },
};
