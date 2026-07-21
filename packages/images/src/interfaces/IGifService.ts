export abstract class IGifService {
    public abstract getTenorSourceUrl(url: string): Promise<string | undefined>;
    public abstract getGiphySourceUrl(url: string): Promise<string | undefined>;
}
