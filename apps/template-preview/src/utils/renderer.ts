import { Renderer } from "takumi-js/node";
import { FontsService } from "@jstmemit/shared/services/FontsService";
import { FontsRepository } from "@jstmemit/shared/repositories/FontsRepository";

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
    for (const font of fontsService.getFonts()) {
        await renderer.registerFont(font);
    }
    globalRef.__takumiFontsLoaded = true;
}
