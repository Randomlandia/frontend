module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/jsx-runtime"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    'react/prop-types': 'off', // Desactiva la regla de prop-types
    'react/no-unknown-property': 'warn', // Cambia a advertencia
    'no-unused-vars': 'warn', // Cambia a advertencia
    'react/jsx-key': 'warn', // Cambia a advertencia
    'react/no-unescaped-entities': 'off',
    'react/jsx-no-target-blank': 'off',
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
