import type { Template } from "../models/Template.ts";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { IMemesRepository } from "../interfaces/IMemesRepository.ts";
import type { TemplateProps } from "../models/TemplateProps.ts";
import type { IFontsService } from "../interfaces/IFontsService.ts";

export class MemesRepository implements IMemesRepository {
    private readonly _fontsService: IFontsService;

    public constructor(fontsService: IFontsService) {
        this._fontsService = fontsService;
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
    public async generateMeme(
        template: Template,
        props: TemplateProps,
    ): Promise<string | undefined> {
        try {
            return await satori(template.element(props), {
                width: template.width,
                height: template.height,
                fonts: this._fontsService.getFonts(),
            });
        } catch (error) {
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
}
