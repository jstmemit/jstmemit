import type { Template } from "./models/Template.ts";
import type { TemplateResult } from "./models/TemplateResult.ts";
import satori from "satori";
import type { FontsRepository } from "./repositories/FontsRepository.ts";

export class MemeService {
  private readonly _fontsRepository: FontsRepository;

  public constructor(fontsRepository: FontsRepository) {
    this._fontsRepository = fontsRepository;
  }

  public async generateMeme(
    template: Template,
    texts: Record<number, string>,
    images: Record<number, string>,
  ): Promise<TemplateResult> {
    const svg: string = await satori(template.element({ texts, images }), {
      width: template.width,
      height: template.height,
      fonts: [
        {
          name: "Impact",
          data: this._fontsRepository.getImpact(),
          weight: 400,
          style: "normal",
        },
      ],
    });

    return {
      success: true,
      result: svg,
    };
  }
}
