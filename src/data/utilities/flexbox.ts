export default {
  flexGrow: {
    prefix: "grow",
    property: "flex-grow",
    dynamic: {
      enabled: true,
      dataTypes: ["number"],
      allowNegatives: false,
    },
    keys: {},
  },
  flexShrink: {
    prefix: "shrink",
    property: "flex-shrink",
    dynamic: {
      enabled: true,
      dataTypes: ["number"],
      allowNegatives: false,
    },
    keys: {},
  },
  flexBasis: {
    prefix: "basis",
    property: "flex-basis",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      divisionPercentage: true,
    },
    keys: {
      auto: "auto",
      fill: "fill",
      fit: "fit-content",
      full: "100%",
    },
  },
  flex: {
    prefix: "flex",
    property: "flex",
    dynamic: {
      enabled: false,
      dataTypes: ["keyword"],
    },
    keys: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
  },
  flexShorthand: {
    prefix: "flex",
    property: "flex",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 3,
      shorthand: {
        grow: ["flexGrow"],
        //shrink: ["flexShrink"],
        basis: ["flexBasis"],
      },
    },
    keys: {},
  },
  flexDirection: {
    prefix: "flex",
    property: "flex-direction",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      row: "row",
      "row-reverse": "row-reverse",
      column: "column",
      "column-reverse": "column-reverse",
    },
  },
  flexWrap: {
    prefix: "flex",
    property: "flex-wrap",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      nowrap: "nowrap",
      wrap: "wrap",
      "wrap-reverse": "wrap-reverse",
    },
  },
  order: {
    prefix: "order",
    property: "order",
    dynamic: { enabled: true, dataTypes: ["integer"] },
    keys: {},
  },
};
