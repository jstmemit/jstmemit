import type { Node } from "takumi-js";

export abstract class IImageService {
    public abstract convertToDataUri(url: string): Promise<string>;
    public abstract selectImages(channelImages: string[], slotCount: number): Promise<string[]>;
    public abstract renderEmojiImages(node: Node, width: number): Node;
}
