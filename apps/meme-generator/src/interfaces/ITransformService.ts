import type { TemplateText } from "@jstmemit/shared/models/TemplateText";

export abstract class ITransformService {
    public abstract transformIntoMultipleTexts(texts: TemplateText[], context: string[]): Promise<string[]>;
    public abstract transformIntoText(text: TemplateText, context: string[]): Promise<string>;
}
