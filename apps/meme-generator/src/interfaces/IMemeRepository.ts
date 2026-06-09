import type { Template } from "../models/Template.ts";

export abstract class IMemeRepository {
  public abstract generateMeme(
    template: Template,
    texts: Record<number, string>,
    images: Record<number, string>,
  ): Promise<string | undefined>;

  public abstract convertIntoBuffer(svg: string, width: number): Buffer;
}
