import globals from "globals";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

export default tseslint.config([
    {
        ignores: ["**/dist/**", "**/node_modules/**", "eslint.config.mjs"],
    },

    ...compat.extends("airbnb-base", "airbnb-typescript/base"),

    {
        files: ["**/*.{js,mjs,cjs,ts}"],
        languageOptions: {
            globals: globals.node,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "import/prefer-default-export": "off",
            "import/no-extraneous-dependencies": "off",
            "class-methods-use-this": "off",
            "max-len": "off",
            "no-useless-return": "off",
            "no-underscore-dangle": "off",
            "no-plusplus": "off",
            "no-await-in-loop": "off",
            "import/extensions": "off",
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
]);