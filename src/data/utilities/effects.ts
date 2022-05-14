export default {
  boxShadow: {
    prefix: "shadow",
    properties: ["--ff-shadow", "box-shadow"],
    dynamic: {
      enabled: false,
      dataTypes: ["keyword"],
      duplicateValues: true,
      colorVariable: "--ff-shadow-color", //? maybe convert this to a simple boolean, variableKeyColors:true ,which will take the prefix of this utility and put it in and add color so for shadow it will be --ff-shadow-color
      preserveColorOpacity: true, //!corresponding color utility must have "rgbValuesOnly:true" if this is set to true
      permanentValues: {
        1: "var(--ff-ring-offset-shadow, 0 0 #0000), var(--ff-ring-shadow, 0 0 #0000), var(--ff-shadow, 0 0 #0000)",
      },
    },
    keys: {
      none: "0 0 #0000",
      custom:
        "var(--ff-shadow-offset-x, 0) var(--ff-shadow-offset-y, 1px) var(--ff-shadow-blur, 3px) var(--ff-shadow-spread, 0) var(--ff-shadow-color, rgba(0, 0, 0, 0.1))",
      "custom-inner":
        "inset var(--ff-shadow-offset-x, 0) var(--ff-shadow-offset-y, 1px) var(--ff-shadow-blur, 3px) var(--ff-shadow-spread, 0) var(--ff-shadow-color, rgba(0, 0, 0, 0.1))",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      //todo add more shadows and maybe rework how shadows are called
      //! if a lot more shadow presets are added, best to move it to keys
    },
  },
  boxShadowColor: {
    prefix: "shadow",
    property: "--ff-shadow-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: true, //! true only if preserveColorOpacity is set to true in the boxShadow utility
    },
    keys: "colors",
  },
  boxShadowColorCustom: {
    //*utility intended for use when boxShadowColor has rgbaValuesOnly set to true.
    //*if it is set to false, it produces the same as this utility
    prefix: "shadow-color",
    property: "--ff-shadow-color",
    dynamic: {
      enabled: true,
      dataTypes: ["color", "function", "keyword"],
      functions: ["rgb", "rgba", "hsl", "hsla"],
      rgbValuesOnly: false,
    },
    keys: "colors",
  },
  boxShadowOpacity: {
    prefix: "shadow-o",
    property: "--ff-shadow-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  boxShadowOffsetX: {
    prefix: "shadow-offset-x",
    property: "--ff-shadow-offset-x",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  boxShadowOffsetY: {
    prefix: "shadow-offset-y",
    property: "--ff-shadow-offset-y",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  boxShadowBlur: {
    prefix: "shadow-blur",
    property: "--ff-shadow-blur",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  boxShadowSpread: {
    prefix: "shadow-spread",
    property: "--ff-shadow-spread",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  boxShadowShorthand: {
    prefix: "shadow",
    properties: ["--ff-shadow", "box-shadow"],
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand", "keyword"],
      combinations: 6,
      duplicateValues: true,
      permanentValues: {
        1: "var(--ff-ring-offset-shadow, 0 0 #0000), var(--ff-ring-shadow, 0 0 #0000), var(--ff-shadow, 0 0 #0000)",
      },
      shorthand: {
        "shadow-offset-x": ["boxShadowOffsetX"],
        //"shadow-offset-y": ["boxShadowOffsetY"], //*Only one is required here
        //"shadow-blur": ["boxShadowBlur"], //* they are all same data type
        //"shadow-spread": ["boxShadowSpread"],//* speeds up shorthand
        "shadow-color": ["boxShadowColorCustom"],
        shadow: ["boxShadow"],
      },
    },
    keys: { inner: "inset" },
  },
  opacity: {
    prefix: "opacity",
    property: "opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  boxDecorationBreak: {
    prefix: "box-break",
    properties: ["-webkit-box-decoration-break", "box-decoration-break"],
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { slice: "slice", clone: "clone" },
  },
  mixBlendMode: {
    prefix: "mix",
    property: "mix-blend-mode",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      normal: "normal",
      multiply: "multiply",
      screen: "screen",
      overlay: "overlay",
      darken: "darken",
      lighten: "lighten",
      "color-dodge": "color-dodge",
      "color-burn": "color-burn",
      "hard-light": "hard-light",
      "soft-light": "soft-light",
      difference: "difference",
      exclusion: "exclusion",
      hue: "hue",
      saturation: "saturation",
      color: "color",
      luminosity: "luminosity",
    },
  },
  clipPath: {
    prefix: "clip",
    property: "clip-path",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: ["circle", "ellipse", "inset", "polygon", "path", "url"],
    },
    keys: {
      none: "none",
      //https://bennettfeely.com/clippy/
      triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
      "triangle-inverted": "polygon(0% 0%, 100% 0%, 50% 100%)",
      trapezoid: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
      "trapezoid-inverted": "polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)",
      parallelogram: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
      rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
      pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
      hexagon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      heptagon:
        "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
      octagon:
        "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
      nonagon:
        "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",
      decagon:
        "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
      bevel:
        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
      rabbet:
        "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
      "left-arrow":
        "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
      "right-arrow":
        "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
      "left-arrowhead": "polygon(100% 0%, 75% 50%, 100% 100%, 0% 50%)",
      "right-arrowhead": "polygon(0% 0%, 100% 50%, 0% 100%, 25% 50%)",
      "left-point": "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
      "right-point": "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
      "left-chevron":
        "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
      "right-chevron":
        "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
      star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
      plus: "polygon(35% 0%,65% 0%,65% 35%,100% 35%,100% 60%,65% 60%,65% 100%,35% 100%,35% 60%,0% 60%,0% 35%,35% 35%)",
      minus: "polygon(100% 35%,100% 60%,0% 60%,0% 35%)",
      cross:
        "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
      message:
        "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
      close:
        "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
      frame:
        "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
      lightning:
        "polygon(25% 0%,70% 0%,40% 35%,95% 35%,20% 100%,40% 55%,0% 55%)",
      blinds:
        "polygon(0% 5%,100% 5%,100% 25%,0% 25%,0% 40%,100% 40%,100% 60%,0% 60%,0% 75%,100% 75%,100% 95%,0% 95%)",
      house:
        "polygon(50% 0%,70% 15%,70% 2%,90% 2%,90% 30%,100% 40%,100% 100%,65% 100%,65% 65%,35% 65%,35% 100%,0% 100%,0% 40%)",
      diamond: "polygon(25% 0%, 75% 0%, 100% 25%, 50% 100%, 0% 25%)",
      inset: "inset(5% 20% 15% 10%)",
      circle: "circle(50% at 50% 50%)",
      ellipse: "ellipse(25% 40% at 50% 50%)",
    },
  },
  imageRendering: {
    prefix: "image-render",
    property: "image-rendering",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      auto: "auto",
      crisp: "crisp-edges",
      pixel: "pixelated",
    },
  },
  perspective: {
    prefix: "perspective",
    property: "perspective",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { none: "none" },
  },
  perspectiveOrigin: {
    prefix: "perspective-origin",
    property: "perspective-origin",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: {
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      center: "center",
      "top-left": "top left",
      "top-right": "top right",
      "bottom-left": "bottom left",
      "bottom-right": "bottom right",
    },
  },
  backfaceVisibility: {
    prefix: "backface",
    property: "backface-visibility",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { visible: "visible", hidden: "hidden" },
  },
};
