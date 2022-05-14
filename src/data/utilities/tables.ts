export default {
  tableLayout: {
    prefix: "table",
    property: "table-layout",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { auto: "auto", fixed: "fixed" },
  },
  borderCollapse: {
    prefix: "border",
    property: "border-collapse",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { collapse: "collapse", separate: "separate" },
  },
  borderSpacing: {
    prefix: "border-spacing",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage"],
      combinations: 2,
    },
    property: "border-spacing",
    keys: {},
  },
  captionSide: {
    prefix: "caption",
    property: "caption-side",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      top: "top",
      bottom: "bottom",
    },
  },
  emptyCells: {
    prefix: "empty-cells",
    property: "empty-cells",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { show: "show", hide: "hide" },
  },
};
