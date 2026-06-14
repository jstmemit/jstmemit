import type { ReactNode } from "react";
import type { TemplateText } from "#/models/TemplateText.ts";
import type { TemplateImage } from "#/models/TemplateImage.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";

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
