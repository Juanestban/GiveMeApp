module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "multiline-ternary": "off",
    "no-unused-vars": "off",
    "react/display-name": "off",
    "react/jsx-key": "off",
    "no-return-assign": "off",
    "no-unused-expressions": "off",
    "space-before-function-paren": "off",
  },
}
