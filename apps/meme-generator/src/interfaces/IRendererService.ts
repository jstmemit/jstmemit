import type { ImageSource, Node } from "takumi-js";
import type { Renderer } from "takumi-js/node";

export abstract class IRendererService {
    public abstract fetchCache: Map<string, Promise<ArrayBuffer>>;
    public abstract sources: ImageSource[];
    public abstract fontsReady: Promise<void>;
    public abstract renderer: Renderer;

    public abstract extractDiscordEmojis(node: Node, width: number): Node;
}
