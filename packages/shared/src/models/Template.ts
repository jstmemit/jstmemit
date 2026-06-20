import type { ReactNode } from "react";
import type { TemplateText } from "./TemplateText.ts";
import type { TemplateImage } from "./TemplateImage.ts";
import type { TemplateProps } from "./TemplateProps.ts";

export interface Template {
    id: number;
    name: string;
    element: (props: TemplateProps) => ReactNode;
    width: number;
    height: number;
    images?: TemplateImage[];
    texts?: TemplateText[];
    weight?: number;
}
