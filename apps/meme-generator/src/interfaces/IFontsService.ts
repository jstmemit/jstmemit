import type { FontOptions } from "@jstmemit/shared/models/FontOptions";

export abstract class IFontsService {
    public abstract getFonts(): FontOptions[];
}
