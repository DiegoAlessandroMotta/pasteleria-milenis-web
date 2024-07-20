import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },

      },
      rules: {
        'react/react-in-jsx-scope': 'off'
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];