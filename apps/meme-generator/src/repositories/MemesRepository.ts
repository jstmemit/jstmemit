import { render } from "takumi-js";
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
     *
     * @author Kyrylo Maliuha
     */
    public async generateMeme(
        template: Template,
        props: TemplateProps,
    ): Promise<Buffer<ArrayBufferLike> | Uint8Array<ArrayBufferLike>> {
        const hasCjk: boolean = this._fontsService.checkForCjk(props.texts);

        return await render(template.element(props), {
            width: template.width,
            height: template.height,
            fonts: this._fontsService.getFonts(hasCjk),
        });
    }
}
