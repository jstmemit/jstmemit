export abstract class IImageService {
    public abstract convertToDataUri(url: string, turbo: boolean): Promise<string>;
}
