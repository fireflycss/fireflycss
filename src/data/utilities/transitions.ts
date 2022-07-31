export default {
  transitionProperty: {
    prefix: "transition",
    property: "transition-property",
    dynamic: { enabled: false, dataTypes: ["keyword"] },
    keys: {
      none: "none",
      all: "all",
      left: "left",
      bg: "background",
      //todo add more general ones, individual properties can be added through []
    },
  },
  transitionTimingFunction: {
    prefix: "ease",
    property: "transition-timing-function",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
      functions: ["steps", "cubic-bezier"],
    },
    keys: {
      linear: "linear",
      ease: "ease",
      in: "ease-in",
      out: "ease-out",
      "in-out": "cubic-bezier(0.4,0,0.2,1)",
      //todo add more timing functions
    },
  },
  transitionDuration: {
    prefix: "duration",
    property: "transition-duration",
    dynamic: { enabled: true, dataTypes: ["time"] },
    keys: {},
  },
  transitionDelay: {
    prefix: "delay",
    property: "transition-delay",
    dynamic: { enabled: true, dataTypes: ["time"] },
    keys: {},
  },
};
