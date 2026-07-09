import type { ReactNode } from "react";
import type { TemplateText } from "./TemplateText.ts";
import type { TemplateImage } from "./TemplateImage.ts";
import type { TemplateProps } from "./TemplateProps.ts";
import type { TemplateTopic } from "./TemplateTopic.ts";

export interface Template {
    name: string;
    topics: TemplateTopic[];
    element: (props: TemplateProps) => ReactNode;
    width: number;
    height: number;
    images?: TemplateImage[];
    texts?: TemplateText[];
}
