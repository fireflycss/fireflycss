//Animation Utilities
export default {
  animation: {
    prefix: "motion",
    property: "animation",
    dynamic: {
      enabled: true,
      dataTypes: ["keyword"],
    },
    keys: "animations",
  },
  animationName: {
    prefix: "motion-name",
    property: "animation-name",
    dynamic: {
      enabled: false,
      dataTypes: ["keyword"],
    },
    keys: "animationNames",
  },
  animationDuration: {
    prefix: "motion-duration",
    property: "animation-duration",
    dynamic: { enabled: true, dataTypes: ["time"] },
    keys: {},
  },
  animationDelay: {
    prefix: "motion-delay",
    property: "animation-delay",
    dynamic: { enabled: true, dataTypes: ["time"] },
    keys: {},
  },
  animationTimingFunction: {
    prefix: "motion",
    property: "animation-timing-function",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: ["cubic-bezier", "steps"],
    },
    keys: {
      ease: "ease",
      "ease-in": "ease-in",
      "ease-out": "ease-out",
      "ease-in-out": "ease-in-out",
      linear: "linear",
      "step-start": "step-start",
      "step-end": "step-end",
      //todo add more preset timings
    },
  },
  animationIterationCount: {
    prefix: "motion-repeat",
    property: "animation-iteration-count",
    dynamic: {
      enabled: true,
      dataTypes: ["number", "keyword"],
    },
    keys: { "": "infinite", infinite: "infinite" },
  },
  animationDirection: {
    prefix: "motion",
    property: "animation-direction",
    dynamic: { enabled: true, dataTypes: ["keyword"] },
    keys: {
      normal: "normal",
      reverse: "reverse",
      alternate: "alternate",
      "alternate-reverse": "alternate-reverse",
    },
  },
  animationPlayState: {
    prefix: "motion",
    property: "animation-play-state",
    dynamic: { enabled: true, dataTypes: ["keyword"] },
    keys: { running: "running", paused: "paused" },
  },
  animationFillMode: {
    prefix: "motion-fill",
    property: "animation-fill-mode",
    dynamic: { enabled: true, dataTypes: ["keyword"] },
    keys: {
      none: "none",
      forwards: "forwards",
      backwards: "backwards",
      both: "both",
    },
  },
  //* if using the shorthand, and the input length of an animation is 1, it will use the animation preset, otherwise it will simply use the animation name and user has to define the duration and iteration count
  animationShorthand: {
    prefix: "motion",
    property: "animation",
    dynamic: {
      enabled: true,
      dataTypes: ["shorthand"],
      combinations: 8,
      shorthandSingle: { motion: ["animation"] },
      shorthand: {
        motion: [
          "animationDirection",
          "animationPlayState",
          "animationTimingFunction",
        ],
        "motion-name": ["animationName"],
        "motion-duration": ["animationDuration"],
        "motion-delay": ["animationDelay"],
        "motion-fill": ["animationFillMode"],
        "motion-repeat": ["animationIterationCount"],
      },
    },
    keys: {},
  },
  //! offset-path has poor browser support: 75% with firefox not supporting ray() by default
  offsetPath: {
    prefix: "motion-path",
    property: "offset-path",
    dynamic: {
      enabled: true,
      dataTypes: ["function", "keyword"],
      functions: ["path", "url"],
    },
    keys: {
      none: "none",
    },
  },
  //! offset-distance has poor browser support: 75%
  offsetDistance: {
    prefix: "motion-distance",
    property: "offset-distance",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
    },
    keys: {},
  },
  //! offset-anchor has poor browser support: 73%
  offsetAnchor: {
    prefix: "motion-anchor",
    property: "offset-anchor",
    dynamic: {
      enabled: true,
      dataTypes: ["length", "percentage", "keyword"],
      combinations: 4,
    },
    keys: {
      auto: "auto",
      top: "top",
      bottom: "bottom",
      left: "left",
      right: "right",
      center: "center",
    },
  },
  //! offset-rotate has poor browser support: 75%
  offsetRotate: {
    prefix: "motion-rotate",
    property: "offset-rotate",
    dynamic: {
      enabled: true,
      dataTypes: ["angle", "keyword"],
      combinations: 2,
    },
    keys: { auto: "auto", reverse: "reverse" },
  },
};
