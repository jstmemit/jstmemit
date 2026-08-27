// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import basicSsl from "@vitejs/plugin-basic-ssl";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss(), basicSsl()],
    },

    server: {
        timeout: 120000,
    },

    adapter: node({
        mode: "standalone",
    }),
});
