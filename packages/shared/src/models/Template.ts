import type { ReactNode } from "react";
import type { TemplateText } from "./TemplateText.ts";
import type { TemplateImage } from "./TemplateImage.ts";
import type { TemplateProps } from "./TemplateProps.ts";
import type { TemplateTopic } from "./TemplateTopic.ts";
import type { TemplateType } from "./TemplateType.ts";
import type { PosteriorSource } from "#/models/PosteriorSource.ts";

export interface Template {
    name: string;
    topics: TemplateTopic[];
    types: TemplateType[];
    element: (props: TemplateProps) => ReactNode;
    width: number;
    height: number;
    animationDuration?: number | null;
    isAnimated?: boolean;
    images?: TemplateImage[];
    texts?: TemplateText[];
    selectedTopic?: TemplateTopic;
    selectedType?: TemplateType;
    banditScore?: number;
    banditPosteriorMean?: number;
    banditCandidateCount?: number;
    banditPosteriorSource?: PosteriorSource;
}
