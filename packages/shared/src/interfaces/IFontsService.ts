import type { FontOptions } from "#/models/FontOptions.ts";

export abstract class IFontsService {
    public abstract getFonts(): FontOptions[];
    public abstract getAllFonts(): FontOptions[];
    public abstract getFontsFor(texts: string[]): { fonts?: FontOptions[]; fontFamilies: string[] };
}
