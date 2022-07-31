export default {
  keyframes: {
    /*
        ? How it can look like
        slidein: `\t"from":
        "transform: translateX(0%)"
            }

            "to":
        "transform: translateX(100%)"
            }`,
        "test":{
            from: "transform: translateX(0%)",
            "50%": "transform: translateZ(10%)",
            to: [
                "transform: translateX(100%)",
                "margin-top: 10px",
                "margin-left: 20px",
            ],
        },
        */
    //tailwind css
    spin: {
      from: ["transform: rotate(0deg)"],
      to: ["transform: rotate(360deg)"],
    },
    ping: {
      "75%,100%": ["transform: scale(2)", "opacity: 0"],
    },
    "pulse-opacity": {
      "0%,100%": ["opacity: 1"],
      "50%": ["opacity: 0.5"],
    },
    //animate.css
    bounce: {
      "from,20%,53%,to": [
        //"-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      "40%,43%": [
        //"-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        //"-webkit-transform: translate3d(0, -30px, 0) scaleY(1.1)",
        "transform: translate3d(0, -30px, 0) scaleY(1.1)",
      ],
      "70%": [
        //"-webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        "animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06)",
        //"-webkit-transform: translate3d(0, -15px, 0) scaleY(1.05)",
        "transform: translate3d(0, -15px, 0) scaleY(1.05)",
      ],
      "80%": [
        //"-webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        //"-webkit-transform: translate3d(0, 0, 0) scaleY(0.95)",
        "transform: translate3d(0, 0, 0) scaleY(0.95)",
      ],
      "90%": [
        //"-webkit-transform: translate3d(0, -4px, 0) scaleY(1.02)",
        "transform: translate3d(0, -4px, 0) scaleY(1.02)",
      ],
    },
    flash: {
      "from, 50%,to": ["opacity:1"],
      "25%, 75%": ["opacity:0"],
    },
    pulse: {
      from: [
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
      "50%": [
        //"-webkit-transform: scale3d(1.05, 1.05, 1.05)",
        "transform: scale3d(1.05, 1.05, 1.05)",
      ],
      to: [
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
    },
    rubberBand: {
      from: [
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
      "30%": [
        //"-webkit-transform: scale3d(1.25, 0.75, 1)",
        "transform: scale3d(1.25, 0.75, 1)",
      ],
      "40%": [
        //"-webkit-transform: scale3d(0.75, 1.25, 1)",
        "transform: scale3d(0.75, 1.25, 1)",
      ],
      "50%": [
        //"-webkit-transform: scale3d(1.15, 0.85, 1)",
        "transform: scale3d(1.15, 0.85, 1)",
      ],
      "65%": [
        //"-webkit-transform: scale3d(0.95, 1.05, 1)",
        "transform: scale3d(0.95, 1.05, 1)",
      ],
      "75%": [
        //"-webkit-transform: scale3d(1.05, 0.95, 1)",
        "transform: scale3d(1.05, 0.95, 1)",
      ],
      to: [
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
    },
    "shake-x": {
      "from,to": [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      "10%, 30%, 50%, 70%, 90%": [
        //"-webkit-transform: translate3d(-10px, 0, 0)",
        "transform: translate3d(-10px, 0, 0)",
      ],
      "20%, 40%, 60%, 80%": [
        //"-webkit-transform: translate3d(10px, 0, 0)",
        "transform: translate3d(10px, 0, 0)",
      ],
    },
    shakeY: {
      "from,to": [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      "10%, 30%, 50%, 70%, 90%": [
        //"-webkit-transform: translate3d(0, -10px, 0)",
        "transform: translate3d(0, -10px, 0)",
      ],
      "20%, 40%, 60%, 80%": [
        //"-webkit-transform: translate3d(0, 10px, 0)",
        "transform: translate3d(0, 10px, 0)",
      ],
    },
    headShake: {
      "0%": [
        //"-webkit-transform: translateX(0)",
        "transform: translateX(0)",
      ],
      "6.5%": [
        //"-webkit-transform: translateX(-6px) rotateY(-9deg)",
        "transform: translateX(-6px) rotateY(-9deg)",
      ],
      "18.5%": [
        //"-webkit-transform: translateX(5px) rotateY(7deg)",
        "transform: translateX(5px) rotateY(7deg)",
      ],
      "31.5%": [
        //"-webkit-transform: translateX(-3px) rotateY(-5deg)",
        "transform: translateX(-3px) rotateY(-5deg)",
      ],
      "43.5%": [
        //"-webkit-transform: translateX(2px) rotateY(3deg)",
        "transform: translateX(2px) rotateY(3deg)",
      ],
      "50%": [
        //"-webkit-transform: translateX(0)",
        "transform: translateX(0)",
      ],
    },
    swing: {
      "20%": [
        //"-webkit-transform: rotate3d(0, 0, 1, 15deg)",
        "transform: rotate3d(0, 0, 1, 15deg)",
      ],
      "40%": [
        //"-webkit-transform: rotate3d(0, 0, 1, -10deg)",
        "transform: rotate3d(0, 0, 1, -10deg)",
      ],
      "60%": [
        //"-webkit-transform: rotate3d(0, 0, 1, 5deg)",
        "transform: rotate3d(0, 0, 1, 5deg)",
      ],
      "80%": [
        //"-webkit-transform: rotate3d(0, 0, 1, -5deg)",
        "transform: rotate3d(0, 0, 1, -5deg)",
      ],
      to: [
        //"-webkit-transform: rotate3d(0, 0, 1, 0deg)",
        "transform: rotate3d(0, 0, 1, 0deg)",
      ],
    },
    tada: {
      from: [
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
      "10%, 20%": [
        //"-webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
        "transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
      ],
      "30%, 50%, 70%, 90%": [
        //"-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
        "transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
      ],
      "40%, 60%, 80%": [
        //"-webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
        "transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
      ],
      to: [
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
    },
    wobble: {
      from: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      "15%": [
        //"-webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
        "transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)",
      ],
      "30%": [
        //"-webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
        "transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)",
      ],
      "45%": [
        //"-webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
        "transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)",
      ],
      "60%": [
        //"-webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
        "transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)",
      ],
      "75%": [
        //"-webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
        "transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    jello: {
      "from, 1%,to": [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      "22.2%": [
        //"-webkit-transform: skewX(-12.5deg) skewY(-12.5deg)",
        "transform: skewX(-12.5deg) skewY(-12.5deg)",
      ],
      "33.3%": [
        //"-webkit-transform: skewX(6.25deg) skewY(6.25deg)",
        "transform: skewX(6.25deg) skewY(6.25deg)",
      ],
      "44.4%": [
        //"-webkit-transform: skewX(-3.125deg) skewY(-3.125deg)",
        "transform: skewX(-3.125deg) skewY(-3.125deg)",
      ],
      "55.5%": [
        //"-webkit-transform: skewX(1.5625deg) skewY(1.5625deg)",
        "transform: skewX(1.5625deg) skewY(1.5625deg)",
      ],
      "66.6%": [
        //"-webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg)",
        "transform: skewX(-0.78125deg) skewY(-0.78125deg)",
      ],
      "77.7%": [
        //"-webkit-transform: skewX(0.390625deg) skewY(0.390625deg)",
        "transform: skewX(0.390625deg) skewY(0.390625deg)",
      ],
      "88.8%": [
        //"-webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg)",
        "transform: skewX(-0.1953125deg) skewY(-0.1953125deg)",
      ],
    },
    "heart-beat": {
      "0%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
      ],
      "14%": [
        //"-webkit-transform: scale(1.3)",
        "transform: scale(1.3)",
      ],
      "28%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
      ],
      "42%": [
        //"-webkit-transform: scale(1.3)",
        "transform: scale(1.3)",
      ],
      "70%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
      ],
    },
    /* Back entrances */
    "back-in-down": {
      "0%": [
        //"-webkit-transform: translateY(-1200px) scale(0.7)",
        "transform: translateY(-1200px) scale(0.7)",
        "opacity:0.7",
      ],
      "80%": [
        //"-webkit-transform: translateY(0px) scale(0.7)",
        "transform: translateY(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
    },
    "back-in-left": {
      "0%": [
        //"-webkit-transform: translateX(-2000px) scale(0.7)",
        "transform: translateX(-2000px) scale(0.7)",
        "opacity:0.7",
      ],
      "80%": [
        //"-webkit-transform: translateX(0px) scale(0.7)",
        "transform: translateX(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
    },
    "back-in-right": {
      "0%": [
        //"-webkit-transform: translateX(2000px) scale(0.7)",
        "transform: translateX(2000px) scale(0.7)",
        "opacity:0.7",
      ],
      "80%": [
        //"-webkit-transform: translateX(0px) scale(0.7)",
        "transform: translateX(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
    },
    "back-in-up": {
      "0%": [
        //"-webkit-transform: translateY(1200px) scale(0.7)",
        "transform: translateY(1200px) scale(0.7)",
        "opacity:0.7",
      ],
      "80%": [
        //"-webkit-transform: translateY(0px) scale(0.7)",
        "transform: translateY(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
    },
    /* Back exits */
    "back-out-down": {
      "0%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
      "20%": [
        //"-webkit-transform: translateY(0px) scale(0.7)",
        "transform: translateY(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: translateY(700px) scale(0.7)",
        "transform: translateY(700px) scale(0.7)",
        "opacity:0.7",
      ],
    },
    "back-out-left": {
      "0%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
      "20%": [
        //"-webkit-transform: translateX(0px) scale(0.7)",
        "transform: translateX(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: translateX(-2000px) scale(0.7)",
        "transform: translateX(-2000px) scale(0.7)",
        "opacity:0.7",
      ],
    },
    "back-out-right": {
      "0%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
      "20%": [
        //"-webkit-transform: translateX(0px) scale(0.7)",
        "transform: translateX(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: translateX(2000px) scale(0.7)",
        "transform: translateX(2000px) scale(0.7)",
        "opacity:0.7",
      ],
    },
    "back-out-up": {
      "0%": [
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
        "opacity:1",
      ],
      "20%": [
        //"-webkit-transform: translateY(0px) scale(0.7)",
        "transform: translateY(0px) scale(0.7)",
        "opacity:0.7",
      ],
      "100%": [
        //"-webkit-transform: translateY(-700px) scale(0.7)",
        "transform: translateY(-700px) scale(0.7)",
        "opacity:0.7",
      ],
    },
    /* Bouncing entrances  */
    "bounce-in": {
      "from, 20%, 40%, 60%, 80%,to": [
        //"-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
      ],
      "0%": [
        "opacity:0",
        //"-webkit-transform: scale3d(0.3, 0.3, 0.3)",
        "transform: scale3d(0.3, 0.3, 0.3)",
      ],
      "20%": [
        //"-webkit-transform: scale3d(1.1, 1.1, 1.1)",
        "transform: scale3d(1.1, 1.1, 1.1)",
      ],
      "40%": [
        //"-webkit-transform: scale3d(0.9, 0.9, 0.9)",
        "transform: scale3d(0.9, 0.9, 0.9)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: scale3d(1.03, 1.03, 1.03)",
        "transform: scale3d(1.03, 1.03, 1.03)",
      ],
      "80%": [
        //"-webkit-transform: scale3d(0.97, 0.97, 0.97)",
        "transform: scale3d(0.97, 0.97, 0.97)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: scale3d(1, 1, 1)",
        "transform: scale3d(1, 1, 1)",
      ],
    },
    "bounce-in-down": {
      "from, 60%, 75%, 90%,to": [
        //"-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
      ],
      "0%": [
        "opacity:0",
        //"-webkit-transform: translate3d(0, -3000px, 0) scaleY(3)",
        "transform: translate3d(0, -3000px, 0) scaleY(3)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 25px, 0) scaleY(0.9)",
        "transform: translate3d(0, 25px, 0) scaleY(0.9)",
      ],
      "75%": [
        //"-webkit-transform: translate3d(0, -10px, 0) scaleY(0.95)",
        "transform: translate3d(0, -10px, 0) scaleY(0.95)",
      ],
      "90%": [
        //"-webkit-transform: translate3d(0, 5px, 0) scaleY(0.985)",
        "transform: translate3d(0, 5px, 0) scaleY(0.985)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "bounce-in-left": {
      "from, 60%, 75%, 90%,to": [
        //"-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
      ],
      "0%": [
        "opacity:0",
        //"-webkit-transform: translate3d(-3000px, 0, 0) scaleX(3)",
        "transform: translate3d(-3000px, 0, 0) scaleX(3)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: translate3d(25px, 0, 0) scaleX(1)",
        "transform: translate3d(25px, 0, 0) scaleX(1)",
      ],
      "75%": [
        //"-webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98)",
        "transform: translate3d(-10px, 0, 0) scaleX(0.98)",
      ],
      "90%": [
        //"-webkit-transform: translate3d(5px, 0, 0) scaleX(0.995)",
        "transform: translate3d(5px, 0, 0) scaleX(0.995)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "bounce-in-right": {
      "from, 60%, 75%, 90%,to": [
        //"-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
      ],
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(3000px, 0, 0) scaleX(3)",
        "transform: translate3d(3000px, 0, 0) scaleX(3)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: translate3d(-25px, 0, 0) scaleX(1)",
        "transform: translate3d(-25px, 0, 0) scaleX(1)",
      ],
      "75%": [
        //"-webkit-transform: translate3d(10px, 0, 0) scaleX(0.98)",
        "transform: translate3d(10px, 0, 0) scaleX(0.98)",
      ],
      "90%": [
        //"-webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995)",
        "transform: translate3d(-5px, 0, 0) scaleX(0.995)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "bounce-in-up": {
      "from, 60%, 75%, 90%,to": [
        //"-webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
        "animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1)",
      ],
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, 3000px, 0) scaleY(5)",
        "transform: translate3d(0, 3000px, 0) scaleY(5)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: translate3d(0, -20px, 0) scaleY(0.9)",
        "transform: translate3d(0, -20px, 0) scaleY(0.9)",
      ],
      "75%": [
        //"-webkit-transform: translate3d(0, 10px, 0) scaleY(0.95)",
        "transform: translate3d(0, 10px, 0) scaleY(0.95)",
      ],
      "90%": [
        //"-webkit-transform: translate3d(0, -5px, 0) scaleY(0.985)",
        "transform: translate3d(0, -5px, 0) scaleY(0.985)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    /* Bouncing exits  */
    "bounce-out": {
      "20%": [
        //"-webkit-transform: scale3d(0.9, 0.9, 0.9)",
        "transform: scale3d(0.9, 0.9, 0.9)",
      ],
      "50%, 55%": [
        "opacity:1",
        //"-webkit-transform: scale3d(1.1, 1.1, 1.1)",
        "transform: scale3d(1.1, 1.1, 1.1)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.3, 0.3, 0.3)",
        "transform: scale3d(0.3, 0.3, 0.3)",
      ],
    },
    "bounce-out-down": {
      "20%": [
        //"-webkit-transform: translate3d(0, 10px, 0) scaleY(0.985)",
        "transform: translate3d(0, 10px, 0) scaleY(0.985)",
      ],
      "40%, 45%": [
        "opacity:1",
        //"-webkit-transform: translate3d(0, -20px, 0) scaleY(0.9)",
        "transform: translate3d(0, -20px, 0) scaleY(0.9)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, 2000px, 0) scaleY(3)",
        "transform: translate3d(0, 2000px, 0) scaleY(3)",
      ],
    },
    "bounce-out-left": {
      "20%": [
        "opacity:1",
        //"-webkit-transform: translate3d(20px, 0, 0) scaleX(0.9)",
        "transform: translate3d(20px, 0, 0) scaleX(0.9)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(-2000px, 0, 0) scaleX(2)",
        "transform: translate3d(-2000px, 0, 0) scaleX(2)",
      ],
    },
    "bounce-out-right": {
      "20%": [
        "opacity:1",
        //"-webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9)",
        "transform: translate3d(-20px, 0, 0) scaleX(0.9)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(2000px, 0, 0) scaleX(2)",
        "transform: translate3d(2000px, 0, 0) scaleX(2)",
      ],
    },
    "bounce-out-up": {
      "20%": [
        //"-webkit-transform: translate3d(0, -10px, 0) scaleY(0.985)",
        "transform: translate3d(0, -10px, 0) scaleY(0.985)",
      ],
      "40%, 45%": [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 20px, 0) scaleY(0.9)",
        "transform: translate3d(0, 20px, 0) scaleY(0.9)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, -2000px, 0) scaleY(3)",
        "transform: translate3d(0, -2000px, 0) scaleY(3)",
      ],
    },
    /* Fading entrances  */
    "fade-in": {
      from: ["opacity:0"],
      to: ["opacity:1"],
    },
    "fade-in-down": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, -100%, 0)",
        "transform: translate3d(0, -100%, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-down-big": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, -2000px, 0)",
        "transform: translate3d(0, -2000px, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-left": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, 0, 0)",
        "transform: translate3d(-100%, 0, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-left-big": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(-2000px, 0, 0)",
        "transform: translate3d(-2000px, 0, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-right": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, 0, 0)",
        "transform: translate3d(100%, 0, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-right-big": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(2000px, 0, 0)",
        "transform: translate3d(2000px, 0, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-up": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, 100%, 0)",
        "transform: translate3d(0, 100%, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-up-big": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, 2000px, 0)",
        "transform: translate3d(0, 2000px, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-top-left": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, -100%, 0)",
        "transform: translate3d(-100%, -100%, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-top-right": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, -100%, 0)",
        "transform: translate3d(100%, -100%, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-bottom-left": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, 100%, 0)",
        "transform: translate3d(-100%, 100%, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "fade-in-bottom-right": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, 100%, 0)",
        "transform: translate3d(100%, 100%, 0)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    /* Fading exits */
    "fade-out": {
      from: ["opacity:1"],
      to: ["opacity:0"],
    },
    "fade-out-down": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, 100%, 0)",
        "transform: translate3d(0, 100%, 0)",
      ],
    },
    "fade-out-down-big": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, 2000px, 0)",
        "transform: translate3d(0, 2000px, 0)",
      ],
    },
    "fade-out-left": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, 0, 0)",
        "transform: translate3d(-100%, 0, 0)",
      ],
    },
    "fade-out-left-big": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(-2000px, 0, 0)",
        "transform: translate3d(-2000px, 0, 0)",
      ],
    },
    "fade-out-right": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, 0, 0)",
        "transform: translate3d(100%, 0, 0)",
      ],
    },
    "fade-out-right-big": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(2000px, 0, 0)",
        "transform: translate3d(2000px, 0, 0)",
      ],
    },
    "fade-out-up": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, -100%, 0)",
        "transform: translate3d(0, -100%, 0)",
      ],
    },
    "fade-out-up-big": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(0, -2000px, 0)",
        "transform: translate3d(0, -2000px, 0)",
      ],
    },
    "fade-out-top-left": {
      from: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, -100%, 0)",
        "transform: translate3d(-100%, -100%, 0)",
      ],
    },
    "fade-out-top-right": {
      from: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, -100%, 0)",
        "transform: translate3d(100%, -100%, 0)",
      ],
    },
    "fade-out-bottom-right": {
      from: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, 100%, 0)",
        "transform: translate3d(100%, 100%, 0)",
      ],
    },
    "fade-out-bottom-left": {
      from: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, 100%, 0)",
        "transform: translate3d(-100%, 100%, 0)",
      ],
    },
    /* Flippers */
    flip: {
      from: [
        //"-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
        "transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
        //"-webkit-animation-timing-function: ease-out",
        "animation-timing-function: ease-out",
      ],
      "40%": [
        //"-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
        "transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)",
        //"-webkit-animation-timing-function: ease-out",
        "animation-timing-function: ease-out",
      ],
      "50%": [
        //"-webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
        "transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
      ],
      "80%": [
        //"-webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95)translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        "transform: perspective(400px) scale3d(0.95, 0.95, 0.95)translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
      ],
      to: [
        //"-webkit-transform: perspective(400px) scale3d(1, 1, 1)translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        "transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0)rotate3d(0, 1, 0, 0deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
      ],
    },
    "flip-in-x": {
      from: [
        //"-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg)",
        "transform: perspective(400px) rotate3d(1, 0, 0, 90deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
        "opacity:0",
      ],
      "40%": [
        //"-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg)",
        "transform: perspective(400px) rotate3d(1, 0, 0, -20deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
      ],
      "60%": [
        //"-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg)",
        "transform: perspective(400px) rotate3d(1, 0, 0, 10deg)",
        "opacity:1",
      ],
      "80%": [
        //"-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg)",
        "transform: perspective(400px) rotate3d(1, 0, 0, -5deg)",
      ],
      to: [
        //"-webkit-transform: perspective(400px)",
        "transform: perspective(400px)",
      ],
    },
    "flip-in-y": {
      from: [
        //"-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg)",
        "transform: perspective(400px) rotate3d(0, 1, 0, 90deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
        "opacity:0",
      ],
      "40%": [
        //"-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg)",
        "transform: perspective(400px) rotate3d(0, 1, 0, -20deg)",
        //"-webkit-animation-timing-function: ease-in",
        "animation-timing-function: ease-in",
      ],
      "60%": [
        //"-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg)",
        "transform: perspective(400px) rotate3d(0, 1, 0, 10deg)",
        "opacity:1",
      ],
      "80%": [
        //"-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg)",
        "transform: perspective(400px) rotate3d(0, 1, 0, -5deg)",
      ],
      to: [
        //"-webkit-transform: perspective(400px)",
        "transform: perspective(400px)",
      ],
    },
    "flip-out-x": {
      from: [
        //"-webkit-transform: perspective(400px)",
        "transform: perspective(400px)",
      ],
      "30%": [
        //"-webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg)",
        "transform: perspective(400px) rotate3d(1, 0, 0, -20deg)",
        "opacity:1",
      ],
      to: [
        //"-webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg)",
        "transform: perspective(400px) rotate3d(1, 0, 0, 90deg)",
        "opacity:0",
      ],
    },
    "flip-out-y": {
      from: [
        //"-webkit-transform: perspective(400px)",
        "transform: perspective(400px)",
      ],
      "30%": [
        //"-webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg)",
        "transform: perspective(400px) rotate3d(0, 1, 0, -15deg)",
        "opacity:1",
      ],
      to: [
        //"-webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg)",
        "transform: perspective(400px) rotate3d(0, 1, 0, 90deg)",
        "opacity:0",
      ],
    },
    /* Lightspeed */
    "light-speed-in-right": {
      from: [
        //"-webkit-transform: translate3d(100%, 0, 0) skewX(-30deg)",
        "transform: translate3d(100%, 0, 0) skewX(-30deg)",
        "opacity:0",
      ],
      "60%": [
        //"-webkit-transform: skewX(20deg)",
        "transform: skewX(20deg)",
        "opacity:1",
      ],
      "80%": [
        //"-webkit-transform: skewX(-5deg)",
        "transform: skewX(-5deg)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "light-speed-in-left": {
      from: [
        //"-webkit-transform: translate3d(-100%, 0, 0) skewX(30deg)",
        "transform: translate3d(-100%, 0, 0) skewX(30deg)",
        "opacity:0",
      ],
      "60%": [
        //"-webkit-transform: skewX(-20deg)",
        "transform: skewX(-20deg)",
        "opacity:1",
      ],
      "80%": [
        //"-webkit-transform: skewX(5deg)",
        "transform: skewX(5deg)",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "light-speed-out-right": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: translate3d(100%, 0, 0) skewX(30deg)",
        "transform: translate3d(100%, 0, 0) skewX(30deg)",
        "opacity:0",
      ],
    },
    "light-speed-out-left": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg)",
        "transform: translate3d(-100%, 0, 0) skewX(-30deg)",
        "opacity:0",
      ],
    },
    /* Rotating entrances */
    "rotate-in": {
      from: [
        //"-webkit-transform: rotate3d(0, 0, 1, -200deg)",
        "transform: rotate3d(0, 0, 1, -200deg)",
        "opacity:0",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
        "opacity:1",
      ],
    },
    "rotate-in-down-left": {
      from: [
        //"-webkit-transform: rotate3d(0, 0, 1, -45deg)",
        "transform: rotate3d(0, 0, 1, -45deg)",
        "opacity:0",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
        "opacity:1",
      ],
    },
    "rotate-in-down-right": {
      from: [
        //"-webkit-transform: rotate3d(0, 0, 1, 45deg)",
        "transform: rotate3d(0, 0, 1, 45deg)",
        "opacity:0",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
        "opacity:1",
      ],
    },
    "rotate-in-up-left": {
      from: [
        //"-webkit-transform: rotate3d(0, 0, 1, 45deg)",
        "transform: rotate3d(0, 0, 1, 45deg)",
        "opacity:0",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
        "opacity:1",
      ],
    },
    "rotate-in-up-right": {
      from: [
        //"-webkit-transform: rotate3d(0, 0, 1, -90deg)",
        "transform: rotate3d(0, 0, 1, -90deg)",
        "opacity:0",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
        "opacity:1",
      ],
    },
    /* Rotating exits */
    "rotate-out": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: rotate3d(0, 0, 1, 200deg)",
        "transform: rotate3d(0, 0, 1, 200deg)",
        "opacity:0",
      ],
    },
    "rotate-out-down-left": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: rotate3d(0, 0, 1, 45deg)",
        "transform: rotate3d(0, 0, 1, 45deg)",
        "opacity:0",
      ],
    },
    "rotate-out-down-right": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: rotate3d(0, 0, 1, -45deg)",
        "transform: rotate3d(0, 0, 1, -45deg)",
        "opacity:0",
      ],
    },
    "rotate-out-up-left": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: rotate3d(0, 0, 1, -45deg)",
        "transform: rotate3d(0, 0, 1, -45deg)",
        "opacity:0",
      ],
    },
    "rotate-out-up-right": {
      from: ["opacity:1"],
      to: [
        //"-webkit-transform: rotate3d(0, 0, 1, 90deg)",
        "transform: rotate3d(0, 0, 1, 90deg)",
        "opacity:0",
      ],
    },
    /* Specials */
    hinge: {
      "0%": [
        //"-webkit-animation-timing-function: ease-in-out",
        "animation-timing-function: ease-in-out",
      ],
      "20%, 60%": [
        //"-webkit-transform: rotate3d(0, 0, 1, 80deg)",
        "transform: rotate3d(0, 0, 1, 80deg)",
        //"-webkit-animation-timing-function: ease-in-out",
        "animation-timing-function: ease-in-out",
      ],
      "40%, 80%": [
        //"-webkit-transform: rotate3d(0, 0, 1, 60deg)",
        "transform: rotate3d(0, 0, 1, 60deg)",
        //"-webkit-animation-timing-function: ease-in-out",
        "animation-timing-function: ease-in-out",
        "opacity:1",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 700px, 0)",
        "transform: translate3d(0, 700px, 0)",
        "opacity:0",
      ],
    },
    "jack-in-the-box": {
      from: [
        "opacity:0",
        //"-webkit-transform: scale(0.1) rotate(30deg)",
        "transform: scale(0.1) rotate(30deg)",
        //"-webkit-transform-origin: center bottom",
        "transform-origin: center bottom",
      ],
      "50%": [
        //"-webkit-transform: rotate(-10deg)",
        "transform: rotate(-10deg)",
      ],
      "70%": [
        //"-webkit-transform: rotate(3deg)",
        "transform: rotate(3deg)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: scale(1)",
        "transform: scale(1)",
      ],
    },
    /* originally authored by Nick Pettit - "https://github.com/nickpettit/glide */
    "roll-in": {
      from: [
        "opacity:0",
        //"-webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
        "transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)",
      ],
      to: [
        "opacity:1",
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    /* originally authored by Nick Pettit - "https://github.com/nickpettit/glide */
    "roll-out": {
      from: ["opacity:1"],
      to: [
        "opacity:0",
        //"-webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
        "transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)",
      ],
    },
    /* Zooming entrances */
    "zoom-in": {
      from: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.3, 0.3, 0.3)",
        "transform: scale3d(0.3, 0.3, 0.3)",
      ],
      "50%": ["opacity:1"],
    },
    "zoom-in-down": {
      from: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
        "transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
        "animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
      ],
    },
    "zoom-in-left": {
      from: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
        "transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
        "animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
      ],
    },
    "zoom-in-right": {
      from: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
        "transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
        "animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
      ],
    },
    "zoom-in-up": {
      from: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
        "transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      ],
      "60%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
        "animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
      ],
    },
    /* Zooming exits */
    "zoom-out": {
      from: ["opacity:1"],
      "50%": [
        "opacity:0",
        //"-webkit-transform: scale3d(0.3, 0.3, 0.3)",
        "transform: scale3d(0.3, 0.3, 0.3)",
      ],
      to: ["opacity:0"],
    },
    "zoom-out-down": {
      "40%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
        "transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
        "animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
      ],
    },
    "zoom-out-left": {
      "40%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: scale(0.1) translate3d(-2000px, 0, 0)",
        "transform: scale(0.1) translate3d(-2000px, 0, 0)",
      ],
    },
    "zoom-out-right": {
      "40%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: scale(0.1) translate3d(2000px, 0, 0)",
        "transform: scale(0.1) translate3d(2000px, 0, 0)",
      ],
    },
    "zoom-out-up": {
      "40%": [
        "opacity:1",
        //"-webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        "transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        "animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      ],
      to: [
        "opacity:0",
        //"-webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
        "transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
        //"-webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
        "animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)",
      ],
    },
    /* Sliding entrances */
    "slide-in-down": {
      from: [
        //"-webkit-transform: translate3d(0, -100%, 0)",
        "transform: translate3d(0, -100%, 0)",
        "visibility: visible",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "slide-in-left": {
      from: [
        //"-webkit-transform: translate3d(-100%, 0, 0)",
        "transform: translate3d(-100%, 0, 0)",
        "visibility: visible",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "slide-in-right": {
      from: [
        //"-webkit-transform: translate3d(100%, 0, 0)",
        "transform: translate3d(100%, 0, 0)",
        "visibility: visible",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    "slide-in-up": {
      from: [
        //"-webkit-transform: translate3d(0, 100%, 0)",
        "transform: translate3d(0, 100%, 0)",
        "visibility: visible",
      ],
      to: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
    },
    /* Sliding exits */
    "slide-out-down": {
      from: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "visibility: hidden",
        //"-webkit-transform: translate3d(0, 100%, 0)",
        "transform: translate3d(0, 100%, 0)",
      ],
    },
    "slide-out-left": {
      from: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "visibility: hidden",
        //"-webkit-transform: translate3d(-100%, 0, 0)",
        "transform: translate3d(-100%, 0, 0)",
      ],
    },
    "slide-out-right": {
      from: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "visibility: hidden",
        //"-webkit-transform: translate3d(100%, 0, 0)",
        "transform: translate3d(100%, 0, 0)",
      ],
    },
    "slide-out-up": {
      from: [
        //"-webkit-transform: translate3d(0, 0, 0)",
        "transform: translate3d(0, 0, 0)",
      ],
      to: [
        "visibility: hidden",
        //"-webkit-transform: translate3d(0, -100%, 0)",
        "transform: translate3d(0, -100%, 0)",
      ],
    },
    //transition.style
    "circle-in-hesitate": {
      "0%": "clip-path: circle(0%)",
      "40%": "clip-path: circle(40%)",
      "100%": "clip-path: circle(125%)",
    },
    "circle-in-center": {
      from: "clip-path: circle(0%)",
      to: "clip-path: circle(125%)",
    },
    "circle-in-top-right": {
      from: "clip-path: circle(0%)",
      to: "clip-path: circle(150% at top right)",
    },
    "circle-in-top-left": {
      from: "clip-path: circle(0%)",
      to: "clip-path: circle(150% at top left)",
    },
    "circle-in-bottom-left": {
      from: "clip-path: circle(0%)",
      to: "clip-path: circle(150% at bottom left)",
    },
    "circle-in-bottom-right": {
      from: "clip-path: circle(0%)",
      to: "clip-path: circle(150% at bottom right)",
    },
    "circle-out-hesitate": {
      "0%": "clip-path: circle(125%)",
      "40%": "clip-path: circle(40%)",
      "100%": "clip-path: circle(0%)",
    },
    "circle-out-center": {
      from: "clip-path: circle(0%)",
      to: "clip-path: circle(125%)",
    },
    "circle-out-top-right": {
      from: "clip-path: circle(125%)",
      to: "clip-path: circle(0% at top right)",
    },
    "circle-out-top-left": {
      from: "clip-path: circle(125%)",
      to: "clip-path: circle(0% at top left)",
    },
    "circle-out-bottom-left": {
      from: "clip-path: circle(125%)",
      to: "clip-path: circle(0% at bottom left)",
    },
    "circle-out-bottom-right": {
      from: "clip-path: circle(125%)",
      to: "clip-path: circle(0% at bottom right)",
    },
    "square-in-center": {
      from: "clip-path: inset(100% 100% 100% 100%)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "square-in-hesitate": {
      "0%": "clip-path: inset(100% 100% 100% 100%)",
      "40%": "clip-path: inset(33% 33% 33% 33%)",
      "100%": "clip-path: inset(0 0 0 0)",
    },
    "square-in-top-left": {
      from: "clip-path: inset(100% 0 0 100%)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "square-in-top-right": {
      from: "clip-path: inset(100% 100% 0 0)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "square-in-bottom-right": {
      from: "clip-path: inset(0 100% 100% 0)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "square-in-bottom-left": {
      from: "clip-path: inset(0 0 100% 100%)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "square-out-center": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(100% 100% 100% 100%)",
    },
    "square-out-hesitate": {
      "0%": "clip-path: inset(0 0 0 0)",
      "40%": "clip-path: inset(33% 33% 33% 33%)",
      "100%": "clip-path: inset(100% 100% 100% 100%)",
    },
    "square-out-top-left": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(0 100% 100% 0)",
    },
    "square-out-top-right": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(0 0 100% 100%)",
    },
    "square-out-bottom-right": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(100% 0 0 100%)",
    },
    "square-out-bottom-left": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(100% 100% 0 0)",
    },
    "wipe-in-right": {
      from: "clip-path: inset(0 100% 0 0)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "wipe-in-left": {
      from: "clip-path: inset(0 0 0 100%)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "wipe-in-up": {
      from: "clip-path: inset(100% 0 0 0)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "wipe-in-down": {
      from: "clip-path: inset(0 0 0 100%)",
      to: "clip-path: inset(0 0 0 0)",
    },
    "wipe-in-top-right": {
      from: "clip-path: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)",
      to: "clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
    },
    "wipe-in-top-left": {
      from: "clip-path: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%)",
      to: "clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
    },
    "wipe-in-bottom-right": {
      from: "clip-path: polygon(0 0, 0 0, 0 0, 0 50%)",
      to: "clip-path: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%)",
    },
    "wipe-in-bottom-left": {
      from: "clip-path: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%)",
      to: "clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
    },
    "wipe-out-left": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(0 100% 0 0)",
    },
    "wipe-out-right": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(0 0 0 100%)",
    },
    "wipe-out-up": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(0 0 100% 0)",
    },
    "wipe-out-down": {
      from: "clip-path: inset(0 0 0 0)",
      to: "clip-path: inset(100% 0 0 0)",
    },
    "wipe-out-top-right": {
      from: "clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
      to: "clip-path: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%)",
    },
    "wipe-out-top-left": {
      from: "clip-path: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%)",
      to: "clip-path: polygon(0 0, 0 0, 0 0, 0 50%)",
    },
    "wipe-out-bottom-right": {
      from: "clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
      to: "clip-path: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%)",
    },
    "wipe-out-bottom-left": {
      from: "clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%)",
      to: "clip-path: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%)",
    },
    "diamond-in-center": {
      from: "clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      to: "clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%)",
    },
    "diamond-in-hesitate": {
      "0%": "clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      "50%": "clip-path: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%)",
      "100%": "clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%)",
    },
    "polygon-in-opposing-corners": {
      from: "clip-path: polygon(0 0, 50% 50%, 100% 100%, 50% 50%)",
      to: "clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0)",
    },
    "diamond-out-center": {
      from: "clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%)",
      to: "clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    },
    "diamond-out-hesitate": {
      "0%": "clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%)",
      "50%": "clip-path: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%)",
      "100%": "clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
    },
    "polygon-out-opposing-corners": {
      from: "clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0)",
      to: "clip-path: polygon(0 0, 50% 50%, 100% 100%, 50% 50%)",
    },
    "circle-swoop-in-top-left": {
      from: "clip-path: circle(0% at top left)",
      to: "clip-path: circle(150% at bottom left)",
    },
    "circle-swoop-in-top-right": {
      from: "clip-path: circle(0% at top right)",
      to: "clip-path: circle(150% at bottom right)",
    },
    "circle-swoop-in-bottom-left": {
      from: "clip-path: circle(0% at bottom right)",
      to: "clip-path: circle(150% at top right)",
    },
    "circle-swoop-bottom-right": {
      from: "clip-path: circle(0% at bottom right)",
      to: "clip-path: circle(150% at top right)",
    },
    "circle-swoop-out-top-left": {
      from: "clip-path: circle(150% at top left)",
      to: "clip-path: circle(0% at bottom left)",
    },
    "circle-swoop-out-top-right": {
      from: "clip-path: circle(150% at top right)",
      to: "clip-path: circle(0% at bottom right)",
    },
    "circle-swoop-out-bottom-left": {
      from: "clip-path: circle(150% at bottom left)",
      to: "clip-path: circle(0% at top left)",
    },
    "circle-swoop-out-bottom-right": {
      from: "clip-path: circle(150% at bottom right)",
      to: "clip-path: circle(0% at top right)",
    },
  },
};
