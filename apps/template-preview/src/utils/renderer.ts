import { Renderer } from "takumi-js/node";

const globalRef = globalThis as unknown as {
    __takumiRenderer?: Renderer;
    __takumiFetchCache?: Map<string, Promise<ArrayBuffer>>;
};

export const renderer: Renderer =
    globalRef.__takumiRenderer ?? (globalRef.__takumiRenderer = new Renderer({ cacheMaxBytes: 128 * 1024 * 1024 }));

export const fetchCache: Map<string, Promise<ArrayBuffer>> = globalRef.__takumiFetchCache ??
(globalRef.__takumiFetchCache = new Map<string, Promise<ArrayBuffer>>());
