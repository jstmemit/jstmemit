import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { Attachment, Collection } from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { analytics } from "@jstmemit/analytics";
import type { IVoiceService } from "@jstmemit/voice/interface/IVoiceService";
import type { IGifService } from "@jstmemit/images/interfaces/IGifService";

export class ContextService implements IContextService {
    private readonly _expiration: number = 30 * 24 * 60 * 60 * 1000;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _voiceService: IVoiceService;
    private readonly _gifService: IGifService;

    public constructor(
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        voiceService: IVoiceService,
        gifService: IGifService,
    ) {
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._voiceService = voiceService;
        this._gifService = gifService;
    }

    /**
     * Calls MessagesRepository to save text content into
     * the database
     *
     * @param messageId
     * @param channelId
     * @param content
     *
     * @author Kyrylo Maliuha
     */
    public async saveContent(messageId: string, channelId: string, content: string): Promise<void> {
        await this._messagesRepository.new(messageId, channelId, content, new Date());
    }

    /**
     * Calls MessagesRepository to save transcribed voice message content into
     * the database
     *
     * @param messageId
     * @param channelId
     * @param audio
     *
     * @author Kyrylo Maliuha
     */
    public async saveTranscribedVoice(messageId: string, channelId: string, audio: string): Promise<void> {
        await this._messagesRepository.new(
            messageId,
            channelId,
            await this._voiceService.convertSpeechToText(audio),
            new Date(),
        );
    }

    /**
     * Gets expiration date for every attachment and
     * then calls ImagesRepository to save it into
     * the database
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
    ): Promise<void> {
        await Promise.all(
            attachments.map(async (attachment: Attachment): Promise<void> => {
                await this._imagesRepository.add(
                    messageId,
                    channelId,
                    attachment.proxyURL,
                    "attachment",
                    new Date(),
                    this._getExpirationDate(attachment.proxyURL),
                );
            }),
        );
    }

    /**
     * Finds a source link to the Tenor or Giphy GIF and then calls
     * ImagesRepository to save it into the database
     *
     * @param messageId
     * @param channelId
     * @param content
     *
     * @author Kyrylo Maliuha
     */
    public async saveGif(messageId: string, channelId: string, content: string): Promise<void> {
        let result: string | undefined = "";

        if (content.includes("tenor")) {
            result = await this._gifService.getTenorSourceUrl(content);
        }

        if (content.includes("giphy")) {
            result = await this._gifService.getGiphySourceUrl(content);
        }

        if (!result) {
            return undefined;
        }

        await this._imagesRepository.add(messageId, channelId, result, "gif", new Date());
    }

    /**
     * Modifies avatar URL string to be a .png and calls
     * ImagesRepository to save it into the database
     *
     * @param messageId
     * @param channelId
     * @param avatarUrl
     *
     * @author Kyrylo Maliuha
     */
    public async saveAvatar(messageId: string, channelId: string, avatarUrl: string): Promise<void> {
        await this._imagesRepository.add(messageId, channelId, avatarUrl, "avatar", new Date());
    }

    /**
     * Extracts expiration date out of a Discord media URL
     *
     * @param attachmentUrl
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _getExpirationDate(attachmentUrl: string): Date {
        try {
            const expiration: string | null = new URL(attachmentUrl).searchParams.get("ex");

            return expiration ? new Date(parseInt(expiration, 16) * 1000) : new Date(Date.now() + this._expiration);
        } catch (error) {
            analytics.captureException(error);

            return new Date(Date.now() + this._expiration);
        }
    }
}
