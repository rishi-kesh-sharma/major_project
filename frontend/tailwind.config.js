/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px",
      },
      colors: {
        primary: {
          foreground: "#FFFFFF",
          DEFAULT: {
            DEFAULT: "#880ED4",
          },
          dark: {
            DEFAULT: "#6C0BA9",
            foreground: "#FFFFFF",
          },
          darker: {
            DEFAULT: "#51087E",
            foreground: "#FFFFFF",
          },
          darkest: {
            DEFAULT: "#51087E",
            foreground: "#FFFFFF",
          },
          light: {
            DEFAULT: "#A020F0",
            foreground: "#FFFFFF",
          },
          lighter: {
            DEFAULT: "#B24BF3",
            foreground: "#FFFFFF",
          },
          lightest: {
            DEFAULT: "#C576F6",
            foreground: "#FFFFFF",
          },
          // eslint-disable-next-line no-useless-computed-key
          ["extra-light"]: {
            DEFAULT: "#D7A1F9",
            foreground: "#51087E",
          },
        },
        secondary: {
          DEFAULT: {
            DEFAULT: colors.gray["50"],
            foreground: colors.gray["700"],
          },
          light: {
            DEFAULT: colors.gray["50"],
            foreground: colors.gray["700"],
          },
          dark: {
            DEFAULT: colors.gray["100"],
            foreground: colors.gray["700"],
          },
        },
      },
    },
  },
  plugins: [],
};
