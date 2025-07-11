import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/", "node_modules/", ".pnp.*"],
  },
  {
    files: ["**/*.ts"],
    rules: {
      "no-console": ["error", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
);
