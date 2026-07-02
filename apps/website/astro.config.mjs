// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import compress from "astro-compress";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    adapter: node({
        mode: "standalone",
    }),

    integrations: [
        critters(),
        compress({
            CSS: false,
        }),
    ],
});
