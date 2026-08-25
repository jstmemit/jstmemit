import type { FontOptions } from "#/models/FontOptions.ts";
import type { Font } from "#/models/Font.ts";

export abstract class IFontsService {
    public abstract getFonts(): FontOptions[];
    public abstract getFontFamiliesForSetting(setting: Font["value"]): string;
}
