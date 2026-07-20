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
import sharp from "sharp";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import { logger } from "#/container.ts";

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

    public constructor(
        memesRepository: IMemesRepository,
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        transformService: ITransformService,
        generationsRepository: IGenerationsRepository,
        banditService: IBanditService,
        channelsRepository: IChannelsRepository,
        templatesRepository: ITemplatesRepository,
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

        const { channelId, userId, templateName } = data;

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
                ? await this._getCustomMemeProps(template, data.texts ?? {}, data.images ?? {})
                : await this.getMemeTemplateContext(template, channelId, userId);

        if (!props) {
            throw new Error("No props");
        }

        const contextTime: number = performance.now();

        const svg: string | undefined = await this._memesRepository.generateMeme(template, props);

        if (!svg) {
            throw new Error("No svg");
        }

        const png: Buffer = this._memesRepository.convertIntoBuffer(svg, template.width);

        const renderTime: number = performance.now();

        const generationId: number = await this._generationsRepository.add(channelId, template.name, new Date());

        const insertTime: number = performance.now();

        analytics.capture({
            event: "meme_generated",
            distinctId: userId,
            properties: {
                generationId: generationId,
                templateName: template.name,

                templateMs: templateTime - startTime,
                contextMs: contextTime - templateTime,
                renderMs: renderTime - contextTime,
                insertMs: insertTime - renderTime,
                totalMs: insertTime - startTime,

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
     *
     * @author Kyrylo Maliuha
     */
    public async getMemeTemplateContext(
        template: Template,
        channelId: string,
        userId: string,
    ): Promise<TemplateProps | undefined> {
        const templateImages: TemplateImage[] | undefined = template.images;
        const templateTexts: TemplateText[] | undefined = template.texts;
        const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsRepository.get(channelId);

        const channelTexts: string[] = await this._messagesRepository.getMessagesContentByChannelId(channelId);

        const channelImages: string[] = await this._imagesRepository.getImagesByChannelId(channelId, new Date());

        if (channel && channel?.useAvatarsInMemes) {
            const avatars: string[] = await this._imagesRepository.getAvatarsByChannelId(channelId, new Date());

            channelImages.push(...avatars);
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

        return {
            images: await this._selectImages(channelImages, templateImages.length),
            texts: await this._transformService.transformIntoMultipleTexts(templateTexts, channelTexts),
        };
    }

    private async _selectImages(channelImages: string[], slotCount: number): Promise<string[]> {
        const primary: string[] = channelImages.slice(0, slotCount);
        const backups: string[] = channelImages.slice(slotCount, slotCount * 3);

        const converted: string[] = await Promise.all(
            primary.map((url: string): Promise<string> => this._toPngDataUri(url)),
        );

        const images: string[] = converted.filter((image: string): boolean => this._isTransparent(image));

        for (const url of backups) {
            if (images.length === slotCount) {
                break;
            }

            const image: string = await this._toPngDataUri(url);

            if (this._isTransparent(image)) {
                images.push(image);
            }
        }

        while (images.length < slotCount) {
            images.push(this._transparentImage);
        }

        return images;
    }

    private _isTransparent(image: string): boolean {
        return image !== this._transparentImage;
    }

    private async _toPngDataUri(url: string): Promise<string> {
        try {
            if (!url) return this._transparentImage;
            const res: Response = await fetch(url);
            if (!res.ok) {
                logger.emit({
                    severityText: "warn",
                    body: "generate_meme.image.fetch_failed",
                    attributes: { url_host: new URL(url).hostname, status: res.status },
                });
                return this._transparentImage;
            }

            const input: Buffer = Buffer.from(await res.arrayBuffer());
            const png: Buffer = await sharp(input).png().toBuffer();

            return `data:image/png;base64,${png.toString("base64")}`;
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "warn",
                body: "generate_meme.image.sharp_convert_failed",
                attributes: {
                    url_host: url.startsWith("http") ? new URL(url).hostname : "invalid",
                    error_message: error instanceof Error ? error.message : String(error),
                },
            });
            return this._transparentImage;
        }
    }

    private async _getCustomMemeProps(
        template: Template,
        texts: Record<string, string>,
        images: Record<string, string>,
    ): Promise<TemplateProps> {
        const orderedTexts: string[] = (template.texts ?? []).map((text: TemplateText): string => texts[text.id] ?? "");

        const orderedImages: string[] = await Promise.all(
            (template.images ?? []).map(async (image: TemplateImage): Promise<string> => {
                const url: string = images[image.id] ?? "";
                return await this._toPngDataUri(url);
            }),
        );

        return { texts: orderedTexts, images: orderedImages };
    }
}
