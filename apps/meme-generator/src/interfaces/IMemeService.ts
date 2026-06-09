import type { Template } from "../models/Template.ts";
import type { TemplateResult } from "../models/TemplateResult.ts";

export abstract class IMemeService {
  public abstract generateMeme(
    template: Template,
    texts: Record<number, string>,
    images: Record<number, string>,
  ): Promise<TemplateResult>;
}
