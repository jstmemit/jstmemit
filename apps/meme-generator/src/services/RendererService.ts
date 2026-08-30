import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import { Renderer } from "takumi-js/node";
import type { ImageSource } from "takumi-js";
import { analytics } from "@jstmemit/analytics";
import type { RegisteredFamily } from "@takumi-rs/core";
import type { FontOptions } from "@jstmemit/shared/models/FontOptions";
import type { IRendererService } from "#/interfaces/IRendererService.ts";

export class RendererService implements IRendererService {
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _fontsService: IFontsService;
    public readonly fetchCache: Map<string, Promise<ArrayBuffer>>;
    public readonly sources: ImageSource[] = [];
    public readonly fontsReady: Promise<void>;
    public readonly renderer: Renderer = new Renderer({ cacheMaxBytes: 1024 * 1024 * 1024 });

    public constructor(fontsService: IFontsService, templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
        this._fontsService = fontsService;

        this.fetchCache = new Map<string, Promise<ArrayBuffer>>();
        this.fontsReady = this._registerFonts();

        this._prefetch(this._templatesRepository.getAllImageUrls()).catch((error: unknown): void =>
            analytics.captureException(error),
        );
    }

    /**
     * Registers all fonts into the renderer
     *
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _registerFonts(): Promise<void> {
        await Promise.all(
            this._fontsService
                .getFonts()
                .map((font: FontOptions): Promise<RegisteredFamily[]> => this.renderer.registerFont(font)),
        );
    }

    /**
     * Prefetches images that are used in meme templates
     * with a delay of 150ms
     *
     * @param urls
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _prefetch(urls: string[]): Promise<void> {
        for (const url of urls) {
            await this._addSource(url);
            await new Promise<void>((resolve: (value: void | Promise<void>) => void): NodeJS.Timeout =>
                setTimeout(resolve, 150),
            );
        }
    }

    /**
     * Fetches image from the passed URL and saves
     * buffer into fetchCache and sources
     *
     * @param url
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _addSource(url: string): Promise<void> {
        if (this.sources.some((source: ImageSource): boolean => source.src === url)) return;

        try {
            let fetchPromise: Promise<ArrayBuffer> | undefined = this.fetchCache.get(url);

            if (!fetchPromise) {
                fetchPromise = fetch(url).then((response: Response): Promise<ArrayBuffer> => {
                    if (!response.ok) throw new Error(`${response.url} ${response.status}`);
                    return response.arrayBuffer();
                });
                this.fetchCache.set(url, fetchPromise);
            }

            const data: ArrayBuffer = await fetchPromise;
            this.sources.push({ src: url, data, cache: "auto" });
        } catch (error) {
            this.fetchCache.delete(url);
            analytics.captureException(error);
        }
    }
}
