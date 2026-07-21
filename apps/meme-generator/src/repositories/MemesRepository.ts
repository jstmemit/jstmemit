import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import type { Template } from "@jstmemit/shared/models/Template";
import { analytics } from "@jstmemit/analytics";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import ms from "ms";

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
            return await satori(template.element(props), {
                width: template.width,
                height: template.height,
                fonts: this._fontsService.getFonts(),
                loadAdditionalAsset: async (code: string, segment: string): Promise<string> => {
                    if (code === "emoji") {
                        return this._cacheService.getOrSet(
                            `emoji:${segment}`,
                            (): Promise<string> => this._loadEmoji(segment),
                            ms("4w"),
                        );
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
     * Converts an SVG string into a PNG buffer
     * using Resvg library
     *
     * @param svg
     * @param width
     *
     * @author Kyrylo Maliuha
     */
    public convertIntoBuffer(svg: string, width: number): Buffer {
        return new Resvg(svg, {
            fitTo: { mode: "width", value: width },
        })
            .render()
            .asPng();
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
