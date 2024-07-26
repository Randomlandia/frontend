// .eslintrc.js
module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
  ],
  plugins: [
    "react",
  ],
  rules: {
    // Tus reglas personalizadas
  },
};
