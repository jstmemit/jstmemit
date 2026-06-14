import type { Template } from "../models/Template.ts";
import type { TemplateResult } from "../models/TemplateResult.ts";

export abstract class IMemesService {
    public abstract generateMeme(
        channelId: string,
        template?: Template,
    ): Promise<TemplateResult | undefined>;
}
