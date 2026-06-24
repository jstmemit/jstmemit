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

export class MemesService implements IMemesService {
    private readonly _memesRepository: IMemesRepository;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _transformService: ITransformService;
    private readonly _generationsRepository: IGenerationsRepository;
    private readonly _banditService: IBanditService;
    private readonly _channelsRepository: IChannelsRepository;

    public constructor(
        memesRepository: IMemesRepository,
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        transformService: ITransformService,
        generationsRepository: IGenerationsRepository,
        banditService: IBanditService,
        channelsRepository: IChannelsRepository,
    ) {
        this._memesRepository = memesRepository;
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._transformService = transformService;
        this._generationsRepository = generationsRepository;
        this._banditService = banditService;
        this._channelsRepository = channelsRepository;
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

        let { template } = data;
        const { channelId, userId } = data;

        if (!template) {
            template = await this._banditService.selectTemplate(channelId, userId);
        }

        if (!template) {
            throw new Error();
        }

        const templateTime: number = performance.now();

        const props: TemplateProps | undefined = await this.getMemeTemplateContext(template, channelId);

        if (!props) {
            throw new Error();
        }

        const contextTime: number = performance.now();

        const svg: string | undefined = await this._memesRepository.generateMeme(template, props);

        if (!svg) {
            throw new Error();
        }

        const png: Buffer = this._memesRepository.convertIntoBuffer(svg, template.width);

        const renderTime: number = performance.now();

        const generationId: number = await this._generationsRepository.add(channelId, template.id, new Date());

        const insertTime: number = performance.now();

        analytics.capture({
            event: "meme_generated",
            distinctId: userId,
            properties: {
                generationId: generationId,
                templateId: template.id,
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
     *
     * @author Kyrylo Maliuha
     */
    public async getMemeTemplateContext(template: Template, channelId: string): Promise<TemplateProps | undefined> {
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
            return undefined;
        }

        return {
            images: channelImages.slice(0, templateImages.length),
            texts: await this._transformService.transformIntoMultipleTexts(channelTexts, templateTexts.length),
        };
    }
}
