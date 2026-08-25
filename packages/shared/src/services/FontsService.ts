import type { IFontsRepository } from "#/interfaces/IFontsRepository.ts";
import type { FontOptions } from "#/models/FontOptions.ts";
import type { IFontsService } from "../interfaces/IFontsService.ts";
import _ from "lodash";

export class FontsService implements IFontsService {
    private readonly _displayFonts: FontOptions[];
    private readonly _fallbackFonts: FontOptions[];

    public constructor(fontsRepository: IFontsRepository) {
        this._displayFonts = [
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
            {
                name: "Impact",
                data: fontsRepository.getImpact(),
                weight: 700,
                style: "normal",
                generic: "sans-serif",
            },
            {
                name: "Source Han",
                data: fontsRepository.getSourceHan(),
                weight: 700,
                style: "normal",
                generic: "sans-serif",
            },
            {
                name: "KeinannPOP",
                data: fontsRepository.getKeinannPop(),
                weight: 700,
                style: "normal",
                generic: "sans-serif",
            },
            {
                name: "Rubik Hebrew",
                data: fontsRepository.getRubikHebrew(),
                weight: 700,
                style: "normal",
                generic: "sans-serif",
            },
            {
                name: "Teko",
                data: fontsRepository.getTeko(),
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
                name: "Cubic",
                data: fontsRepository.getCubic(),
                weight: 700,
                style: "normal",
                generic: "serif",
            },
            {
                name: "Misaki",
                data: fontsRepository.getMisaki(),
                weight: 700,
                style: "normal",
                generic: "serif",
            },
            {
                name: "Pixel",
                data: fontsRepository.getPixel(),
                weight: 700,
                style: "normal",
                generic: "serif",
            },
            {
                name: "Jtype",
                data: fontsRepository.getJtype(),
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
        ];

        this._fallbackFonts = [
            {
                name: "Noto Sans Math",
                data: fontsRepository.getNotoSansMath(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans SC",
                data: fontsRepository.getNotoSansSc(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans TC",
                data: fontsRepository.getNotoSansTc(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans HK",
                data: fontsRepository.getNotoSansHk(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans JP",
                data: fontsRepository.getNotoSansJp(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans KR",
                data: fontsRepository.getNotoSansKr(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Arabic",
                data: fontsRepository.getNotoSansArabic(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Hebrew",
                data: fontsRepository.getNotoSansHebrew(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Thai",
                data: fontsRepository.getNotoSansThai(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Devanagari",
                data: fontsRepository.getNotoSansDevanagari(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Bengali",
                data: fontsRepository.getNotoSansBengali(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Georgian",
                data: fontsRepository.getNotoSansGeorgian(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans Armenian",
                data: fontsRepository.getNotoSansArmenian(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Noto Sans",
                data: fontsRepository.getNotoSans(),
                weight: 700,
                style: "normal",
            },
        ];
    }

    /**
     * Gets all fonts
     *
     * @author Kyrylo Maliuha
     */
    public getFonts(): FontOptions[] {
        return [...this._displayFonts, ...this._fallbackFonts];
    }

    /**
     * Gets list of font families for the passed setting
     *
     * @author Kyrylo Maliuha
     */
    public getFontFamiliesForSetting(setting: string): string {
        const fallbackFonts: string[] = this._fallbackFonts.map((font: FontOptions): string => font.name);

        switch (setting) {
            case "Comic Sans MS":
                return ["Comic Sans MS", ...fallbackFonts].toString();

            case "Impact":
                return ["Impact", "Source Han", "KeinannPOP", "Rubik Hebrew", "Teko", ...fallbackFonts].toString();

            case "Minecraft":
                return ["Minecraft", "Cubic", "Misaki", "Pixel", "Jtype", ...fallbackFonts].toString();

            case "OpenDyslexic":
                return [
                    "OpenDyslexic",
                    "Impact",
                    "Source Han",
                    "KeinannPOP",
                    "Rubik Hebrew",
                    "Teko",
                    ...fallbackFonts,
                ].toString();

            default:
                return this.getFontFamiliesForSetting(
                    _.sample(["Comic Sans MS", "Impact", "Minecraft", "OpenDyslexic"]),
                );
        }
    }
}
