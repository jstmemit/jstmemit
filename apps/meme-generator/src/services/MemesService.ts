import type { Template } from "@jstmemit/shared/models/Template";
import type { IMemesService } from "#/interfaces/IMemesService.ts";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import type { TemplateImage } from "@jstmemit/shared/models/TemplateImage";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { ITransformService } from "#/interfaces/ITransformService.ts";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import { analytics } from "@jstmemit/analytics";
import type { IBanditService } from "@jstmemit/bandit/interfaces/IBanditService";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import type { channelsTable } from "@jstmemit/db/schema.ts";
import sharp, { type Metadata, type Sharp } from "sharp";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import { logger } from "#/container.ts";
import { xxh64 } from "@node-rs/xxhash";
import ms from "ms";
import _ from "lodash";

export class MemesService implements IMemesService {
    private readonly _transparentImage: string;
    private readonly _memesRepository: IMemesRepository;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _transformService: ITransformService;
    private readonly _generationsRepository: IGenerationsRepository;
    private readonly _banditService: IBanditService;
    private readonly _channelsRepository: IChannelsRepository;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _cacheService: ICacheService;

    public constructor(
        memesRepository: IMemesRepository,
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        transformService: ITransformService,
        generationsRepository: IGenerationsRepository,
        banditService: IBanditService,
        channelsRepository: IChannelsRepository,
        templatesRepository: ITemplatesRepository,
        cacheService: ICacheService,
    ) {
        this._transparentImage = "https://files.jstmemit.com/jstmemit/images/transparent.png";
        this._memesRepository = memesRepository;
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._transformService = transformService;
        this._generationsRepository = generationsRepository;
        this._banditService = banditService;
        this._channelsRepository = channelsRepository;
        this._templatesRepository = templatesRepository;
        this._cacheService = cacheService;
    }

    /**
     * Generates a meme by first getting needed props, calling the repository to
     * render props and template into an image, converts it into a png and returns as
     * an object with meme image as base64
     *
     * @param data
     *
     * @author Kyrylo Maliuha
     */
    public async generateMeme(data: MemeGenerationJob): Promise<MemeGenerationResult> {
        const startTime: number = performance.now();

        const { channelId, userId, templateName, turbo } = data;

        let template: Template | undefined = templateName
            ? this._templatesRepository.getAll().find((template: Template): boolean => template.name === templateName)
            : undefined;

        if (!template) {
            template = await this._banditService.selectTemplate(channelId, userId);
        }

        if (!template) {
            throw new Error("No template");
        }

        const templateTime: number = performance.now();

        const props: TemplateProps | undefined =
            data.texts || data.images
                ? await this._getCustomMemeProps(template, data.texts ?? {}, data.images ?? {}, turbo)
                : await this.getMemeTemplateContext(template, channelId, userId, turbo);

        if (!props) {
            throw new Error("No props");
        }

        const contextTime: number = performance.now();

        const svg: string | undefined = await this._memesRepository.generateMeme(template, props);

        if (!svg) {
            throw new Error("No svg");
        }

        const [png, generationId] = await Promise.all([
            data.trigger === "custom" || data.trigger === "context"
                ? this._cacheService.getOrSet(
                      `meme:png:${this._templatePropsKey(template, props)}`,
                      (): Promise<Buffer> => this._memesRepository.convertIntoBuffer(svg, template.width, turbo),
                      ms("8h"),
                  )
                : this._memesRepository.convertIntoBuffer(svg, template.width, turbo),
            this._generationsRepository.add(channelId, template.name, new Date()),
        ]);

        const renderTime: number = performance.now();

        analytics.capture({
            event: "meme_generated",
            distinctId: userId,
            properties: {
                generationId: generationId,
                templateName: template.name,

                templateMs: templateTime - startTime,
                contextMs: contextTime - templateTime,
                renderMs: renderTime - contextTime,
                totalMs: renderTime - startTime,

                textSlots: template.texts?.length ?? 0,
                imageSlots: template.images?.length ?? 0,
                textsFilled: props.texts.length,
                imagesFilled: props.images.length,

                trigger: data.trigger,
                topics: template.topics,
                types: template.types,
                selectedTopic: template?.selectedTopic,
                selectedType: template?.selectedType,
            },
        });

        console.log(renderTime - startTime + "ms");

        return {
            png: png.toString("base64"),
            generationId: generationId,
        };
    }

