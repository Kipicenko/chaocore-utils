import globals from "globals";
import js from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import tsParser from "@typescript-eslint/parser";

export default [
    js.configs.recommended,
    eslintPluginPrettierRecommended,
    {
        ignores: ["dist/", "node_modules/"],
    },
    {
        files: ["src/**/*.ts"],
        rules: {
            "no-console": "error",
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
