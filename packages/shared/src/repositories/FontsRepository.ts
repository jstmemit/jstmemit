import type { IFontsRepository } from "../interfaces/IFontsRepository.ts";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));

export class FontsRepository implements IFontsRepository {
    public getMinecraft(): Buffer {
        return readFileSync(join(here, "../fonts/Minecraft.ttf"));
    }

    public getImpact(): Buffer {
        return readFileSync(join(here, "../fonts/Impact.ttf"));
    }

    public getComicSansRegular(): Buffer {
        return readFileSync(join(here, "../fonts/ComicSansRegular.ttf"));
    }

    public getComicSansBold(): Buffer {
        return readFileSync(join(here, "../fonts/ComicSansBold.ttf"));
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

    public getNotoSans(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSans-Regular.ttf"));
    }

    public getNotoSansArabic(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansArabic-Regular.ttf"));
    }

    public getNotoSansHebrew(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansHebrew-Regular.ttf"));
    }

    public getNotoSansThai(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansThai-Regular.ttf"));
    }

    public getNotoSansDevanagari(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansDevanagari-Regular.ttf"));
    }

    public getNotoSansBengali(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansBengali-Regular.ttf"));
    }

    public getNotoSansGeorgian(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansGeorgian-Regular.ttf"));
    }

    public getNotoSansArmenian(): Buffer {
        return readFileSync(join(here, "../fonts/NotoSansArmenian-Regular.ttf"));
    }
}
