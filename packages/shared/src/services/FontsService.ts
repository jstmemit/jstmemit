import type { IFontsRepository } from "#/interfaces/IFontsRepository.ts";
import type { FontOptions } from "#/models/FontOptions.ts";
import type { IFontsService } from "../interfaces/IFontsService.ts";

export class FontsService implements IFontsService {
    private readonly _fonts: FontOptions[];
    private readonly _fontsWithCjk: FontOptions[];

    public constructor(fontsRepository: IFontsRepository) {
        this._fonts = [
            {
                name: "Comic Sans MS",
                data: fontsRepository.getComicSansRegular(),
                weight: 400,
                style: "normal",
                generic: "sans-serif",
            },
            {
                name: "Comic Sans MS",
                data: fontsRepository.getComicSansBold(),
                weight: 700,
                style: "normal",
                generic: "sans-serif",
            },
            { name: "Noto Sans Math", data: fontsRepository.getNotoSansMath(), weight: 400, style: "normal" },
        ];

        this._fontsWithCjk = [
            ...this._fonts,
            { name: "Noto Sans SC", data: fontsRepository.getNotoSansSc(), weight: 500, style: "normal" },
            { name: "Noto Sans TC", data: fontsRepository.getNotoSansTc(), weight: 500, style: "normal" },
            { name: "Noto Sans HK", data: fontsRepository.getNotoSansHk(), weight: 500, style: "normal" },
            { name: "Noto Sans JP", data: fontsRepository.getNotoSansJp(), weight: 500, style: "normal" },
            { name: "Noto Sans KR", data: fontsRepository.getNotoSansKr(), weight: 500, style: "normal" },
        ];
    }

    /**
     * Constructs fonts array for satori
     *
     * @param cjk adds Chinese, Japanese and Korean fonts
     * @returns FontOptions[]
     *
     * @author Kyrylo Maliuha
     */
    public getFonts(cjk: boolean = false): FontOptions[] {
        if (cjk) {
            return this._fontsWithCjk;
        } else {
            return this._fonts;
        }
    }

    /**
     * Checks if any of the strings in the array have
     * Chinese, Japanese or Korean characters
     *
     * @param texts
     *
     * @author Kyrylo Maliuha
     */
    public checkForCjk(texts: string[]): boolean {
        return texts.some((text: string): boolean =>
            /[\u3000-\u9fff\uf900-\ufaff\uac00-\ud7af\uff65-\uff9f]/.test(text),
        );
    }
}
