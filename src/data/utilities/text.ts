export default {
  textColor: {
    prefix: "text",
    property: "color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
    },
    keys: "colors",
  },
  textOpacity: {
    prefix: "text-o",
    property: "--ff-text-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  textAlign: {
    prefix: "text",
    property: "text-align",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      left: "left",
      right: "right",
      center: "center",
      justify: "justify",
      start: "start",
      end: "end",
      "match-parent": "match-parent",
    },
  },
  textAlignLast: {
    prefix: "last-line",
    property: "text-align-last",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      auto: "auto",
      start: "start",
      end: "end",
      left: "left",
      right: "right",
      center: "center",
      justify: "justify",
    },
  },
  verticalAlign: {
    prefix: "align",
    property: "vertical-align",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      baseline: "baseline",
      sub: "sub",
      super: "super",
      "text-top": "text-top",
      "text-bottom": "text-bottom",
      middle: "middle",
      top: "top",
      bottom: "bottom",
    },
  },
  textIndent: {
    prefix: "indent",
    property: "text-indent",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  textTransform: {
    prefix: "",
    property: "text-transform",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "normal-case": "none",
      capitalize: "capitalize",
      uppercase: "uppercase",
      lowercase: "lowercase",
    },
  },
  textOverflow: {
    prefix: "text",
    property: "text-overflow",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      clip: "clip",
      ellipsis: "ellipsis",
    },
  },
  truncate: {
    prefix: "truncate",
    properties: ["overflow", "text-overflow", "no-wrap"],
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "": ["hidden", "ellipsis", "nowrap"],
    },
  },
  letterSpacing: {
    prefix: "tracking",
    property: "letter-spacing",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      tighter: "-0.05em",
      tight: "-0.25em",
      normal: "normal",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },
  lineHeight: {
    prefix: "leading",
    property: "line-height",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      normal: "normal",
    },
  },
  whiteSpace: {
    prefix: "whitespace",
    property: "white-space",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      normal: "normal",
      nowrap: "nowrap",
      pre: "pre",
      "pre-wrap": "pre-wrap",
      "pre-line": "pre-line",
      "break-spaces": "break-spaces",
    },
  },
  wordBreak: {
    prefix: "break",
    property: "word-break",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      normal: "normal",
      all: "break-all",
      keep: "keep-all",
      words: "break-word",
    },
  },
  wordSpacing: {
    prefix: "spacing",
    property: "word-spacing",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      tighter: "-0.05em",
      tight: "-0.25em",
      normal: "normal",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
    },
  },
  writingMode: {
    prefix: "write",
    property: "writing-mode",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      tb: "horizontal-tb",
      rl: "vertical-rl",
      lr: "vertical-lr",
    },
  },
  textOrientation: {
    prefix: "text",
    property: "text-orientation",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      mixed: "mixed",
      upright: "upright",
    },
  },
  textDirection: {
    prefix: "direction",
    property: "direction",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      ltr: "ltr",
      rtl: "rtl",
    },
  },
  textShadow: {
    prefix: "text-shadow",
    property: "text-shadow",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      colorVariable: "--ff-text-shadow-color",
      preserveColorOpacity: true,
    },
    keys: {
      custom:
        "var(--ff-text-shadow-offset-x, 0) var(--ff-text-shadow-offset-y, 1px) var(--ff-text-shadow-blur, 3px)  var(--ff-text-shadow-color, rgba(0, 0, 0, 0.1))",
      //todo add text shadows
    },
  },
  textShadowColor: {
    prefix: "text-shadow",
    property: "--ff-text-shadow-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: true, //! true only if preserveColorOpacity is set to true in the boxShadow utility
    },
    keys: "colors",
  },
  textShadowColorCustom: {
    //*utility intended for use when boxShadowColor has rgbaValuesOnly set to true.
    //*if it is set to false, it produces the same as this utility
    prefix: "text-shadow-color",
    property: "--ff-text-shadow-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: false,
    },
    keys: "colors",
  },
  textShadowOpacity: {
    prefix: "text-shadow-o",
    property: "--ff-text-shadow-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  textShadowOffsetX: {
    prefix: "text-shadow-offset-x",
    property: "--ff-text-shadow-offset-x",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  textShadowOffsetY: {
    prefix: "text-shadow-offset-y",
    property: "--ff-text-shadow-offset-y",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  textShadowBlur: {
    prefix: "text-shadow-blur",
    property: "--ff-text-shadow-blur",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  textShadowShorthand: {
    prefix: "text-shadow",
    property: "text-shadow",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 4,
      shorthand: {
        "text-shadow-offset-x": ["textShadowOffsetX"],
        //"text-shadow-offset-y": ["textShadowOffsetY"], //*Only one is required here
        //"text-shadow-blur": ["textShadowBlur"], //* they are all same data type
        //* speeds up shorthand
        "text-shadow-color": ["boxShadowColorCustom"],
        "text-shadow": ["textShadow"],
      },
    },
  },
  textRendering: {
    prefix: "render",
    property: "text-rendering",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      auto: "auto",
      speed: "optimizeSpeed",
      legibility: "optimizeLegibility",
      precision: "geometricPrecision",
    },
  },
  tabSize: {
    prefix: "tab",
    properties: "tab-size",
    dynamic: { dataTypes: ["integer", "length"], allowNegative: false },
    keys: {},
  },
  hyphens: {
    prefix: "hyphens",
    property: "hyphens",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { none: "none", manual: "manual", auto: "auto" },
  },
  content: {
    //* must be used with before and after variants
    prefix: "content",
    property: "content",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: ["url", "counter", "counters", "attr"],
    },
    keys: [
      "content",
      {
        normal: "normal",
        none: "none",
        blank: '""',
        "open-quote": "open-quote",
        "close-quote": "close-quote",
        "no-open-quote": "no-open-quote",
        "no-close-quote": "no-close-quote",
        link: "attr(href)",
      },
    ],
  },
  contentQuotes: {
    prefix: "quotes",
    property: "quotes",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      none: "none",
      auto: "auto",
      french: '"«" "»" "‹" "›"',
    },
  },
  paintOrder: {
    prefix: "paint",
    property: "paint-order",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      normal: "normal", // normal: fill, stroke, markers
      s: "stroke",
      f: "fill",
      m: "markers",
      // 2 defined, 3rd is the missing one
      sf: "stroke fill",
      sm: "stroke markers",
      fs: "fill stroke",
      fm: "fill markers",
      ms: "markers stroke",
      mf: "markers fill",
      // all 3 defined
      sfm: "stroke fill markers",
      smf: "stroke markers fill",
      fsm: "fill stroke markers",
      fms: "fill markers stroke",
      msf: "markers stroke fill",
      mfs: "markers fill stroke",
    },
  },
};
