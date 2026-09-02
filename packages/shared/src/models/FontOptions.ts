import type { GenericFontFamily } from "#/models/GenericFontFamily.ts";

export interface FontOptions {
    data: Buffer | ArrayBuffer;
    name: string;
    weight?: number;
    style?: string;
    lang?: string;
    generic?: GenericFontFamily;
}
