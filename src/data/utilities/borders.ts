//export default get_border_prefixes_data();
export default {
  borderRadius: {
    prefix: "rounded",
    property: "border-radius",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
      multipleSeparator: " / ",
    },
    keys: "borderRadii",
  },
  borderTopRadius: {
    prefix: "rounded-t",
    properties: ["border-top-left-radius", "border-top-right-radius"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: "borderRadii",
  },
  borderLeftRadius: {
    prefix: "rounded-l",
    properties: ["border-top-left-radius", "border-bottom-left-radius"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: "borderRadii",
  },
  borderRightRadius: {
    prefix: "rounded-r",
    properties: ["border-top-right-radius", "border-bottom-right-radius"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: "borderRadii",
  },
  borderBottomRadius: {
    prefix: "rounded-b",
    properties: ["border-bottom-left-radius", "border-bottom-right-radius"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: "borderRadii",
  },
  borderTopLeftRadius: {
    prefix: "rounded-tl",
    property: "border-top-left-radius",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: "borderRadii",
  },
  borderBottomLeftRadius: {
    prefix: "rounded-bl",
    property: "border-bottom-left-radius",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: "borderRadii",
  },
  borderBottomRightRadius: {
    prefix: "rounded-br",
    property: "border-bottom-right-radius",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: "borderRadii",
  },
  borderTopRightRadius: {
    prefix: "rounded-tr",
    property: "border-top-right-radius",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: "borderRadii",
  },
  borderWidth: {
    prefix: "border",
    property: "border-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: "borderWidths",
  },
  borderStyle: {
    prefix: "border",
    property: "border-style",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      combinations: 4,
    },
    keys: "borderStyles",
  },
  borderColor: {
    prefix: "border",
    property: "border-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      combinations: 4,
    },
    keys: "colors",
  },
  borderOpacity: {
    prefix: "border-o",
    property: "--ff-border-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  border: {
    prefix: "border",
    property: "border",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        border: ["borderWidth", "borderColor", "borderStyle"],
      },
    },
    keys: {},
  },
  borderXWidth: {
    prefix: "border-x",
    properties: ["border-left-width", "border-right-width"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: "borderWidths",
  },
  borderXStyle: {
    prefix: "border-x",
    properties: ["border-left-style", "border-right-style"],
    dynamic: { enabled: true, dataTypes: ["keyword"], combinations: 2 },
    keys: "borderStyles",
  },
  borderXColor: {
    prefix: "border-x",
    properties: ["border-left-color", "border-right-color"],
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      combinations: 2,
    },
    keys: "colors",
  },
  borderXOpacity: {
    prefix: "border-x-o",
    property: "--ff-border-x-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  borderX: {
    prefix: "border-x",
    properties: ["border-left", "border-right"],
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      duplicateValues: true,
      shorthand: {
        border: ["borderWidth", "borderColor", "borderStyle"],
      },
    },
    keys: {},
  },
  borderYWidth: {
    prefix: "border-y",
    properties: ["border-top-width", "border-bottom-width"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: "borderWidths",
  },
  borderYStyle: {
    prefix: "border-y",
    properties: ["border-top-style", "border-bottom-style"],
    dynamic: { enabled: true, dataTypes: ["keyword"], combinations: 2 },
    keys: "borderStyles",
  },
  borderYColor: {
    prefix: "border-y",
    properties: ["border-top-color", "border-bottom-color"],
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      combinations: 2,
    },
    keys: "colors",
  },
  borderYOpacity: {
    prefix: "border-y-o",
    property: "--ff-border-y-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderY: {
    prefix: "border-y",
    properties: ["border-top", "border-bottom"],
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      duplicateValues: true,
      shorthand: {
        border: ["borderWidth", "borderColor", "borderStyle"],
      },
    },
    keys: {},
  },
  borderTopWidth: {
    prefix: "border-t",
    property: "border-top-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 1,
    },
    keys: "borderWidths",
  },
  borderTopStyle: {
    prefix: "border-t",
    property: "border-top-style",
    dynamic: { enabled: true, dataTypes: ["keyword"], combinations: 2 },
    keys: "borderStyles",
  },
  borderTopColor: {
    prefix: "border-t",
    property: "border-top-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderTopOpacity: {
    prefix: "border-t-o",
    property: "--ff-border-top-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderTop: {
    prefix: "border-t",
    property: "border-top",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-t": ["borderTopWidth", "borderTopStyle", "borderTopColor"],
      },
    },
    keys: {},
  },
  borderLeftWidth: {
    prefix: "border-l",
    property: "border-left-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderLeftStyle: {
    prefix: "border-l",
    property: "border-left-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderLeftColor: {
    prefix: "border-l",
    property: "border-left-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderLeftOpacity: {
    prefix: "border-l-o",
    property: "--ff-border-l-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderLeft: {
    prefix: "border-l",
    property: "border-left",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-l": ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
      },
    },
    keys: {},
  },
  borderRightWidth: {
    prefix: "border-r",
    property: "border-right-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderRightStyle: {
    prefix: "border-r",
    property: "border-right-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderRightColor: {
    prefix: "border-r",
    property: "border-right-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderRightOpacity: {
    prefix: "border-r-o",
    property: "--ff-border-r-opacity",
    dynamic: {
      enabled: true,
      dataTypes: ["opacity", "keyword"],
    },
    keys: "colors",
  },
  borderRight: {
    prefix: "border-r",
    property: "border-right",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-r": [
          "borderRightWidth",
          "borderRightStyle",
          "borderRightColor",
        ],
      },
    },
    keys: {},
  },
  borderBottomWidth: {
    prefix: "border-b",
    property: "border-bottom-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderBottomStyle: {
    prefix: "border-b",
    property: "border-bottom-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderBottomColor: {
    prefix: "border-b",
    property: "border-b-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderBottomOpacity: {
    prefix: "border-b-o",
    property: "--ff-border-bottom-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderBottom: {
    prefix: "border-b",
    property: "border-bottom",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-b": [
          "borderBottomWidth",
          "borderBottomStyle",
          "borderBottomColor",
        ],
      },
    },
    keys: {},
  },
  borderBlockWidth: {
    prefix: "border-bl",
    property: "border-block-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderBlockStyle: {
    prefix: "border-bl",
    property: "border-block-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderBlockColor: {
    prefix: "border-bl",
    property: "border-block-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderBlockOpacity: {
    prefix: "border-bl-o",
    property: "--ff-border-bl-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderBlock: {
    prefix: "border-bl",
    property: "border-block",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-bl": [
          "borderBlockWidth",
          "borderBlockStyle",
          "borderBlockColor",
        ],
      },
    },
    keys: {},
  },
  borderBlockStartWidth: {
    prefix: "border-bls",
    property: "border-block-start-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderBlockStartStyle: {
    prefix: "border-bls",
    property: "border-block-start-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderBlockStartColor: {
    prefix: "border-bls",
    property: "border-block-start-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderBlockStartOpacity: {
    prefix: "border-bls-o",
    property: "--ff-border-bls-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderBlockStart: {
    prefix: "border-bls",
    property: "border-block-start",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-bls": [
          "borderBlockStartWidth",
          "borderBlockStartStyle",
          "borderBlockStartColor",
        ],
      },
    },
    keys: {},
  },
  borderBlockEndWidth: {
    prefix: "border-ble",
    property: "border-block-end-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderBlockEndStyle: {
    prefix: "border-ble",
    property: "border-block-end-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderBlockEndColor: {
    prefix: "border-ble",
    property: "border-block-end-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderBlockEndOpacity: {
    prefix: "border-ble-o",
    property: "--ff-border-ble-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderBlockEnd: {
    prefix: "border-ble",
    property: "border-block-end",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-ble": [
          "borderBlockEndWidth",
          "borderBlockEndStyle",
          "borderBlockEndColor",
        ],
      },
    },
    keys: {},
  },
  borderInlineWidth: {
    prefix: "border-in",
    property: "border-inline-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderInlineStyle: {
    prefix: "border-in",
    property: "border-inline-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderInlineColor: {
    prefix: "border-in",
    property: "border-inline-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderInlineOpacity: {
    prefix: "border-in-o",
    property: "--ff-border-in-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderInline: {
    prefix: "border-in",
    property: "border-inline",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-in": [
          "borderInlineWidth",
          "borderInlineStyle",
          "borderInlineColor",
        ],
      },
    },
    keys: {},
  },
  borderInlineStartWidth: {
    prefix: "border-ins",
    property: "border-inline-start-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderInlineStartStyle: {
    prefix: "border-ins",
    property: "border-ins-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderInlineStartColor: {
    prefix: "border-ins",
    property: "border-inline-start-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderInlineStartOpacity: {
    prefix: "border-ins-o",
    property: "--ff-border-ins-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderInlineStart: {
    prefix: "border-ins",
    property: "border-inline-start",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-ins": [
          "borderInlineStartWidth",
          "borderInlineStartStyle",
          "borderInlineStartColor",
        ],
      },
    },
    keys: {},
  },
  borderInlineEndWidth: {
    prefix: "border-ine",
    property: "border-inline-end-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  borderInlineEndStyle: {
    prefix: "border-in-e",
    property: "border-inline-end-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  borderInlineEndColor: {
    prefix: "border-ine",
    property: "border-inline-end-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  borderInlineEndOpacity: {
    prefix: "border-ine-o",
    property: "--ff-border-ine-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: "colors",
  },
  borderInlineEnd: {
    prefix: "border-ine",
    property: "border-inline-end",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        "border-ine": [
          "borderInlineEndWidth",
          "borderInlineEndStyle",
          "borderInlineEndColor",
        ],
      },
    },
    keys: {},
  },
  borderImageSource: {
    prefix: "border-image",
    property: "border-image-source",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: [
        "url",
        "linear-gradient",
        "repeating-linear-gradient",
        "radial-gradient",
        "repeating-radial-gradient",
        "conic-gradient",
      ],
    },
    keys: ["images", "functionImages", { none: "none" }],
  },
  borderImageSlice: {
    prefix: "border-image-slice",
    property: "border-image-slice",
    dynamic: {
      enabled: true,
      dataTypes: ["number", "percentage", "keyword"],
      combinations: 5,
    },
    keys: { fill: "fill" },
  },

  borderImageWidth: {
    prefix: "border-image",
    property: "border-image-width",
    dynamic: {
      enabled: true,
      allowNegatives: false,
      dataTypes: ["length", "percentage", "number", "keyword"],
      combinations: 4,
    },
    keys: { auto: "auto" },
  },
  borderImageOutset: {
    prefix: "border-image-outset",
    property: "border-image-outset",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "number"], //?may want to reverse this to allow numbers to be generated by default
      combinations: 4,
    },
    keys: {},
  },
  borderImageRepeat: {
    prefix: "border-image",
    property: "border-image-repeat",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      combinations: 2,
    },
    keys: {
      stretch: "stretch",
      repeat: "repeat",
      round: "round",
      space: "space",
    },
  },
  borderImage: {
    prefix: "border-image",
    property: "border-image",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 16,
      slashSyntax: true,
      shorthand: {
        "border-image-slice": ["borderImageSlice"], //* order matters, border image slice can only be number or percentage. if after border image width, it will be generated as a length value
        "border-image": [
          "borderImageSource",
          "borderImageWidth",
          "borderImageRepeat",
        ],
        "border-image-outset": ["borderImageOutset"],
      },
    },
    keys: {},
  },
};
