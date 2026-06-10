import type { Template } from "../models/Template.ts";
import type { TemplateResult } from "../models/TemplateResult.ts";

export abstract class IMemesService {
  public abstract generateMeme(
    template: Template,
    channelId: string,
  ): Promise<TemplateResult | undefined>;
}
