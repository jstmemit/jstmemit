import type { IFontsRepository } from "../interfaces/IFontsRepository.ts";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));

export class FontsRepository implements IFontsRepository {
    public getImpact(): Buffer {
        return readFileSync(join(here, "../fonts/Impact.ttf"));
    }

    public getComicSans(): Buffer {
        return readFileSync(join(here, "../fonts/ComicSans.ttf"));
    }

    public getNotoSansMath(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansMath.ttf"));
    }

    public getNotoSansHk(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansHK.otf"));
    }

    public getNotoSansJp(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansJP.otf"));
    }

    public getNotoSansKr(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansKR.otf"));
    }

    public getNotoSansSc(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansSC.otf"));
    }

    public getNotoSansTc(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansTC.otf"));
    }
}
