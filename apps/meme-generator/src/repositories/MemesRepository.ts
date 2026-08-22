import { render, renderAnimation } from "takumi-js";
import { Renderer } from "takumi-js/node";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";

export class MemesRepository implements IMemesRepository {
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _fontsService: IFontsService;
    private readonly _renderer: Renderer;
    private readonly _fontsReady: Promise<void>;
    private readonly _fetchCache: Map<string, Promise<ArrayBuffer>>;

    public constructor(templatesRepository: ITemplatesRepository, fontsService: IFontsService) {
        this._fontsService = fontsService;
        this._renderer = new Renderer({ cacheMaxBytes: 512 * 1024 * 1024 });
        this._fetchCache = new Map<string, Promise<ArrayBuffer>>();
        this._fontsReady = this._registerFonts();
        this._templatesRepository = templatesRepository;

        this._prefetch(this._templatesRepository.getAllImageUrls());
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
                    images: { fetchCache: this._fetchCache, timeout: 12000, maxBytes: 20 * 1024 * 1024 },
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
                    images: { fetchCache: this._fetchCache, timeout: 12000, maxBytes: 20 * 1024 * 1024 },
                });
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    private async _registerFonts(): Promise<void> {
        await Promise.all(this._fontsService.getAllFonts().map((font) => this._renderer.registerFont(font)));
    }

    private _prefetch(urls: string[]): void {
        for (const url of urls) {
            if (this._fetchCache.has(url)) continue;

            const data = fetch(url).then((res) => {
                if (!res.ok) throw new Error(`${url}: HTTP ${res.status}`);
                return res.arrayBuffer();
            });

            data.catch(() => this._fetchCache.delete(url));
            this._fetchCache.set(url, data);
        }
    }
}
