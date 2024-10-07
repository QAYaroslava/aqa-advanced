import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { 
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: globals.node 
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "error",
      "space-in-parents": ["error", "never"]
    }
  }
];