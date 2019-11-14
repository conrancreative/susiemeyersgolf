module.exports = {
  theme: {
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
    textColor: ["active", "focus", "group-hover", "hover", "responsive"],
    margin: ["last", "first", "odd", "even", "responsive"],
    backgroundColor: ["last", "first", "odd", "even", "responsive"]
  },
  plugins: []
};
