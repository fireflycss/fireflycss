export default {
  filter: {
    prefix: "filter",
    property: "filter",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: [
        "blur",
        "brightness",
        "contrast",
        "drop-shadow",
        "grayscale",
        "hue-rotate",
        "invert",
        "opacity",
        "saturate",
        "sepia",
      ],
    },
    keys: {
      none: "none",
      "": "blur(var(--ff-blur, 0px)) brightness(var(--ff-brightness, 1)) contrast(var(--ff-contrast, 1)) drop-shadow(var(--ff-drop-shadow, 0 0 #0000)) grayscale(var(--ff-grayscale, 0)) hue-rotate(var(--ff-hue-rotate), 0deg) invert(var(--ff-invert,0)), saturate(var(--ff-saturate, 1)) sepia(var(--ff-sepia, 0))",
      //todo add filters
    },
  },
  blur: {
    prefix: "blur",
    property: "--ff-blur",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "keyword"],
    },
    keys: {
      none: "0",
      xs: "2px",
      sm: "4px",
      "": "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px",
    },
  },
  brightness: {
    prefix: "brightness",
    property: "--ff-brightness",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number"],
    },
    keys: {},
  },
  contrast: {
    prefix: "contrast",
    property: "--ff-contrast",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number"],
    },
    keys: {},
  },
  dropShadow: {
    prefix: "drop-shadow",
    property: "--ff-drop-shadow",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      colorVariable: "--ff-drop-shadow-color",
      preserveColorOpacity: true,
    },
    keys: {
      custom:
        "var(--ff-drop-shadow-offset-x, 0) var(--ff-drop-shadow-offset-y, 1px) var(--ff-drop-shadow-blur, 3px)  var(--ff-drop-shadow-color, rgba(0, 0, 0, 0.1))",
      //todo add
    },
  },
  dropShadowColor: {
    prefix: "drop-shadow",
    properties: ["--ff-drop-shadow-color"],
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: true, //! true only if preserveColorOpacity is set to true in the boxShadow utility
    },
    keys: "colors",
  },
  dropShadowColorCustom: {
    //*utility intended for use when boxShadowColor has rgbaValuesOnly set to true.
    //*if it is set to false, it produces the same as this utility
    prefix: "drop-shadow-color",
    property: "--ff-drop-shadow-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: false,
    },
    keys: "colors",
  },
  dropShadowOpacity: {
    prefix: "drop-shadow-o",
    property: "--ff-drop-shadow-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  dropShadowOffsetX: {
    prefix: "drop-shadow-offset-x",
    property: "--ff-drop-shadow-offset-x",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  dropShadowOffsetY: {
    prefix: "drop-shadow-offset-y",
    property: "--ff-drop-shadow-offset-y",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  dropShadowBlur: {
    prefix: "drop-shadow-blur",
    property: "--ff-drop-shadow-blur",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  dropShadowShorthand: {
    prefix: "drop-shadow",
    property: "--ff-drop-shadow",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 4,
      shorthand: {
        "drop-shadow-offset-x": ["dropShadowOffsetX"],
        //"drop-shadow-offset-y": ["dropShadowOffsetY"], //*Only one is required here
        //"drop-shadow-blur": ["dropShadowBlur"], //* they are all same data type
        //* speeds up shorthand
        "drop-shadow-color": ["dropShadowColorCustom"],
        "drop-shadow": ["dropShadow"],
      },
    },
  },
  grayscale: {
    prefix: "grayscale",
    property: "--ff-grayscale",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number", "keyword"],
    },
    keys: {
      "": "100%",
    },
  },
  hueRotate: {
    prefix: "hue-rotate",
    property: "--ff-hue-rotate",
    dynamic: {
      enabled: true,
      dataTypes: ["angle"],
    },
    keys: {},
  },
  invert: {
    prefix: "invert",
    property: "--ff-invert",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number", "keyword"],
    },
    keys: {
      "": "100%",
    },
  },
  saturate: {
    prefix: "saturate",
    property: "--ff-saturate",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number"],
    },
    keys: {},
  },
  sepia: {
    prefix: "sepia",
    property: "--ff-sepia",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number", "keyword"],
    },
    keys: {
      "": "100%",
    },
  },
  backdropFilter: {
    prefix: "backdrop-filter",
    property: "backdrop-filter",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: [
        "blur",
        "brightness",
        "contrast",
        "drop-shadow",
        "grayscale",
        "hue-rotate",
        "invert",
        "opacity",
        "saturate",
        "sepia",
      ],
    },
    keys: {
      none: "none",
      "": "blur(var(--ff-backdrop-blur, 0px)) brightness(var(--ff-backdrop-brightness, 1)) contrast(var(--ff-backdrop-contrast, 1)) drop-shadow(var(--ff-backdrop-shadow, 0 0 #0000)) grayscale(var(--ff-backdrop-grayscale, 0)) hue-rotate(var(--ff-backdrop-hue-rotate, 0deg)) invert(var(--ff-backdrop-invert, 0)) opacity(var(--ff-backdrop-opacity, 1)) saturate(var(--ff-backdrop-saturate, 1)) sepia(var(--ff-backdrop-sepia, 0))",
      //todo add filters
    },
  },
  backdropBlur: {
    prefix: "backdrop-blur",
    property: "--ff-backdrop-blur",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "keyword"],
    },
    keys: {
      none: "0",
      xs: "2px",
      sm: "4px",
      "": "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px",
    },
  },
  backdropBrightness: {
    prefix: "backdrop-brightness",
    property: "--ff-backdrop-brightness",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number"],
    },
    keys: {},
  },
  backdropContrast: {
    prefix: "backdrop-contrast",
    property: "--ff-backdrop-contrast",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number"],
    },
    keys: {},
  },

  backdropDropShadow: {
    prefix: "backdrop-shadow",
    property: "--ff-backdrop-shadow",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      colorVariable: "--ff-backdrop-shadow-color",
      preserveColorOpacity: true,
    },
    keys: {
      custom:
        "var(--ff-backdrop-shadow-offset-x, 0) var(--ff-backdrop-shadow-offset-y, 1px) var(--ff-backdrop-shadow-blur, 3px)  var(--ff-backdrop-shadow-color, rgba(0, 0, 0, 0.1))",
      //todo add
    },
  },
  backdropDropShadowColor: {
    prefix: "backdrop-shadow",
    properties: ["--ff-backdrop-shadow-color"],
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: true, //! true only if preserveColorOpacity is set to true in the boxShadow utility
    },
    keys: "colors",
  },
  backdropDropShadowColorCustom: {
    //*utility intended for use when boxShadowColor has rgbaValuesOnly set to true.
    //*if it is set to false, it produces the same as this utility
    prefix: "backdrop-shadow-color",
    property: "--ff-backdrop-shadow-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: false,
    },
    keys: "colors",
  },
  backdropDropShadowOpacity: {
    prefix: "backdrop-shadow-o",
    property: "--ff-backdrop-shadow-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  backdropDropShadowOffsetX: {
    prefix: "backdrop-shadow-offset-x",
    property: "--ff-backdrop-shadow-offset-x",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  backdropDropShadowOffsetY: {
    prefix: "backdrop-shadow-offset-y",
    property: "--ff-backdrop-shadow-offset-y",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  backdropDropShadowBlur: {
    prefix: "backdrop-shadow-blur",
    property: "--ff-backdrop-shadow-blur",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  backdropDropShadowShorthand: {
    prefix: "backdrop-shadow",
    property: "--ff-backdrop-shadow",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 4,
      shorthand: {
        "backdrop-shadow-offset-x": ["backdropDropShadowOffsetX"],
        //"drop-shadow-offset-y": ["backdropDropShadowOffsetY"], //*Only one is required here
        //"drop-shadow-blur": ["backdropDropShadowBlur"], //* they are all same data type
        //* speeds up shorthand
        "backdrop-shadow-color": ["backdropDropShadowColorCustom"],
        "backdrop-shadow": ["backdropDropShadow"],
      },
    },
  },
  backdropGrayscale: {
    prefix: "backdrop-grayscale",
    property: "--ff-backdrop-grayscale",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number", "keyword"],
    },
    keys: {
      "": "100%",
    },
  },
  backdropHueRotate: {
    prefix: "backdrop-hue-rotate",
    property: "--ff-backdrop-hue-rotate",
    dynamic: {
      enabled: true,
      dataTypes: ["angle"],
    },
    keys: {},
  },
  backdropInvert: {
    prefix: "backdrop-invert",
    property: "--ff-backdrop-invert",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number", "keyword"],
    },
    keys: {
      "": "100%",
    },
  },
  backdropOpacity: {
    prefix: "backdrop-opacity",
    property: "--ff-backdrop-opacity",
    dynamic: {
      enabled: true,
      dataTypes: ["alpha"],
    },
    keys: {},
  },
  backdropSaturate: {
    prefix: "backdrop-saturate",
    property: "--ff-backdrop-saturate",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number"],
    },
    keys: {},
  },
  backdropSepia: {
    prefix: "backdrop-sepia",
    property: "--ff-backdrop-sepia",
    dynamic: {
      enabled: true,
      dataTypes: ["percentage", "number", "keyword"],
    },
    keys: {
      "": "100%",
    },
  },
};
