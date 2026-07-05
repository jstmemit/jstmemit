// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import compress from "astro-compress";
import critters from "astro-critters";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import og from "astro-og";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
    site: "https://jstmemit.com",
    vite: {
        plugins: [tailwindcss()],
    },

    adapter: node({
        mode: "standalone",
    }),

    integrations: [
        critters(),
        sitemap(),
        favicons(),
        og(),
        robotsTxt({
            host: true,
        }),
        compress({
            CSS: false,
        }),
    ],
});
