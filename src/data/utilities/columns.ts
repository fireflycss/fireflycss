// Column Utilities
module.exports = {
  columnCount: {
    prefix: "columns",
    property: "column-count",
    dynamic: { enabled: true, dataTypes: ["integer", "keyword"] },
    keys: {
      auto: "auto",
    },
  },
  columnWidth: {
    prefix: "column",
    property: "column-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      auto: "auto",
    },
  },
  columns: {
    prefix: "columns",
    property: "columns",
    dynamic: {
      enabled: true,
      dataTypes: [],
      combinations: 2,
      shorthand: { columns: ["columnCount"], column: ["columnWidth"] },
    },
    keys: {},
  },

  columnFill: {
    prefix: "column",
    property: "column-fill",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      auto: "auto",
      balance: "balance",
    },
  },
  columnRuleWidth: {
    prefix: "column-rule",
    property: "column-rule-width",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: "borderWidths",
  },
  columnRuleStyle: {
    prefix: "column-rule",
    property: "column-rule-style",
    dynamic: { enabled: false },
    keys: "borderStyles",
  },
  columnRuleColor: {
    prefix: "column-rule",
    property: "column-rule-color",
    dynamic: { enabled: true, dataTypes: ["color", "keyword"] },
    keys: "color",
  },
  columnRuleOpacity: {
    prefix: "column-rule-o",
    property: "--ff-column-rule-opacity",
    dynamic: { enabled: true, dataTypes: ["alpha"] },
    keys: {},
  },
  columnSpan: {
    prefix: "span",
    properties: "column-span",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { none: "none", all: "all" },
  },
};
