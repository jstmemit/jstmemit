// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";
import compress from "astro-compress";
import compressor from "astro-compressor";
import critters from "astro-critters";
import { svgoOptimizer } from "astro/config";

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

    prefetch: {
        defaultStrategy: "hover",
        prefetchAll: true,
    },

    experimental: {
        clientPrerender: true,
        svgOptimizer: svgoOptimizer(),
    },

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
        compressor(),
    ],
});
