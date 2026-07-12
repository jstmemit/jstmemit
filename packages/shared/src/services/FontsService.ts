import type { IFontsRepository } from "#/interfaces/IFontsRepository.ts";
import type { FontOptions } from "#/models/FontOptions.ts";
import type { IFontsService } from "../interfaces/IFontsService.ts";

export class FontsService implements IFontsService {
    private readonly _fontsRepository: IFontsRepository;
    private _fonts?: FontOptions[];

    public constructor(fontsRepository: IFontsRepository) {
        this._fontsRepository = fontsRepository;
    }

    /**
     * Constructs fonts array for satori
     *
     * @returns FontOptions[]
     *
     * @author Kyrylo Maliuha
     */
    public getFonts(): FontOptions[] {
        this._fonts ||= [
            {
                name: "Impact",
                data: this._fontsRepository.getImpact(),
                weight: 800,
                style: "normal",
            },
            {
                name: "Comic Sans MS",
                data: this._fontsRepository.getComicSans(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans Math",
                data: this._fontsRepository.getNotoSansMath(),
                weight: 400,
                style: "normal",
            },
            {
                name: "Noto Sans SC",
                data: this._fontsRepository.getNotoSansSc(),
                weight: 500,
                style: "normal",
            },
            {
                name: "Noto Sans TC",
                data: this._fontsRepository.getNotoSansTc(),
                weight: 500,
                style: "normal",
            },
            {
                name: "Noto Sans HK",
                data: this._fontsRepository.getNotoSansHk(),
                weight: 500,
                style: "normal",
            },
            {
                name: "Noto Sans JP",
                data: this._fontsRepository.getNotoSansJp(),
                weight: 500,
                style: "normal",
            },
            {
                name: "Noto Sans KR",
                data: this._fontsRepository.getNotoSansKr(),
                weight: 500,
                style: "normal",
            },
        ];
        return this._fonts;
    }
}
