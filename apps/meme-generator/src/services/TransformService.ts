import type { ITransformService } from "../interfaces/ITransformService.ts";
import _ from "lodash";

export class TransformService implements ITransformService {
  public async transformIntoMultipleTexts(
    texts: string[],
    amount: number,
  ): Promise<string[]> {
    const transformedTexts: string[] = [];

    for (let i = 0; amount !== transformedTexts.length; i++) {
      transformedTexts.push(await this.transformIntoText(texts));
    }

    return transformedTexts;
  }

  public async transformIntoText(texts: string[]): Promise<string> {
    if (!texts || texts.length < 1) {
      return "";
    }

    if (texts.length < 30) {
      return _.sample(texts) || "";
    }

    return "";
  }
}
