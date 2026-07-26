export abstract class IImageService {
    public abstract convertToDataUri(url: string, turbo: boolean): Promise<string>;
    public abstract selectImages(channelImages: string[], slotCount: number, turbo: boolean): Promise<string[]>;
}
