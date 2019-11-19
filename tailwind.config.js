module.exports = {
  theme: {
    transform: {
      // defaults to this value
      none: "none"
    },
    transformOrigin: {
      // defaults to these values
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left"
    },
    translate: {
      // defaults to {}
      "1/2": "50%",
      full: "100%",
      "right-up": ["100%", "-100%"],
      "3d": ["40px", "-60px", "-130px"]
    },
    scale: {
      // defaults to {}
      "90": "0.9",
      "100": "1",
      "110": "1.1",
      "-100": "-1",
      "stretched-x": ["2", "0.5"],
      "stretched-y": ["0.5", "2"],
      "3d": ["0.5", "1", "2"]
    },
    rotate: {
      // defaults to {}
      "90": "90deg",
      "180": "180deg",
      "270": "270deg",
      "3d": ["0", "1", "0.5", "45deg"],
      "5": "5deg",
      "-5": "-5deg"
    },
    skew: {
      // defaults to {}
      "-5": "-5deg",
      "5": "5deg"
    },
    perspective: {
      // defaults to {}
      none: "none",
      "250": "250px",
      "500": "500px",
      "750": "750px",
      "1000": "1000px"
    },
    perspectiveOrigin: {
      // defaults to these values
      t: "top",
      tr: "top right",
      r: "right",
      br: "bottom right",
      b: "bottom",
      bl: "bottom left",
      l: "left",
      tl: "top left"
    },

    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "2rem",
      full: "999px"
    },
    extend: {
      colors: {
        "primary-red": {
          100: "#F5E9E8",
          200: "#E7C7C6",
          300: "#D8A6A3",
          400: "#BA635F",
          500: "#9D201A",
          600: "#8D1D17",
          700: "#5E1310",
          800: "#470E0C",
          900: "#2F0A08"
        }
      },
      fontFamily: {
        fira: ["'Fira Code'", "monospace"],
        sans: [
          '"Helvetica Neue"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"]
      },
      fontWeight: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900
      },
      height: {
        "72": "18rem",
        "80": "20rem",
        "88": "22rem",
        "96": "24rem",
        "104": "26rem",
        "120": "30rem",
        "144": "36rem",
        "160": "40rem"
      },
      opacity: {
        "0": "0",
        "10": ".1",
        "20": ".2",
        "25": ".25",
        "30": ".3",
        "40": ".4",
        "50": ".5",
        "60": ".6",
        "70": ".7",
        "75": ".75",
        "80": ".8",
        "90": ".9",
        "100": "1"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },
      maxWidth: theme => ({
        "screen-sm": theme("screens.sm"),
        "screen-md": theme("screens.md"),
        "screen-lg": theme("screens.lg"),
        "screen-xl": theme("screens.xl")
      })
    }
  },
  variants: {
    opacity: ["hover", "responsive"],
    textColor: [
      "active",
      "focus",
      "group-hover",
      "hover",
      "responsive",
      "focus"
    ],
    margin: ["last", "first", "odd", "even", "responsive"],
    backgroundColor: [
      "last",
      "first",
      "odd",
      "even",
      "responsive",
      "hover",
      "active",
      "focus"
    ],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    translate: ["responsive"],
    scale: ["responsive"],
    rotate: ["responsive"],
    skew: ["responsive"],
    perspective: ["responsive"],
    perspectiveOrigin: ["responsive"],
    transformStyle: ["responsive"],
    backfaceVisibility: ["responsive"],
    transformBox: ["responsive"],
    borderStyle: ["responsive", "hover", "active", "focus"],
    padding: ["first", "last", "odd", "even", "responsive"],
    group: ["hover"]
  },
  plugins: [
    require("tailwindcss-transforms")({
      "3d": false // defaults to false
    })
  ]
};
