import { render, renderAnimation } from "takumi-js";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { Template } from "@jstmemit/shared/models/Template";
import type { IRendererService } from "#/interfaces/IRendererService.ts";

export class MemesRepository implements IMemesRepository {
    private readonly _rendererService: IRendererService;

    public constructor(rendererService: IRendererService) {
        this._rendererService = rendererService;
    }

    /**
     * Renders passed meme template using takumi and
     * returns a WebP buffer
     *
     * @param template
     * @param props
     * @param animated
     *
     * @author Kyrylo Maliuha
     */
    public async generateMeme(
        template: Template,
        props: TemplateProps,
        animated: boolean,
    ): Promise<Buffer<ArrayBufferLike> | Uint8Array<ArrayBufferLike>> {
        try {
            await this._rendererService.fontsReady;

            if (animated) {
                const animationDuration: number = template.animationDuration ?? 1500;
                return await renderAnimation({
                    width: template.width,
                    height: template.height,
                    renderer: this._rendererService.renderer,
                    format: "webp",
                    emoji: "twemoji",
                    images: {
                        fetchCache: this._rendererService.fetchCache,
                        timeout: 25000,
                        maxBytes: 20 * 1024 * 1024,
                        sources: this._rendererService.sources,
                    },
                    quality: 40,
                    fps: 12,
                    scenes: [{ durationMs: animationDuration, node: template.element(props) }],
                });
            } else {
                return await render(template.element(props), {
                    width: template.width,
                    height: template.height,
                    renderer: this._rendererService.renderer,
                    quality: 70,
                    format: "webp",
                    emoji: "twemoji",
                    images: {
                        fetchCache: this._rendererService.fetchCache,
                        timeout: 25000,
                        maxBytes: 20 * 1024 * 1024,
                        sources: this._rendererService.sources,
                    },
                });
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
