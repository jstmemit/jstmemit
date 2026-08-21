import { Renderer } from "takumi-js/node";
import { FontsService } from "@jstmemit/shared/services/FontsService";
import { FontsRepository } from "@jstmemit/shared/repositories/FontsRepository";
import { texts } from "../data/variants.ts";
import type { FontOptions } from "@jstmemit/shared/models/FontOptions";

const fontsRepository = new FontsRepository();
const fontsService = new FontsService(fontsRepository);

const globalRef = globalThis as unknown as {
    __takumiRenderer?: Renderer;
    __takumiFetchCache?: Map<string, Promise<ArrayBuffer>>;
    __takumiFontsLoaded?: boolean;
};

export const renderer: Renderer =
    globalRef.__takumiRenderer ?? (globalRef.__takumiRenderer = new Renderer({ cacheMaxBytes: 128 * 1024 * 1024 }));

export const fetchCache: Map<string, Promise<ArrayBuffer>> = globalRef.__takumiFetchCache ??
(globalRef.__takumiFetchCache = new Map<string, Promise<ArrayBuffer>>());

if (!globalRef.__takumiFontsLoaded) {
    const defaultFonts: FontOptions[] = fontsService.getFonts();
    const fallback = fontsService.getFontsFor(texts);
    const fonts: FontOptions[] = [...defaultFonts, ...(fallback?.fonts || [])];

    for (const font of fonts) {
        await renderer.registerFont(font);
    }

    globalRef.__takumiFontsLoaded = true;
}
