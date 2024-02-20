import globals from "globals";
import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tsParser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        ignores: ["dist/", "node_modules/"],
    },
    {
        files: ["src/**/*.ts"],
        rules: {
            "no-console": "error",
            "@typescript-eslint/no-explicit-any": "off",
        },
        languageOptions: {
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
];
