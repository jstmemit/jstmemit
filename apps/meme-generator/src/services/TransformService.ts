import _ from "lodash";
import type { ITransformService } from "#/interfaces/ITransformService.ts";
import type { ITransformProvider } from "#/interfaces/ITransformProvider.ts";

export class TransformService implements ITransformService {
    private readonly _markovProvider: ITransformProvider;

    public constructor(markovProvider: ITransformProvider) {
        this._markovProvider = markovProvider;
    }

    /**
     * Transforms raw strings into a specific amount of transformed
     * strings.
     *
     * @param texts
     * @param amount
     *
     * @author Kyrylo Maliuha
     */
    public async transformIntoMultipleTexts(
        texts: string[],
        amount: number,
    ): Promise<string[]> {
        const transformedTexts: string[] = [];

        while (transformedTexts.length < amount) {
            transformedTexts.push(await this.transformIntoText(texts));
        }

        return transformedTexts;
    }

    /**
     * Decides how to transform a specific string based on amount of
     * raw strings available. If zero, then returns an empty string. If less than 30,
     * then returns a random one. If more, transforms by using MarkovProvider class
     *
     * @param texts
     *
     * @author Kyrylo Maliuha
     */
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
