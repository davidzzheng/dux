const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.tsx", "./**/*.svg"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "glow-xl":
          "0 3px 9px 0 rgba(37, 99, 235, 1), 0 1px 3px 0 rgba(37, 99, 235, 0.4);",
        glow: "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.125)",
      },
    },
    variants: {
      extend: {
        boxShadow: ["dark"],
      },
    },
    plugins: [],
  },
};
