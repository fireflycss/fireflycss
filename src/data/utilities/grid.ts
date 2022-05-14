export default {
  //? There is currently no support for grid custom idents via [linename]. if there was all the other grid stuff would have to support it.
  gridTemplateColumns: {
    prefix: "grid-columns",
    property: "grid-template-columns",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "flex", "keyword"],
      functions: ["minmax", "fit-content", "repeat"],
      allowNegatives: false,
      combinations: 9999,
    },

    keys: {
      none: "none",
      auto: "auto",
      //todo add more templates
    },
  },
  gridColumnStart: {
    prefix: "column-start",
    property: "grid-column-start",
    dynamic: {
      enabled: true,
      dataTypes: ["integer", "keyword"],
      combinations: 2,
    },
    keys: {
      auto: "auto",
      span: "span",
    },
  },
  gridColumnEnd: {
    prefix: "column-end",
    property: "grid-column-end",
    dynamic: {
      enabled: true,
      dataTypes: ["integer", "keyword"],
      combinations: 2,
    },
    keys: {
      auto: "auto",
      span: "span",
    },
  },
  gridTemplateRows: {
    prefix: "grid-rows",
    property: "grid-template-rows",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "flex", "keyword"],
      functions: ["minmax", "fit-content", "repeat"],
      allowNegatives: false,
      combinations: 9999,
    },

    keys: {
      none: "none",
      //todo add more templates
    },
  },
  gridRowStart: {
    prefix: "row-start",
    property: "grid-row-start",
    dynamic: {
      enabled: true,
      dataTypes: ["integer", "keyword"],
      combinations: 2,
    },
    keys: {
      auto: "auto",
      span: "span",
    },
  },

  gridRowEnd: {
    prefix: "row-end",
    property: "grid-row-end",
    dynamic: {
      enabled: true,
      dataTypes: ["integer", "keyword"],
      combinations: 2,
    },
    keys: {
      auto: "auto",
      span: "span",
    },
  },
  gridAutoFlow: {
    prefix: "grid-flow",
    property: "grid-auto-flow",
    dynamic: { enabled: false, dataTypes: ["keyword"] },

    keys: {
      row: "row",
      column: "column",
      dense: "dense",
      "row-dense": "row dense",
      "column-dense": "column dense",
    },
  },
  gridAutoColumns: {
    prefix: "auto-columns",
    property: "grid-auto-columns",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "flex", "keyword"],
      functions: ["minmax", "fit-content"],
      combinations: 9999,
    },

    keys: {
      auto: "auto",
      "min-content": "min-content",
      "max-content": "max-content",
      fr: "minmax(0,1fr)",
    },
  },
  gridAutoRows: {
    prefix: "auto-rows",
    property: "grid-auto-rows",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "flex", "keyword"],
      functions: ["minmax", "fit-content"],
      combinations: 9999,
    },

    keys: {
      auto: "auto",
      "min-content": "min-content",
      "max-content": "max-content",
      fr: "minmax(0,1fr)",
    },
  },
  gap: {
    prefix: "gap",
    property: "gap",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 2,
    },
    keys: {
      normal: "normal",
    },
  },
  columnGap: {
    prefix: "gap-x",
    property: "column-gap",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      auto: "auto",
    },
  },
  rowGap: {
    prefix: "gap-y",
    property: "row-gap",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {
      auto: "auto",
    },
  },
};
