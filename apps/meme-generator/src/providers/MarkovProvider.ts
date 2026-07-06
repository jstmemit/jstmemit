import type { ITransformProvider } from "#/interfaces/ITransformProvider.ts";
import MarkovPkg from "markov-strings";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";

export class MarkovProvider implements ITransformProvider {
    public async getTransformedText(text: TemplateText, context: string[]): Promise<string> {
        return await Promise.resolve(this._generateText(context, text.minLength, text.maxLength));
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
    private _generateText(corpus: string[], minLength: number, maxLength: number): string {
        const markov = new MarkovPkg.default({ stateSize: 1 });

        markov.addData(corpus);

        return markov.generate({
            maxTries: 20000,
            filter: (result) => {
                return result.string.split(" ").length >= minLength && result.string.split(" ").length <= maxLength;
            },
        }).string;
    }
}
