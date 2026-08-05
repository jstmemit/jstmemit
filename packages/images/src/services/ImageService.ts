import type { IImageService } from "#/interfaces/IImageService.ts";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import { analytics } from "@jstmemit/analytics";
import type { Metadata, Sharp } from "sharp";
import sharp from "sharp";
import type { Logger } from "@opentelemetry/api-logs";
import ms from "ms";

export class ImageService implements IImageService {
    private readonly _transparentImage: string;
    private readonly _cacheService: ICacheService;
    private readonly _logger: Logger;

    public constructor(cacheService: ICacheService, logger: Logger) {
        this._transparentImage =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNgYGBgAAAABQABeqhXUAAAAABJRU5ErkJggg==";
        this._cacheService = cacheService;
        this._logger = logger;
    }

    /**
     * Fetches image from the URL and returns a resized + compressed
     * version of it as a base64 string
     *
     * @param url
     * @param turbo if true, reduces quality
     *
     * @author Kyrylo Maliuha
     */
    public async convertToDataUri(url: string, turbo: boolean): Promise<string> {
        if (!this._isValidUrl(url)) {
            return this._transparentImage;
        }

        try {
            const cached: string | undefined = await this._cacheService.get<string>(
                this._getConvertToDataUriCacheKey(turbo, url),
            );

            if (cached !== undefined) {
                return cached;
            }

            const input: Buffer | null = await this._fetchImageBuffer(url);

            if (input === null) {
                return this._transparentImage;
            }

            const format: string | null = await this._getFormat(input);

            if (format === null) {
                this._logger.emit({
                    severityText: "warn",
                    body: "generate_meme.image.unsupported_format",
                    attributes: { url_host: this._safeHost(url) },
                });
                return this._transparentImage;
            }

            const resized: Sharp = this._resizeImage(input, format, turbo);

            let buf: Buffer;

            switch (format) {
                case "gif":
                    buf = await this._resizeGif(resized);
                    break;
                case "png":
                    buf = await this._resizePng(resized);
                    break;
                default:
                    buf = await this._resizeJpeg(resized, turbo);
                    break;
            }

            const result = `data:image/${format};base64,${buf.toString("base64")}`;
            await this._cacheService.set(this._getConvertToDataUriCacheKey(turbo, url), result, ms("24h"));
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

    /**
     * Returns a Sharp object with a resized image
     * from received Buffer
     *
     * @param input
     * @param format
     * @param turbo
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _resizeImage(input: Buffer, format: string, turbo: boolean): Sharp {
        const img: Sharp = sharp(input, {
            animated: format === "gif",
        });

        return img.resize({
            width: turbo ? 128 : 512,
            withoutEnlargement: true,
            kernel: turbo ? "nearest" : "cubic",
        });
    }

    /**
     * Checks image's metadata and returns back into which
     * format it must get transformed
     *
     * @param input
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _getFormat(input: Buffer): Promise<string | null> {
        let meta: Metadata;

        try {
            meta = await sharp(input).metadata();
        } catch {
            return null;
        }

        const animated: boolean = (meta.pages ?? 1) > 1 && (meta.format === "gif" || meta.format === "webp");
        return animated ? "gif" : meta.hasAlpha ? "png" : "jpeg";
    }

    /**
     * Builds cache key for a fetched image
     *
     * @param turbo
     * @param url
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _getConvertToDataUriCacheKey(turbo: boolean, url: string): string {
        return `image:${turbo ? "t" : "n"}:${url}`;
    }

    /**
     * Fetches image from the URL and returns it
     * as a Buffer
     *
     * @param url
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _fetchImageBuffer(url: string): Promise<Buffer | null> {
        const res: Response = await fetch(url, {
            headers: { Accept: "image/*" },
            signal: AbortSignal.timeout(8500),
        });

        if (!res.ok) {
            this._logger.emit({
                severityText: "warn",
                body: "generate_meme.image.fetch_failed",
                attributes: { url_host: this._safeHost(url), status: res.status },
            });
            return null;
        }

        const contentType: string = res.headers.get("content-type") ?? "";

        if (!contentType.startsWith("image/")) {
            this._logger.emit({
                severityText: "warn",
                body: "generate_meme.image.not_an_image",
                attributes: { url_host: this._safeHost(url), content_type: contentType },
            });
            return null;
        }

        return Buffer.from(await res.arrayBuffer());
    }

    private async _resizeGif(input: Sharp): Promise<Buffer<ArrayBufferLike>> {
        return await input
            .gif({
                effort: 7,
                dither: 1,
                reuse: true,
                colours: 100,
                interFrameMaxError: 4,
                interPaletteMaxError: 4,
                progressive: true,
            })
            .toBuffer();
    }

    private _isValidUrl(url: string): boolean {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }

    private async _resizePng(input: Sharp): Promise<Buffer<ArrayBufferLike>> {
        return await input.png({ compressionLevel: 1 }).toBuffer();
    }

    private async _resizeJpeg(input: Sharp, turbo: boolean): Promise<Buffer<ArrayBufferLike>> {
        return await input.jpeg({ quality: 82, optimizeCoding: !turbo }).toBuffer();
    }

    private _safeHost(url: string): string {
        try {
            return new URL(url).hostname;
        } catch {
            return "invalid";
        }
    }

    public async selectImages(channelImages: string[], slotCount: number, turbo: boolean): Promise<string[]> {
        const primary: string[] = channelImages.slice(0, slotCount);
        const backups: string[] = channelImages.slice(slotCount, slotCount * 3);

        const converted: string[] = await Promise.all(
            primary.map((url: string): Promise<string> => this.convertToDataUri(url, turbo)),
        );

        const images: string[] = converted.filter((image: string): boolean => this._isNotTransparent(image));

        if (images.length < slotCount) {
            const missing: number = slotCount - images.length;

            const retried: string[] = await Promise.all(
                backups.slice(0, missing + 2).map((url: string): Promise<string> => this.convertToDataUri(url, turbo)),
            );

            images.push(...retried.filter((image: string): boolean => this._isNotTransparent(image)).slice(0, missing));
        }

        while (images.length < slotCount) {
            images.push(this._transparentImage);
        }

        return images;
    }

    /**
     * Checks if the image is already a transparent placeholder
     *
     * @param image
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _isNotTransparent(image: string): boolean {
        return image !== this._transparentImage;
    }
}
