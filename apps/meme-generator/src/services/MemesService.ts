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
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import { logger } from "#/container.ts";
import ms from "ms";
import _ from "lodash";
import type { IImageService } from "@jstmemit/images/interfaces/IImageService";

export class MemesService implements IMemesService {
    private readonly _memesRepository: IMemesRepository;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _transformService: ITransformService;
    private readonly _generationsRepository: IGenerationsRepository;
    private readonly _banditService: IBanditService;
    private readonly _channelsRepository: IChannelsRepository;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _cacheService: ICacheService;
    private readonly _imageService: IImageService;
    private readonly _defaultFont: string = "Comic Sans MS";

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
        imageService: IImageService,
    ) {
        this._memesRepository = memesRepository;
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._transformService = transformService;
        this._generationsRepository = generationsRepository;
        this._banditService = banditService;
        this._channelsRepository = channelsRepository;
        this._templatesRepository = templatesRepository;
        this._cacheService = cacheService;
        this._imageService = imageService;
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

        const { channelId, userId, templateName, font } = data;

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
                ? await this._getCustomMemeProps(template, data.texts ?? {}, data.images ?? {}, font)
                : await this.getMemeTemplateContext(template, channelId, userId, font);

        if (!props) {
            throw new Error("No props");
        }

        const contextTime: number = performance.now();
        const hasAnimatedImage: boolean = props.images.some((image: string): boolean =>
            image.startsWith("data:image/gif"),
        );

        const animated: boolean = hasAnimatedImage || template.animationDuration != null;

        const [meme, generationId] = await Promise.all([
            this._memesRepository.generateMeme(template, props, animated),
            this._generationsRepository.add(channelId, template.name, new Date()),
        ]);

        const parent: { depth: number; createdAt: number } | undefined = data.parentGenerationId
            ? await this._cacheService.get(`chain:${data.parentGenerationId}`)
            : undefined;

        const regenerateDepth: number = data.parentGenerationId ? (parent?.depth ?? 0) + 1 : 0;

        await this._cacheService.set(
            `chain:${generationId}`,
            { depth: regenerateDepth, createdAt: Date.now() },
            ms("1h"),
        );

        const renderTime: number = performance.now();

        analytics.capture({
            event: "meme_generated",
            distinctId: userId,
            properties: {
                generationId: generationId,
                templateName: template.name,

                channelId: channelId,
                guildId: data.guildId,
                isUserInstall: data.isUserInstall,
                language: data.locale,

                templateMs: templateTime - startTime,
                contextMs: contextTime - templateTime,
                renderMs: renderTime - contextTime,
                totalMs: renderTime - startTime,

                isAnimated: template.isAnimated ?? false,
                animationDuration: template.animationDuration ?? undefined,
                memeBytes: meme.byteLength,
                templateWidth: template.width,
                templateHeight: template.height,

                textSlots: template.texts?.length ?? 0,
                imageSlots: template.images?.length ?? 0,
                textsFilled: props.texts.length,
                imagesFilled: props.images.length,

                trigger: data.trigger,
                parentGenerationId: data.parentGenerationId,
                regenerateDepth: regenerateDepth,
                msSincePreviousGeneration: parent ? Date.now() - parent.createdAt : undefined,

                topics: template.topics,
                types: template.types,
                pickedByBandit: !templateName,
                selectedTopic: template?.selectedTopic,
                selectedType: template?.selectedType,
                banditPosteriorSource: template?.banditPosteriorSource,
                banditCandidateCount: template?.banditCandidateCount,
                banditScore: template?.banditScore,
                banditPosteriorMean: template?.banditPosteriorMean,
            },
        });

        return {
            png: meme.toString("base64"),
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
     * @param font
     *
     * @author Kyrylo Maliuha
     */
    public async getMemeTemplateContext(
        template: Template,
        channelId: string,
        userId: string,
        font: string | null,
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

        if (channelTexts.length <= 1 || (templateImages.length > 0 && channelImages.length <= 1)) {
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
            this._imageService.selectImages(_.shuffle(channelImages), templateImages.length),
            this._transformService.transformIntoMultipleTexts(templateTexts, channelTexts),
        ]);

        return { images, texts, font: font || this._defaultFont };
    }

    private async _getCustomMemeProps(
        template: Template,
        texts: Record<string, string>,
        images: Record<string, string>,
        font: string | null,
    ): Promise<TemplateProps> {
        const orderedTexts: string[] = (template.texts ?? []).map((text: TemplateText): string => texts[text.id] ?? "");

        const orderedImages: string[] = await Promise.all(
            (template.images ?? []).map(async (image: TemplateImage): Promise<string> => {
                const url: string = images[image.id] ?? "";
                return await this._imageService.convertToDataUri(url);
            }),
        );

        return { texts: orderedTexts, images: orderedImages, font: font || this._defaultFont };
    }
}
