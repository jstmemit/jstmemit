import type { TemplateText } from "@jstmemit/shared/models/TemplateText";

export abstract class ITransformProvider {
    public abstract getTransformedText(text: TemplateText, context: string[]): Promise<string>;
}
