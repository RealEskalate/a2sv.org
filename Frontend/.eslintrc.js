module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "prettier",
    "prettier/vue",
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  plugins: ["prettier"],
  // add your custom rules here
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "never"]
  }
};
