import pkg, { type MarkovResult } from 'markov-strings';

const { default: Markov } = pkg;

export class MarkovRepository {
  public async generateMarkovText(corpus: string[], minLength: number = 2, maxLength: number = 5, stateSize: number = 1): Promise<string> {
    const markov = new Markov({
      stateSize,
    });

    markov.addData(corpus);

    const options = {
      maxTries: 100,
      filter: (result: MarkovResult) => result.string.split(' ').length >= minLength && result.string.split(' ').length <= maxLength,
    };

    const result: MarkovResult = markov.generate(options);
    return result.string;
  }
}
