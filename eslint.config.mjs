import globals from "globals";
import tseslint from "typescript-eslint";
import {FlatCompat} from "@eslint/eslintrc";

const compat = new FlatCompat();

export default tseslint.config([
    {
        ignores: ["eslint.config.mjs"]
    },
    ...compat.extends('airbnb-base', 'airbnb-typescript/base'),
    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        rules: {
            "import/prefer-default-export": "off",
            "import/no-extraneous-dependencies": "off"
        }
    }
]);