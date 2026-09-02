export abstract class IImageService {
    public abstract convertToDataUri(url: string): Promise<string>;
    public abstract selectImages(channelImages: string[], slotCount: number): Promise<string[]>;
}
