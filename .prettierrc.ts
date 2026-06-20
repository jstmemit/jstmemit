import { type Config } from "prettier";

const config: Config = {
    trailingComma: "all",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    bracketSpacing: true,
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

export default config;
