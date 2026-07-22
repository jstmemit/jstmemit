import type { FontOptions } from "#/models/FontOptions.ts";

export abstract class IFontsService {
    public abstract getFonts(cjk: boolean): FontOptions[];
    public abstract checkForCjk(texts: string[]): boolean;
}
