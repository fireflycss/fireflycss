export default {
  fontFamily: {
    creator: "general",
    dynamic: { enabled: false },
    dynamicType: "",
    prefix: "font",
    property: "font-family",
    keys: {
      //todo add font families
      verdana: "verdana, tahoma, sans-serif",
    },
  },
  fontSize: {
    prefix: "text",
    property: "font-size",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      "xx-small": "xx-small",
      "x-small": "x-small",
      small: "small",
      medium: "medium",
      large: "large",
      "x-large": "x-large",
      "xx-large": "xx-large",
      "xxx-large": "xxx-large",
      smaller: "smaller",
      larger: "larger",
    },
  },
  fontFeatureSettings: {
    prefix: "font",
    property: "font-feature-settings",
    dynamic: { enabled: false },
    keys: {
      //todo add font feature settings
    },
  },
  fontStretch: {
    prefix: "stretch",
    property: "font-stretch",
    dynamic: { enabled: true, dynamicTypes: ["percentage", "keyword"] },
    keys: {
      "ultra-condensed": "ultra-condensed",
      "extra-condensed": "extra-condensed",
      condensed: "condensed",
      "semi-condensed": "semi-condensed",
      normal: "normal",
      "semi-expanded": "semi-expanded",
      expanded: "expanded",
      "extra-expanded": "extra-expanded",
      "ultra-expanded": "ultra-expanded",
    },
  },
  fontSmoothing: {
    //* currently only works on macos
    //! has horrible support only 40.89%, to support have to use webkit and moz prefixes on can i use com
    prefix: "",
    property: "font-smoothing",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { antialiased: "", "subpixel-antialiased": "" },
    //todo
  },
  fontStyle: {
    prefix: "",
    property: "font-style",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      normal: "normal",
      italic: "italic",
      oblique: "oblique",
    },
  },
  fontWeight: {
    //note to make this dynamic, has to be different prefix
    prefix: "font",
    property: "font-weight",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      thin: "100",
      "extra-light": "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
      "extra-black": "950",
      lighter: "lighter",
      bolder: "bolder",
    },
  },
  fontVariantCaps: {
    prefix: "",
    property: "font-variant-caps",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "normal-caps": "normal",
      "small-caps": "small-caps",
      "all-small-caps": "all-small-caps",
      "petite-caps": "petite-caps",
      "all-petite-caps": "all-petite-caps",
      unicase: "unicase",
      "titling-caps": "titling-caps",
    },
  },
  fontVariantNumeric: {
    prefix: "",
    property: "font-variant-numeric",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "normal-nums": "normal",
      ordinal: "ordinal",
      "slashed-zero": "slashed-zero",
      "lining-nums": "lining-nums",
      "oldstyle-nums": "oldstyle-nums",
      "proportional-nums": "proportional-nums",
      "tabular-nums": "tabular-nums",
      "diagonal-fractions": "diagonal-fractions",
      "stacked-fractions": "stacked-fractions",
      // ! Can be either normal or one or more of these separated by space
    },
  },
  fontVariantLigatures: {
    prefix: "ligatures",
    property: "font-variant-ligatures",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      normal: "normal",
      none: "none",
      common: "common-ligatures",
      "no-common": "no-common-ligatures",
      discretionary: "discretionary-ligatures",
      "no-discretionary": "no-discretionary-ligatures",
      historical: "historical-ligatures",
      "no-historical": "no-historical-ligatures",
      contextual: "contextual",
      "no-contextual": "no-contextual",
    },
  },
  fontKerning: {
    prefix: "kerning",
    property: "font-kerning",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      auto: "auto",
      normal: "normal",
      none: "none",
    },
  },
  fontOpticalSizing: {
    prefix: "optical",
    property: "font-optical-sizing",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "": "auto",
      none: "none",
    },
  },
};
