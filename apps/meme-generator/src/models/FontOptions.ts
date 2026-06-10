import type { FontStyle, FontWeight } from "satori";

export interface FontOptions {
  data: Buffer | ArrayBuffer;
  name: string;
  weight?: FontWeight;
  style?: FontStyle;
  lang?: string;
}
