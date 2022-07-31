export default {
  scrollBehavior: {
    prefix: "scroll",
    property: "scroll-behavior",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { auto: "auto", smooth: "smooth" },
  },
  scrollMargin: {
    prefix: "scroll-m",
    property: "scroll-margin",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 4,
    },
    keys: {},
  },
  scrollMarginX: {
    prefix: "scroll-mx",
    properties: ["scroll-margin-left", "scroll-margin-right"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 2,
    },
    keys: {},
  },
  scrollMarginY: {
    prefix: "scroll-my",
    properties: ["scroll-margin-top", "scroll-margin-bottom"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 2,
    },
    keys: {},
  },
  scrollMarginTop: {
    prefix: "scroll-mt",
    property: "scroll-margin-top",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginLeft: {
    prefix: "scroll-ml",
    property: "scroll-margin-left",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginRight: {
    prefix: "scroll-mr",
    property: "scroll-margin-right",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginBottom: {
    prefix: "scroll-mb",
    property: "scroll-margin-bottom",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginBlock: {
    prefix: "scroll-m-bl",
    property: "scroll-margin-inline",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 2,
    },
    keys: {},
  },
  scrollMarginBlockStart: {
    prefix: "scroll-m-bls",
    property: "scroll-margin-inline-start",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginBlockEnd: {
    prefix: "scroll-m-ble",
    property: "scroll-margin-inline-end",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginInline: {
    prefix: "scroll-m-in",
    property: "scroll-margin-inline",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 2,
    },
    keys: {},
  },
  scrollMarginInlineStart: {
    prefix: "scroll-m-ins",
    property: "scroll-margin-inline-start",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollMarginInlineEnd: {
    prefix: "scroll-m-ine",
    property: "scroll-margin-inline-end",
    dynamic: { enabled: true, dataTypes: ["length", "percentage"] },
    keys: {},
  },
  scrollPadding: {
    prefix: "scroll-p",
    property: "scroll-padding",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: { auto: "auto" },
  },
  scrollPaddingX: {
    prefix: "scroll-px",
    properties: ["scroll-padding-left", "scroll-padding-right"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto" },
  },
  scrollPaddingY: {
    prefix: "scroll-py",
    properties: ["scroll-padding-top", "scroll-padding-bottom"],
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto" },
  },
  scrollPaddingTop: {
    prefix: "scroll-pt",
    property: "scroll-padding-top",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingLeft: {
    prefix: "scroll-pl",
    property: "scroll-padding-left",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingRight: {
    prefix: "scroll-pr",
    property: "scroll-padding-right",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingBottom: {
    prefix: "scroll-pb",
    property: "scroll-padding-bottom",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingBlock: {
    prefix: "scroll-p-bl",
    property: "scroll-padding-block",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto" },
  },
  scrollPaddingBlockStart: {
    prefix: "scroll-p-bls",
    property: "scroll-padding-block-start",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingBlockEnd: {
    prefix: "scroll-p-ble",
    property: "scroll-padding-block-end",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingInline: {
    prefix: "scroll-p-in",
    property: "scroll-padding-inline",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto" },
  },
  scrollPaddingInlineStart: {
    prefix: "scroll-p-ins",
    property: "scroll-padding-inline-start",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollPaddingInlineEnd: {
    prefix: "scroll-p-ine",
    property: "scroll-padding-inline-end",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: { auto: "auto" },
  },
  scrollSnapType: {
    prefix: "snap",
    property: "scroll-snap-type",
    dynamic: { enabled: true, dataTypes: ["keyword"], combinations: 2 },
    keys: {
      none: "none",
      x: "x",
      y: "y",
      block: "block",
      inline: "inline",
      both: "both",
      mandatory: "mandatory",
      proximity: "proximity",
    },
  },
  scrollSnapAlign: {
    prefix: "snap",
    property: "scroll-snap-align",
    dynamic: { enabled: true, dataTypes: ["keyword"], combinations: 2 },
    keys: {
      "align-none": "none",
      start: "start",
      end: "end",
      center: "center",
    },
  },
  scrollSnapStops: {
    prefix: "snap",
    property: "scroll-snap-stops",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { normal: "normal", always: "always" },
  },
};
