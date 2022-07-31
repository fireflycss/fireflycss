import { defineUtilities } from "../../helpers/helpers";

//todo fix type issue here
export default defineUtilities({
  screenReader: {
    prefix: "",
    properties: [
      "position",
      "width",
      "height",
      "padding",
      "margin",
      "clip",
      "white-space",
      "border-width",
    ],
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      "sr-only": [
        "absolute",
        "1px",
        "1px",
        "-1px",
        "hidden",
        "rect(0,0,0,0)",
        "nowrap",
        "0",
      ],
      "not-sr-only": [
        "static",
        "auto",
        "auto",
        "0",
        "0",
        "visible",
        "auto",
        "normal",
        "0",
      ],
    },
  },
});
