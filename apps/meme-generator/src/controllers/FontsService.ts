import type { IFontsRepository } from "#/interfaces/IFontsRepository.ts";
import type { FontOptions } from "@jstmemit/shared/models/FontOptions";
import type { IFontsService } from "#/interfaces/IFontsService.ts";

export class FontsService implements IFontsService {
    private readonly _fontsRepository: IFontsRepository;

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
        return [
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
        ];
    }
}
