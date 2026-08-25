import { type RegisteredFamily, Renderer } from "takumi-js/node";
import type { ImageSource } from "takumi-js";
import { FontsService } from "@jstmemit/shared/services/FontsService";
import { FontsRepository } from "@jstmemit/shared/repositories/FontsRepository";
import type { FontOptions } from "@jstmemit/shared/models/FontOptions";
import { Agent, setGlobalDispatcher } from "undici";
import ms from "ms";
import { images } from "../data/variants.ts";

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
    __takumiSources?: ImageSource[];
    __takumiFontsLoaded?: boolean;
    __takumiPrefetchStarted?: boolean;
};

export const renderer: Renderer =
    globalRef.__takumiRenderer ?? (globalRef.__takumiRenderer = new Renderer({ cacheMaxBytes: 1024 * 1024 * 1024 }));

export const fetchCache: Map<string, Promise<ArrayBuffer>> = globalRef.__takumiFetchCache ??
(globalRef.__takumiFetchCache = new Map<string, Promise<ArrayBuffer>>());

export const sources: ImageSource[] = globalRef.__takumiSources ?? (globalRef.__takumiSources = []);

if (!globalRef.__takumiFontsLoaded) {
    await Promise.all(
        fontsService.getFonts().map((font: FontOptions): Promise<RegisteredFamily[]> => renderer.registerFont(font)),
    );

    globalRef.__takumiFontsLoaded = true;
}

if (!globalRef.__takumiPrefetchStarted) {
    globalRef.__takumiPrefetchStarted = true;

    void (async (): Promise<void> => {
        for (const url of images) {
            if (sources.some((source: ImageSource): boolean => source.src === url)) continue;

            try {
                let fetchPromise: Promise<ArrayBuffer> | undefined = fetchCache.get(url);

                if (!fetchPromise) {
                    fetchPromise = fetch(url).then((response: Response): Promise<ArrayBuffer> => {
                        if (!response.ok) throw new Error(`${response.url} ${response.status}`);
                        return response.arrayBuffer();
                    });
                    fetchCache.set(url, fetchPromise);
                }

                const data: ArrayBuffer = await fetchPromise;
                sources.push({ src: url, data, cache: "auto" });
            } catch (error) {
                fetchCache.delete(url);
                console.error(error);
            }
        }
    })();
}
