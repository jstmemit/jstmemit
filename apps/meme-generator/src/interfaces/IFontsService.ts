import type { FontOptions } from "#/models/FontOptions.ts";

export abstract class IFontsService {
  public abstract getFonts(): FontOptions[];
}
