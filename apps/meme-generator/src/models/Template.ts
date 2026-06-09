import type ReactNode from "satori";
import type { TemplateText } from "./TemplateText.ts";
import type { TemplateImage } from "./TemplateImage.ts";

export interface Template {
  id: number;
  name: string;
  element: typeof ReactNode;
  width: number;
  height: number;
  images?: TemplateImage[];
  texts?: TemplateText[];
}
