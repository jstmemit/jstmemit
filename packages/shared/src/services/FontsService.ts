import type { IFontsRepository } from "#/interfaces/IFontsRepository.ts";
import type { FontOptions } from "#/models/FontOptions.ts";
import type { IFontsService } from "../interfaces/IFontsService.ts";

export class FontsService implements IFontsService {
    private readonly _fonts: FontOptions[];
    private readonly _fallbacks: { range: RegExp; fonts: FontOptions[] }[];

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

        this._fallbacks = [
            {
                range: /[\u3000-\u9fff\uf900-\ufaff\uac00-\ud7af\uff65-\uff9f]/,
                fonts: [
                    { name: "Noto Sans SC", data: fontsRepository.getNotoSansSc(), weight: 500, style: "normal" },
                    { name: "Noto Sans TC", data: fontsRepository.getNotoSansTc(), weight: 500, style: "normal" },
                    { name: "Noto Sans HK", data: fontsRepository.getNotoSansHk(), weight: 500, style: "normal" },
                    { name: "Noto Sans JP", data: fontsRepository.getNotoSansJp(), weight: 500, style: "normal" },
                    { name: "Noto Sans KR", data: fontsRepository.getNotoSansKr(), weight: 500, style: "normal" },
                ],
            },
            {
                range: /[\u0600-\u06ff\u0750-\u077f\ufb50-\ufdff\ufe70-\ufeff]/,
                fonts: [
                    {
                        name: "Noto Sans Arabic",
                        data: fontsRepository.getNotoSansArabic(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            },
            {
                range: /[\u0590-\u05ff\ufb1d-\ufb4f]/,
                fonts: [
                    {
                        name: "Noto Sans Hebrew",
                        data: fontsRepository.getNotoSansHebrew(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            },
            {
                range: /[\u0e00-\u0e7f]/,
                fonts: [
                    { name: "Noto Sans Thai", data: fontsRepository.getNotoSansThai(), weight: 400, style: "normal" },
                ],
            },
            {
                range: /[\u0900-\u097f]/,
                fonts: [
                    {
                        name: "Noto Sans Devanagari",
                        data: fontsRepository.getNotoSansDevanagari(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            },
            {
                range: /[\u0980-\u09ff]/,
                fonts: [
                    {
                        name: "Noto Sans Bengali",
                        data: fontsRepository.getNotoSansBengali(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            },
            {
                range: /[\u10a0-\u10ff\u1c90-\u1cbf]/,
                fonts: [
                    {
                        name: "Noto Sans Georgian",
                        data: fontsRepository.getNotoSansGeorgian(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            },
            {
                range: /[\u0530-\u058f\ufb13-\ufb17]/,
                fonts: [
                    {
                        name: "Noto Sans Armenian",
                        data: fontsRepository.getNotoSansArmenian(),
                        weight: 400,
                        style: "normal",
                    },
                ],
            },
            {
                range: /[\u1ea0-\u1eff\u01a0\u01a1\u01af\u01b0]/,
                fonts: [{ name: "Noto Sans", data: fontsRepository.getNotoSans(), weight: 400, style: "normal" }],
            },
        ];
    }

    /**
     * Checks if any of the strings in the array have
     * characters that require a fallback font
     *
     * @param texts
     *
     * @author Kyrylo Maliuha
     */
    public getFontsFor(texts: string[]): { fonts?: FontOptions[]; fontFamilies: string[] } {
        const joined: string = texts.join("");
        const extra: FontOptions[] = this._fallbacks
            .filter(({ range }): boolean => range.test(joined))
            .flatMap(({ fonts }): FontOptions[] => fonts);

        if (extra.length === 0) {
            return { fontFamilies: this._fonts.map((font: FontOptions): string => font.name) };
        }

        return {
            fonts: [...this._fonts, ...extra],
            fontFamilies: [...this._fonts, ...extra].map((font: FontOptions): string => font.name),
        };
    }

    /**
     * Comic Sans and Noto Sans Math for latin and cyrillic memes
     *
     * @author Kyrylo Maliuha
     */
    public getFonts(): FontOptions[] {
        return this._fonts;
    }

    public getAllFonts(): FontOptions[] {
        const fallbacks: FontOptions[] = this._fallbacks.flatMap(({ fonts }): FontOptions[] => fonts);

        return [...this._fonts, ...fallbacks];
    }
}
