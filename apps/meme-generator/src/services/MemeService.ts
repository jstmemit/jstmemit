import type { Template } from "../models/Template.ts";
import type { TemplateResult } from "../models/TemplateResult.ts";
import type { IMemeService } from "../interfaces/IMemeService.ts";
import type { IMemeRepository } from "../interfaces/IMemeRepository.ts";

export class MemeService implements IMemeService {
  private readonly _memeRepository: IMemeRepository;

  public constructor(memeRepository: IMemeRepository) {
    this._memeRepository = memeRepository;
  }

  public async generateMeme(
    template: Template,
    texts: Record<number, string>,
    images: Record<number, string>,
  ): Promise<TemplateResult> {
    try {
      const svg: string | undefined = await this._memeRepository.generateMeme(
        template,
        texts,
        images,
      );

      if (!svg) {
        return {
          success: false,
        };
      }

      const png: Buffer = this._memeRepository.convertIntoBuffer(
        svg,
        template.width,
      );

      return {
        success: true,
        result: png,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  }
}
