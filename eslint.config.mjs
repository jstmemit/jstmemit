import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    { ignores: ["**/dist/**", "**/node_modules/**", "eslint.config.mjs"] },
    ...tseslint.configs.recommendedTypeChecked,
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
            "@typescript-eslint/consistent-type-imports": "error",
        },
    },
];