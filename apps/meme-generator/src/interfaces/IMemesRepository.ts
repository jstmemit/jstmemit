import type { Template } from "../models/Template.ts";
import type { TemplateProps } from "../models/TemplateProps.ts";

export abstract class IMemesRepository {
  public abstract generateMeme(
    template: Template,
    props: TemplateProps,
  ): Promise<string | undefined>;

  public abstract convertIntoBuffer(svg: string, width: number): Buffer;
}
