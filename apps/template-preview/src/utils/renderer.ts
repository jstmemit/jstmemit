import { type RegisteredFamily, Renderer } from "takumi-js/node";
import { FontsService } from "@jstmemit/shared/services/FontsService";
import { FontsRepository } from "@jstmemit/shared/repositories/FontsRepository";
import type { FontOptions } from "@jstmemit/shared/models/FontOptions";
import { Agent, setGlobalDispatcher } from "undici";
import ms from "ms";

setGlobalDispatcher(
    new Agent({
        connectTimeout: ms("1m"),
        connections: 256,
    }),
);

const fontsRepository = new FontsRepository();
const fontsService = new FontsService(fontsRepository);

const globalRef = globalThis as unknown as {
    __takumiRenderer?: Renderer;
    __takumiFetchCache?: Map<string, Promise<ArrayBuffer>>;
    __takumiFontsLoaded?: boolean;
};

export const renderer: Renderer =
    globalRef.__takumiRenderer ?? (globalRef.__takumiRenderer = new Renderer({ cacheMaxBytes: 1024 * 1024 * 1024 }));

export const fetchCache: Map<string, Promise<ArrayBuffer>> = globalRef.__takumiFetchCache ??
(globalRef.__takumiFetchCache = new Map<string, Promise<ArrayBuffer>>());

if (!globalRef.__takumiFontsLoaded) {
    await Promise.all(
        fontsService.getFonts().map((font: FontOptions): Promise<RegisteredFamily[]> => renderer.registerFont(font)),
    );

    globalRef.__takumiFontsLoaded = true;
}
