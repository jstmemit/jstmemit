import type { ITransformProvider } from "#/interfaces/ITransformProvider.ts";
import MarkovPkg from "markov-strings";

export class MarkovProvider implements ITransformProvider {
    public async getTransformedText(texts: string[]): Promise<string> {
        return await Promise.resolve(this._generateText(texts, 1, 5));
    }

    /**
     * Makes a corpus out of passed strings and returns back
     * generation result from running markov chains
     *
     * @param corpus
     * @param minLength
     * @param maxLength
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _generateText(
        corpus: string[],
        minLength: number,
        maxLength: number,
    ): string {
        const markov = new MarkovPkg.default({ stateSize: 1 });

        markov.addData(corpus);

        return markov.generate({
            maxTries: 1000,
            filter: (result) => {
                return (
                    result.string.split(" ").length >= minLength &&
                    result.string.split(" ").length <= maxLength
                );
            },
        }).string;
    }
}
