export abstract class ITransformProvider {
    public abstract getTransformedText(texts: string[]): Promise<string>;
}
