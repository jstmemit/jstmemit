import type { ITransformProvider } from "#/interfaces/ITransformProvider.ts";
import MarkovPkg, { type MarkovResult } from "markov-strings";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";

type Markov = InstanceType<typeof MarkovPkg.default>;

export class MarkovProvider implements ITransformProvider {
    private readonly _corpusCache: WeakMap<string[], Markov> = new WeakMap();

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
        let markov: Markov | undefined = this._corpusCache.get(corpus);

        if (!markov) {
            markov = new MarkovPkg.default({ stateSize: 1 });
            markov.addData(corpus);
            this._corpusCache.set(corpus, markov);
        }

        return markov.generate({
            maxTries: 2000,
            filter: (result: MarkovResult): boolean => {
                const words: number = result.string.split(" ").length;

                return words >= minLength && words <= maxLength;
            },
        }).string;
    }
}
