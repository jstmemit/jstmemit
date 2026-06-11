import type { IFontsRepository } from "../interfaces/IFontsRepository.ts";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here: string = dirname(fileURLToPath(import.meta.url));

export class FontsRepository implements IFontsRepository {
    public getImpact(): Buffer {
        return readFileSync(join(here, "../data/fonts/Impact.ttf"));
    }
}
