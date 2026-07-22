import satori from "satori";
import type { RenderedImage } from "@resvg/resvg-js";
import { renderAsync } from "@resvg/resvg-js";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import type { Template } from "@jstmemit/shared/models/Template";
import { analytics } from "@jstmemit/analytics";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import ms from "ms";
import sharp from "sharp";

export class MemesRepository implements IMemesRepository {
    private readonly _twemojiBaseUrl: string;
    private readonly _fontsService: IFontsService;
    private readonly _cacheService: ICacheService;

    public constructor(fontsService: IFontsService, cacheService: ICacheService) {
        this._twemojiBaseUrl = "https://cdn.jsdelivr.net/gh/jdecked/twemoji@latest/assets/svg";
        this._fontsService = fontsService;
        this._cacheService = cacheService;
    }

    /**
     * Renders passed meme template using satori and
     * returns an SVG string
     *
     * @param template
     * @param props
     *
     * @author Kyrylo Maliuha
     */
    public async generateMeme(template: Template, props: TemplateProps): Promise<string | undefined> {
        try {
            const hasCjk: boolean = this._fontsService.checkForCjk(props.texts);

            return await satori(template.element(props), {
                width: template.width,
                height: template.height,
                fonts: this._fontsService.getFonts(hasCjk),
                loadAdditionalAsset: async (code: string, segment: string): Promise<string> => {
                    if (code === "emoji") {
                        const cached: string | undefined = await this._cacheService.get<string>(`emoji:${segment}`);
                        if (cached !== undefined) return cached;

                        const emoji: string = await this._loadEmoji(segment);
                        if (emoji !== "") {
                            await this._cacheService.set(`emoji:${segment}`, emoji, ms("4w"));
                        }
                        return emoji;
                    }

                    return "";
                },
            });
        } catch (error) {
            analytics.captureException(error);
            console.error("Error generating meme:", error);
            return undefined;
        }
    }

    /**
     * Converts an SVG string into a .webp buffer
     * using Resvg and sharp libraries
     *
     * @param svg
     * @param width
     *
     * @author Kyrylo Maliuha
     */
    public async convertIntoBuffer(svg: string, width: number): Promise<Buffer> {
        const rendered: RenderedImage = await renderAsync(svg, {
            fitTo: { mode: "width", value: width },
            font: { loadSystemFonts: false },
            imageRendering: 1,
        });

        return sharp(rendered.pixels, {
            raw: { width: rendered.width, height: rendered.height, channels: 4 },
        })
            .webp({ quality: 82, effort: 2 })
            .toBuffer();
    }

    private async _loadEmoji(segment: string): Promise<string> {
        try {
            const response: Response = await fetch(`${this._twemojiBaseUrl}/${this._getEmojiCode(segment)}.svg`);

            if (!response.ok) {
                return "";
            }

            return `data:image/svg+xml;base64,${Buffer.from(await response.text()).toString("base64")}`;
        } catch (error) {
            analytics.captureException(error);
            return "";
        }
    }

    private _getEmojiCode(segment: string): string {
        const codePoints: string[] = [...segment].map((char: string): string => char.codePointAt(0)!.toString(16));

        if (!codePoints.includes("200d")) {
            return codePoints.filter((point: string): boolean => point !== "fe0f").join("-");
        }

        return codePoints.join("-");
    }
}
