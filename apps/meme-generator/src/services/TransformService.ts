import type { ITransformService } from "../interfaces/ITransformService.ts";
import _ from "lodash";
import type { ITransformProvider } from "../interfaces/ITransformProvider.ts";

export class TransformService implements ITransformService {
  private readonly _markovProvider: ITransformProvider;

  public constructor(markovProvider: ITransformProvider) {
    this._markovProvider = markovProvider;
  }

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
    try {
      if (!texts || texts.length < 1) {
        return "";
      }

      if (texts.length < 30) {
        return _.sample(texts) || "";
      }

      return await this._markovProvider.getTransformedText(texts);
    } catch (error) {
      console.error(error);
      return "";
    }
  }
}
