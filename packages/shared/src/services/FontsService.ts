import type { IFontsRepository } from "#/interfaces/IFontsRepository.ts";
import type { FontOptions } from "#/models/FontOptions.ts";
import type { IFontsService } from "../interfaces/IFontsService.ts";

export class FontsService implements IFontsService {
    private readonly _fonts: FontOptions[];

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
            {
                name: "Impact",
                data: fontsRepository.getImpact(),
                weight: 700,
                style: "normal",
                generic: "sans-serif",
            },
            {
                name: "Minecraft",
                data: fontsRepository.getMinecraft(),
                weight: 700,
                style: "normal",
                generic: "serif",
            },
            {
                name: "OpenDyslexic",
                data: fontsRepository.getOpenDyslexic(),
                weight: 700,
                style: "normal",
                generic: "serif",
            },
            { name: "Noto Sans SC", data: fontsRepository.getNotoSansSc(), weight: 500, style: "normal" },
            { name: "Noto Sans TC", data: fontsRepository.getNotoSansTc(), weight: 500, style: "normal" },
            { name: "Noto Sans HK", data: fontsRepository.getNotoSansHk(), weight: 500, style: "normal" },
            { name: "Noto Sans JP", data: fontsRepository.getNotoSansJp(), weight: 500, style: "normal" },
            { name: "Noto Sans KR", data: fontsRepository.getNotoSansKr(), weight: 500, style: "normal" },
            {
                name: "Noto Sans Arabic",
                data: fontsRepository.getNotoSansArabic(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans Hebrew",
                data: fontsRepository.getNotoSansHebrew(),
                weight: 400,
                style: "normal",
            },
            { name: "Noto Sans Thai", data: fontsRepository.getNotoSansThai(), weight: 400, style: "normal" },
            {
                name: "Noto Sans Devanagari",
                data: fontsRepository.getNotoSansDevanagari(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans Bengali",
                data: fontsRepository.getNotoSansBengali(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans Georgian",
                data: fontsRepository.getNotoSansGeorgian(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans Armenian",
                data: fontsRepository.getNotoSansArmenian(),
                weight: 400,
                style: "normal",
            },
            { name: "Noto Sans", data: fontsRepository.getNotoSans(), weight: 400, style: "normal" },
        ];
    }

    /**
     * Gets all fonts
     *
     * @author Kyrylo Maliuha
     */
    public getFonts(): FontOptions[] {
        return this._fonts;
    }
}
