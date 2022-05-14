export default {
  divideWidthX: {
    prefix: "divide-x",
    properties: ["border-left-width", "border-right-width"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 0: "0px" },
    },
    keys: "borderWidths",
  },
  reverseDivideWidthX: {
    prefix: "reverse-divide-x",
    properties: ["border-left-width", "border-right-width"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 1: "0px" },
    },
    keys: "borderWidths",
  },
  divideWidthY: {
    prefix: "divide-y",
    properties: ["border-top-width", "border-bottom-width"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 1: "0px" },
    },
    keys: "borderWidths",
  },
  reverseDivideWidthY: {
    prefix: "reverse-divide-y",
    properties: ["border-top-width", "border-bottom-width"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 0: "0px" },
    },
    keys: "borderWidths",
  },
  divideStyle: {
    prefix: "divide",
    property: "border-style",
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: "borderStyles",
  },
  divideColor: {
    prefix: "divide",
    property: "border-color",
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: { enabled: true, dataTypes: ["color", "keyword"] },
    keys: "colors",
  },
  divideOpacity: {
    prefix: "divide-o",
    property: "--ff-divide-opacity",
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
};
