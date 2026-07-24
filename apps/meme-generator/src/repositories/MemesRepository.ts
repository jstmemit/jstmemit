import { render, renderAnimation } from "takumi-js";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import type { Template } from "@jstmemit/shared/models/Template";

export class MemesRepository implements IMemesRepository {
    private readonly _fontsService: IFontsService;

    public constructor(fontsService: IFontsService) {
        this._fontsService = fontsService;
    }

    /**
     * Renders passed meme template using takumi and
     * returns a WebP buffer
     *
     * @param template
     * @param props
     * @param animated
     *
     * @author Kyrylo Maliuha
     */
    public async generateMeme(
        template: Template,
        props: TemplateProps,
        animated: boolean,
    ): Promise<Buffer<ArrayBufferLike> | Uint8Array<ArrayBufferLike>> {
        try {
            const hasCjk: boolean = this._fontsService.checkForCjk(props.texts);

            if (animated) {
                return await renderAnimation({
                    width: template.width,
                    height: template.height,
                    fonts: this._fontsService.getFonts(hasCjk),
                    fontFamilies: ["Comic Sans MS"],
                    fps: 30,
                    format: "webp",
                    scenes: [{ durationMs: 10000, node: template.element(props) }],
                });
            } else {
                return await render(template.element(props), {
                    width: template.width,
                    height: template.height,
                    fonts: this._fontsService.getFonts(hasCjk),
                    fontFamilies: ["Comic Sans MS"],
                    dithering: "floyd-steinberg",
                });
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
