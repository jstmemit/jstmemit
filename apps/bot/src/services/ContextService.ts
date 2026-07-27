import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { Attachment, Collection } from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { analytics } from "@jstmemit/analytics";
import type { IGifService } from "@jstmemit/images/interfaces/IGifService";
import type { Job, Queue, QueueEvents } from "bullmq";
import { logger } from "#/container.ts";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";

export class ContextService implements IContextService {
    private readonly _expiration: number = 30 * 24 * 60 * 60 * 1000;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _gifService: IGifService;
    private readonly _voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>;
    private readonly _voiceTranscriptionQueueEvents: QueueEvents;

    public constructor(
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        gifService: IGifService,
        voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>,
        voiceTranscriptionQueueEvents: QueueEvents,
    ) {
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._gifService = gifService;
        this._voiceTranscriptionQueue = voiceTranscriptionQueue;
        this._voiceTranscriptionQueueEvents = voiceTranscriptionQueueEvents;
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
        const result: VoiceTranscriptionResult = await this._addVoiceTranscriptionJob({
            url: audio,
            channelId,
        });

        await this._messagesRepository.new(messageId, channelId, result.text, new Date());
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
        // Save sequentially rather than via Promise.all: firing every attachment
        // insert concurrently piles load onto the remote libsql connection, which
        // was amplifying transient network failures.
        for (const attachment of attachments.values()) {
            await this._imagesRepository.add(
                messageId,
                channelId,
                attachment.proxyURL,
                "attachment",
                new Date(),
                this._getExpirationDate(attachment.proxyURL),
            );
        }
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

    private async _addVoiceTranscriptionJob(data: VoiceTranscriptionJob): Promise<VoiceTranscriptionResult> {
        const job: Job<VoiceTranscriptionJob, VoiceTranscriptionResult> = await this._voiceTranscriptionQueue.add(
            "voice-transcription",
            data,
        );

        logger.emit({
            severityText: "debug",
            body: "voice.speech_to_text.job.added",
            attributes: {
                job_id: job.id,
                channel_id: data.channelId,
            },
        });

        return job.waitUntilFinished(this._voiceTranscriptionQueueEvents, 60000);
    }
}
