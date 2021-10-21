const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "rotate-180": "rotate 0.5s linear",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
