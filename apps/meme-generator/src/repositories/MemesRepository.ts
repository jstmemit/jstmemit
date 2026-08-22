import { type ImageSource, render, renderAnimation } from "takumi-js";
import { type RegisteredFamily, Renderer } from "takumi-js/node";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { FontOptions } from "@jstmemit/shared/models/FontOptions";
import { analytics } from "@jstmemit/analytics";

export class MemesRepository implements IMemesRepository {
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _fontsService: IFontsService;
    private readonly _renderer: Renderer;
    private readonly _fontsReady: Promise<void>;
    private readonly _fetchCache: Map<string, Promise<ArrayBuffer>>;
    private readonly _sources: ImageSource[] = [];

    public constructor(templatesRepository: ITemplatesRepository, fontsService: IFontsService) {
        this._fontsService = fontsService;
        this._renderer = new Renderer({ cacheMaxBytes: 512 * 1024 * 1024 });
        this._fetchCache = new Map<string, Promise<ArrayBuffer>>();
        this._fontsReady = this._registerFonts();
        this._templatesRepository = templatesRepository;

        this._prefetch(this._templatesRepository.getAllImageUrls()).catch((error: unknown): void =>
            analytics.captureException(error),
        );
    }

    /**
     * Renders passed meme template using takumi and
     * returns a WebP buffer
     *
     * @param template
     * @param props
     * @param animated
     * @param turbo
     *
     * @author Kyrylo Maliuha
     */
    public async generateMeme(
        template: Template,
        props: TemplateProps,
        animated: boolean,
        turbo: boolean,
    ): Promise<Buffer<ArrayBufferLike> | Uint8Array<ArrayBufferLike>> {
        try {
            await this._fontsReady;

            if (animated) {
                const animationDuration: number = template.animationDuration ?? 1500;
                return await renderAnimation({
                    width: template.width,
                    height: template.height,
                    renderer: this._renderer,
                    format: "webp",
                    emoji: "twemoji",
                    images: {
                        fetchCache: this._fetchCache,
                        timeout: 25000,
                        maxBytes: 20 * 1024 * 1024,
                        sources: this._sources,
                    },
                    quality: turbo ? 35 : 45,
                    fps: 12,
                    scenes: [{ durationMs: animationDuration, node: template.element(props) }],
                });
            } else {
                return await render(template.element(props), {
                    width: template.width,
                    height: template.height,
                    renderer: this._renderer,
                    quality: turbo ? 30 : 55,
                    format: "webp",
                    emoji: "twemoji",
                    images: {
                        fetchCache: this._fetchCache,
                        timeout: 25000,
                        maxBytes: 20 * 1024 * 1024,
                        sources: this._sources,
                    },
                });
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
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
                .getAllFonts()
                .map((font: FontOptions): Promise<RegisteredFamily[]> => this._renderer.registerFont(font)),
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
        if (this._sources.some((source: ImageSource): boolean => source.src === url)) return;

        try {
            let fetchPromise: Promise<ArrayBuffer> | undefined = this._fetchCache.get(url);

            if (!fetchPromise) {
                fetchPromise = fetch(url).then((response: Response): Promise<ArrayBuffer> => {
                    if (!response.ok) throw new Error(`${response.url} ${response.status}`);
                    return response.arrayBuffer();
                });
                this._fetchCache.set(url, fetchPromise);
            }

            const data: ArrayBuffer = await fetchPromise;
            this._sources.push({ src: url, data, cache: "auto" });
        } catch (error) {
            this._fetchCache.delete(url);
            analytics.captureException(error);
        }
    }
}
