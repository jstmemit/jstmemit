import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { Attachment, Collection } from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";

export class ContextService implements IContextService {
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _channelsService: IChannelsService;

    public constructor(
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        channelsService: IChannelsService,
    ) {
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._channelsService = channelsService;
    }

    /**
     * Saves text content from a message. First tries to add it to the database,
     * then checks if it is enabled and only then saves the text.
     *
     * @param messageId
     * @param channelId
     * @param content
     *
     * @author Kyrylo Maliuha
     */
    public async saveContent(
        messageId: string,
        channelId: string,
        content: string,
    ): Promise<boolean> {
        if (!(await this._channelsService.isChannelEnabled(channelId))) {
            return false;
        }

        return await this._messagesRepository.new(
            messageId,
            channelId,
            content,
            new Date(),
        );
    }

    /**
     * Saves images from a message. First tries to add it to the database,
     * then checks if it is enabled and only then saves the images. Goes
     * through all images in a message.
     *
     * @param messageId
     * @param channelId
     * @param attachments
     *
     * @author Kyrylo Maliuha
     */
    public async saveImages(
        messageId: string,
        channelId: string,
        attachments: Collection<string, Attachment>,
    ): Promise<boolean> {
        if (!(await this._channelsService.isChannelEnabled(channelId))) {
            return false;
        }

        attachments.forEach((attachment) => {
            this._imagesRepository
                .new(messageId, channelId, attachment.url, new Date())
                .catch((error) => {
                    console.error(error);
                });
        });

        return true;
    }
}
