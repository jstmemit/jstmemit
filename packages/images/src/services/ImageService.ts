import type { IImageService } from "#/interfaces/IImageService.ts";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import { analytics } from "@jstmemit/analytics";
import { type Metadata, sharp, type Sharp } from "sharp";
import type { Logger } from "@opentelemetry/api-logs";
import ms from "ms";

export class ImageService implements IImageService {
    private readonly _transparentImage: string;
    private readonly _cacheService: ICacheService;
    private readonly _logger: Logger;

    public constructor(cacheService: ICacheService, logger: Logger) {
        this._transparentImage = "https://files.jstmemit.com/jstmemit/images/transparent.png";
        this._cacheService = cacheService;
        this._logger = logger;
    }

    public async convertToDataUri(url: string, turbo: boolean): Promise<string> {
        try {
            if (!url) return this._transparentImage;

            const cached: string | undefined = await this._cacheService.get<string>(
                `image:${turbo ? "t" : "n"}:${url}`,
            );
            if (cached !== undefined) {
                return cached;
            }

            const res: Response = await fetch(url, {
                headers: { Accept: "image/*" },
                signal: AbortSignal.timeout(3500),
            });

            if (!res.ok) {
                this._logger.emit({
                    severityText: "warn",
                    body: "generate_meme.image.fetch_failed",
                    attributes: { url_host: this._safeHost(url), status: res.status },
                });
                return this._transparentImage;
            }

            const contentType: string = res.headers.get("content-type") ?? "";

            if (!contentType.startsWith("image/")) {
                this._logger.emit({
                    severityText: "warn",
                    body: "generate_meme.image.not_an_image",
                    attributes: { url_host: this._safeHost(url), content_type: contentType },
                });
                return this._transparentImage;
            }

            const input: Buffer = Buffer.from(await res.arrayBuffer());
            const meta: Metadata = await sharp(input).metadata();

            const animated: boolean = (meta.pages ?? 1) > 1 && (meta.format === "gif" || meta.format === "webp");
            const format: string = animated ? "gif" : meta.hasAlpha ? "png" : "jpeg";

            const img: Sharp = sharp(input, {
                animated,
            });

            const resized: Sharp = img.resize({
                width: turbo ? 128 : 512,
                withoutEnlargement: true,
                kernel: turbo ? "nearest" : "cubic",
            });

            let buf: Buffer;

            switch (format) {
                case "gif":
                    buf = await resized
                        .gif({
                            effort: 5,
                            dither: 1,
                            reuse: true,
                            colours: 128,
                            interFrameMaxError: 0,
                            interPaletteMaxError: 0,
                        })
                        .toBuffer();
                    break;
                case "png":
                    buf = await resized.png({ compressionLevel: 1 }).toBuffer();
                    break;
                default:
                    buf = await resized.jpeg({ quality: 82, optimizeCoding: !turbo }).toBuffer();
                    break;
            }

            const result = `data:image/${format};base64,${buf.toString("base64")}`;
            await this._cacheService.set(`image:${turbo ? "t" : "n"}:${url}`, result, ms("4h"));
            return result;
        } catch (error) {
            analytics.captureException(error);
            this._logger.emit({
                severityText: "warn",
                body: "generate_meme.image.sharp_convert_failed",
                attributes: {
                    url_host: this._safeHost(url),
                    error_message: error instanceof Error ? error.message : String(error),
                },
            });
            return this._transparentImage;
        }
    }

    private _isTransparent(image: string): boolean {
        return image !== this._transparentImage;
    }

    private _safeHost(url: string): string {
        try {
            return new URL(url).hostname;
        } catch {
            return "invalid";
        }
    }
}
