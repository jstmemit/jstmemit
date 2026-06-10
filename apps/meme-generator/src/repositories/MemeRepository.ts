import type { Template } from "../models/Template.ts";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import type { IMemeRepository } from "../interfaces/IMemeRepository.ts";
import type { IFontsRepository } from "../interfaces/IFontsRepository.ts";
import type { TemplateProps } from "../models/TemplateProps.ts";

export class MemeRepository implements IMemeRepository {
  private readonly _fontsRepository: IFontsRepository;

  public constructor(fontsRepository: IFontsRepository) {
    this._fontsRepository = fontsRepository;
  }

  /**
   * Renders passed meme template using satori and
   * returns an SVG string
   *
   * @param template
   * @param props
   *
   * @author Kyrylo Maliuha
   */
  public async generateMeme(
    template: Template,
    props: TemplateProps,
  ): Promise<string | undefined> {
    try {
      return await satori(template.element(props), {
        width: template.width,
        height: template.height,
        fonts: [
          {
            name: "Impact",
            data: this._fontsRepository.getImpact(),
            weight: 800,
            style: "normal",
          },
        ],
      });
    } catch (error) {
      console.error("Error generating meme:", error);
      return undefined;
    }
  }

  /**
   * Converts an SVG string into a PNG buffer
   * using Resvg library
   *
   * @param svg
   * @param width
   *
   * @author Kyrylo Maliuha
   */
  public convertIntoBuffer(svg: string, width: number): Buffer {
    return new Resvg(svg, {
      fitTo: { mode: "width", value: width },
    })
      .render()
      .asPng();
  }
}
