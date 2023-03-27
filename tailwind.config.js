/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        main: "#161D22",
        white: "#FFFFFF",
        orange: {
          400: "#F75014",
          500: "#CE5704",
          600: "#F2261C",
          700: "#F04E15"
        },
        green: {
          200: "#90EE90",
          300: "#50B81F",
        },
        blue: {
          300: "#4682B4",
          400: "#117EEC",
          500: "#1882FF"
        },
        yellow: {
          500: "#FAA514",
        },
        gray: {
          300: "#6B798B",
          400: "#DADBDE",
          500: "#303540",
          600: "#454D60"
        },
      },
    },
  },
  plugins: [],
};
