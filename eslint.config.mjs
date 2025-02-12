import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    languageOptions: {
      globals: globals.browser
    },
    rules: {
      "no-console": "off", // Allow console statements
    },
  },
  pluginJs.configs.recommended,
];
