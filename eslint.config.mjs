import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig} from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
        plugins: {js},
        extends: [
            'airbnb-base',
            'airbnb-typescript/base'
        ],
        parserOptions: {
            project: './tsconfig.json'
        },
        languageOptions: {globals: globals.node}
    },
    tseslint.configs.recommended,
]);
