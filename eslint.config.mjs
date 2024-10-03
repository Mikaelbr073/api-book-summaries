import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
    },
    // Adiciona aqui o extends dentro de um objeto de configuração
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
