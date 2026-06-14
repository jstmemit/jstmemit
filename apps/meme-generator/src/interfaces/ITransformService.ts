export abstract class ITransformService {
    public abstract transformIntoMultipleTexts(
        texts: string[],
        amount: number,
    ): Promise<string[]>;
    public abstract transformIntoText(texts: string[]): Promise<string>;
}