    /**
     * Gets text messages and images from the channel, shuffles them,
     * then transforms channel texts into meme slot text and returns
     * an object with both texts and images
     *
     * @param template
     * @param channelId
     * @param userId
     * @param turbo
     *
     * @author Kyrylo Maliuha
     */
    public async getMemeTemplateContext(
        template: Template,
        channelId: string,
        userId: string,
        turbo: boolean,
    ): Promise<TemplateProps | undefined> {
        const templateImages: TemplateImage[] | undefined = template.images;
        const templateTexts: TemplateText[] | undefined = template.texts;

        const [channel, channelTexts, channelImages, channelAvatars] = await Promise.all([
            this._cacheService.getOrSet(
                `context:channel:${channelId}`,
                (): Promise<typeof channelsTable.$inferSelect | undefined> => this._channelsRepository.get(channelId),
                ms("1m"),
            ),
            this._cacheService.getOrSet(
                `context:texts:${channelId}`,
                (): Promise<string[]> => this._messagesRepository.getMessagesContentByChannelId(channelId),
                ms("1m"),
            ),
            this._cacheService.getOrSet(
                `context:images:${channelId}`,
                (): Promise<string[]> => this._imagesRepository.getImagesByChannelId(channelId, new Date()),
                ms("1m"),
            ),
            this._cacheService.getOrSet(
                `context:avatars:${channelId}`,
                (): Promise<string[]> => this._imagesRepository.getAvatarsByChannelId(channelId, new Date()),
                ms("1m"),
            ),
        ]);

        if (channel?.useAvatarsInMemes) {
            channelImages.push(...channelAvatars);
        }

        if (!templateImages || !templateTexts) {
            return undefined;
        }

        if (channelTexts.length <= 1 || channelImages.length <= 1) {
            logger.emit({
                severityText: "warn",
                body: "generate_meme.context.insufficient",
                attributes: {
                    posthogDistinctId: userId,
                    channel_id: channelId,
                    template_name: template.name,
                    text_count: channelTexts.length,
                    image_count: channelImages.length,
                },
            });
            return undefined;
        }

        const [images, texts] = await Promise.all([
            this._selectImages(_.shuffle(channelImages), templateImages.length, turbo),
            this._transformService.transformIntoMultipleTexts(templateTexts, channelTexts),
        ]);

        return { images, texts };
    }

    private _templatePropsKey(template: Template, props: TemplateProps): string {
        const material: string = [template.name, ...props.texts, ...props.images].join("\u0000");

        return xxh64(material).toString(16);
    }

    private async _selectImages(channelImages: string[], slotCount: number, turbo: boolean): Promise<string[]> {
        const primary: string[] = channelImages.slice(0, slotCount);
        const backups: string[] = channelImages.slice(slotCount, slotCount * 3);

        const converted: string[] = await Promise.all(
            primary.map((url: string): Promise<string> => this._toPngDataUri(url, turbo)),
        );

        const images: string[] = converted.filter((image: string): boolean => this._isTransparent(image));

        if (images.length < slotCount) {
            const missing: number = slotCount - images.length;

            const retried: string[] = await Promise.all(
                backups.slice(0, missing + 2).map((url: string): Promise<string> => this._toPngDataUri(url, turbo)),
            );

            images.push(...retried.filter((image: string): boolean => this._isTransparent(image)).slice(0, missing));
        }

        while (images.length < slotCount) {
            images.push(this._transparentImage);
        }

        return images;
    }

    private _isTransparent(image: string): boolean {
        return image !== this._transparentImage;
    }

    private async _toPngDataUri(url: string, turbo: boolean): Promise<string> {
        try {
            if (!url) return this._transparentImage;

            const cached: string | undefined = await this._cacheService.get<string>(
                `img:png:${turbo ? "t" : "n"}:${url}`,
            );
            if (cached !== undefined) {
                return cached;
            }

            const res: Response = await fetch(url, {
                headers: { Accept: "image/*" },
                signal: AbortSignal.timeout(1500),
            });

            if (!res.ok) {
                logger.emit({
                    severityText: "warn",
                    body: "generate_meme.image.fetch_failed",
                    attributes: { url_host: this._safeHost(url), status: res.status },
                });
                return this._transparentImage;
            }

            const contentType: string = res.headers.get("content-type") ?? "";

            if (!contentType.startsWith("image/")) {
                logger.emit({
                    severityText: "warn",
                    body: "generate_meme.image.not_an_image",
                    attributes: { url_host: this._safeHost(url), content_type: contentType },
                });
                return this._transparentImage;
            }

            const input: Buffer = Buffer.from(await res.arrayBuffer());
            const img: Sharp = sharp(input);
            const resized: Sharp = img.resize({
                width: turbo ? 128 : 512,
                withoutEnlargement: true,
                kernel: turbo ? "nearest" : "cubic",
            });
            const meta: Metadata = await img.metadata();

            const [buf, mime] = meta.hasAlpha
                ? [await resized.png({ compressionLevel: 1 }).toBuffer(), "image/png"]
                : [await resized.jpeg({ quality: 82, optimizeCoding: !turbo }).toBuffer(), "image/jpeg"];

            const result = `data:${mime};base64,${buf.toString("base64")}`;
            await this._cacheService.set(`img:png:${url}`, result, ms("4h"));
            return result;
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
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

    private _safeHost(url: string): string {
        try {
            return new URL(url).hostname;
        } catch {
            return "invalid";
        }
    }

    private async _getCustomMemeProps(
        template: Template,
        texts: Record<string, string>,
        images: Record<string, string>,
        turbo: boolean,
    ): Promise<TemplateProps> {
        const orderedTexts: string[] = (template.texts ?? []).map((text: TemplateText): string => texts[text.id] ?? "");

        const orderedImages: string[] = await Promise.all(
            (template.images ?? []).map(async (image: TemplateImage): Promise<string> => {
                const url: string = images[image.id] ?? "";
                return await this._toPngDataUri(url, turbo);
            }),
        );

        return { texts: orderedTexts, images: orderedImages };
    }
}
