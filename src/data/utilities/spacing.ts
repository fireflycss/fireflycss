export default {
  padding: {
    prefix: "p",
    property: "padding",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 4,
    },
    keys: {},
  },
  paddingX: {
    prefix: "px",
    properties: ["padding-left", "padding-right"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
    },
    keys: {},
  },
  paddingY: {
    prefix: "py",
    properties: ["padding-top", "padding-bottom"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 2,
    },
    keys: {},
  },
  paddingBottom: {
    prefix: "pb",
    property: "padding-bottom",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
    },
    keys: {},
  },
  paddingLeft: {
    prefix: "pl",
    property: "padding-left",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
    },
    keys: {},
  },
  paddingRight: {
    prefix: "pr",
    property: "padding-right",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
    },
    keys: {},
  },
  paddingTop: {
    prefix: "pt",
    property: "padding-top",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
    },
    keys: {},
  },
  margin: {
    prefix: "m",
    property: "margin",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 4,
    },
    keys: { auto: "auto" },
  },
  marginX: {
    prefix: "mx",
    properties: ["margin-left", "margin-right"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginY: {
    prefix: "my",
    properties: ["margin-top", "margin-bottom"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginBottom: {
    prefix: "mb",
    property: "margin-bottom",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginLeft: {
    prefix: "ml",
    property: "margin-left",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginRight: {
    prefix: "mr",
    property: "margin-right",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginTop: {
    prefix: "mt",
    property: "margin-top",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginBlock: {
    prefix: "m-bl",
    property: "margin-block",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto" },
  },
  marginBlockStart: {
    prefix: "m-bls",
    property: "margin-block-start",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginBlockEnd: {
    prefix: "m-ble",
    property: "margin-block-end",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginInline: {
    prefix: "m-in",
    property: "margin-inline",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto" },
  },
  marginInlineStart: {
    prefix: "m-ins",
    property: "margin-inline-start",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  marginInlineEnd: {
    prefix: "m-ine",
    property: "margin-inline-end",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  spaceX: {
    prefix: "space-x",
    properties: ["margin-left", "margin-right"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 1: "0px" },
    },
    keys: { auto: "auto" },
  },
  spaceXReverse: {
    prefix: "space-x-reverse",
    properties: ["margin-left", "margin-right"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 0: "0px" },
    },
    keys: { auto: "auto" },
  },
  spaceY: {
    prefix: "space-y",
    properties: ["margin-top", "margin-bottom"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 1: "0px" },
    },
    keys: { auto: "auto" },
  },
  spaceYReverse: {
    prefix: "space-y-reverse",
    properties: ["margin-top", "margin-bottom"],
    variants: ["child::not([hidden])", "following::not([hidden])"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      permanentValues: { 0: "0px" },
    },
    keys: { auto: "auto" },
  },
};
