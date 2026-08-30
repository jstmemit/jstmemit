import type { ImageSource } from "takumi-js";
import type { Renderer } from "takumi-js/node";

export abstract class IRendererService {
    public abstract fetchCache: Map<string, Promise<ArrayBuffer>>;
    public abstract sources: ImageSource[];
    public abstract fontsReady: Promise<void>;
    public abstract renderer: Renderer;
}
