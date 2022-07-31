export default {
  listStyleImage: {
    prefix: "list",
    property: "list-style-image",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: [
        "url",
        "linear-gradient",
        "repeating-linear-gradient",
        "radial-gradient",
        "repeating-radial-gradient",
        "conic-gradient",
      ],
    },
    keys: [
      "images",
      "functionImages",
      {
        none: "none",
      },
    ],
  },
  listStylePosition: {
    prefix: "list",
    property: "list-style-position",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: { inside: "inside", outside: "outside" },
  },
  listStyleType: {
    prefix: "list",
    property: "list-style-type",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      disc: "disc",
      circle: "circle",
      square: "square",
      decimal: "decimal",
      "decimal-leading-zero": "decimal-leading-zero",
      roman: "upper-roman",
      "lower-roman": "lower-roman",
      greek: "upper-greek",
      "lower-greek": "lower-greek",
      alpha: "upper-alpha",
      "lower-alpha": "lower-alpha",
      latin: "upper-latin",
      "lower-latin": "lower-latin",
    },
  },
  listStyle: {
    prefix: "list",
    property: "list-style",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      shorthand: {
        list: ["listStyleImage", "listStylePosition", "listStyleType"],
      },
    },
    keys: { none: "none" },
  },
};
