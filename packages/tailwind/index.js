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
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
