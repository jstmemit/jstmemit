import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import {
    type Attachment,
    type Collection,
    type Embed,
    type Guild,
    type GuildEmoji,
    type PartialPollAnswer,
    type Poll,
    type PollAnswer,
    type Sticker,
} from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { analytics } from "@jstmemit/analytics";
import type { IGifService } from "@jstmemit/images/interfaces/IGifService";
import type { Job, Queue, QueueEvents } from "bullmq";
import { logger } from "#/container.ts";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";
import ms from "ms";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { ContextImage } from "@jstmemit/shared/models/ContextImage";
import type { messagesTable } from "@jstmemit/db/schema.ts";

export class ContextService implements IContextService {
    private readonly _expiration: number = 30 * 24 * 60 * 60 * 1000;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;
    private readonly _gifService: IGifService;
    private readonly _voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>;
    private readonly _voiceTranscriptionQueueEvents: QueueEvents;
    private readonly _cacheService: ICacheService;

    public constructor(
        messagesRepository: IMessagesRepository,
        imagesRepository: IImagesRepository,
        gifService: IGifService,
        voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>,
        voiceTranscriptionQueueEvents: QueueEvents,
        cacheService: ICacheService,
    ) {
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
        this._gifService = gifService;
        this._voiceTranscriptionQueue = voiceTranscriptionQueue;
        this._voiceTranscriptionQueueEvents = voiceTranscriptionQueueEvents;
        this._cacheService = cacheService;
    }

    /**
     * Saves text content into the database
     *
     * @param messages
     *
     * @author Kyrylo Maliuha
     */
    public async saveContent(messages: readonly (typeof messagesTable.$inferInsert)[]): Promise<number> {
        return this._messagesRepository.new(messages);
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

        await this._messagesRepository.new([{ messageId, channelId, content: result.text, timestamp: new Date() }]);
    }

    /**
     * Saves passed images in a batch
     *
     * @param images
     *
     * @author Kyrylo Maliuha
     */
    public async saveImages(images: readonly ContextImage[]): Promise<void> {
        await this._imagesRepository.addMany(images);
    }

    public buildMessageImages(
        messageId: string,
        channelId: string,
        avatarUrl: string | null,
        attachments: Collection<string, Attachment>,
    ): ContextImage[] {
        const timestamp: Date = new Date();
        const images: ContextImage[] = [];

        if (avatarUrl) {
            images.push({ messageId, channelId, imageUrl: `${avatarUrl}#${channelId}`, source: "avatar", timestamp });
        }

        for (const attachment of attachments.values()) {
            images.push({
                messageId,
                channelId,
                imageUrl: `${attachment.proxyURL}#${channelId}`,
                source: "attachment",
                timestamp,
                expiresAt: this._getExpirationDate(attachment.proxyURL),
            });
        }

        return images;
    }

    /**
     * Gets source link of the GIF from embed's thumbnail property or message
     * and then calls ImagesRepository to save it into the database
     *
     * @param messageId
     * @param channelId
     * @param embed
     * @param content
     *
     * @author Kyrylo Maliuha
     */
    public async saveGif(messageId: string, channelId: string, embed: Embed, content: string): Promise<void> {
        let result: string | undefined = "";

        if (embed.data.thumbnail?.url) {
            result = embed.data.thumbnail.url;
        } else {
            if (content.includes("tenor")) {
                result = await this._gifService.getTenorSourceUrl(content);
            }

            if (content.includes("giphy")) {
                result = await this._gifService.getGiphySourceUrl(content);
            }
        }

        if (!result) {
            return;
        }

        await this._imagesRepository.add(messageId, channelId, `${result}#${channelId}`, "gif", new Date());
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
        await this._imagesRepository.add(messageId, channelId, `${avatarUrl}#${channelId}`, "avatar", new Date());
    }

    public async savePoll(messageId: string, channelId: string, poll: Poll): Promise<void> {
        const answers: string = poll.answers
            .map((answer: PartialPollAnswer | PollAnswer): string | null => answer.text)
            .filter((text: string | null): text is string => Boolean(text))
            .join(", ");

        const text: string = `${poll.question.text}, ${answers}`;

        if (text.length < 2000) {
            await this.saveContent([{ messageId, channelId, content: text, timestamp: new Date() }]);
        }
    }

    public async saveEmojis(channelId: string, guild: Guild): Promise<void> {
        const emojis: Collection<string, GuildEmoji> = await guild.emojis.fetch();
        const timestamp: Date = new Date();

        await this.saveImages(
            emojis.map((emoji: GuildEmoji): ContextImage => ({
                messageId: emoji.id,
                channelId,
                imageUrl: `${emoji.imageURL({ size: 128 })}#${channelId}`,
                source: "avatar",
                timestamp,
            })),
        );
    }

    public async saveStickers(channelId: string, guild: Guild): Promise<void> {
        const stickers: Collection<string, Sticker> = await guild.stickers.fetch();
        const timestamp: Date = new Date();

        await this.saveImages(
            stickers.map((sticker: Sticker): ContextImage => ({
                messageId: sticker.id,
                channelId,
                imageUrl: `${sticker.url}#${channelId}`,
                source: "avatar",
                timestamp,
            })),
        );
    }

    public async checkAndFetchGuildAssets(channelId: string, enabled: boolean, guild: Guild | null): Promise<void> {
        if (!enabled || !guild) {
            return;
        }

        const isRefreshed: boolean | undefined = await this._cacheService.get(`refresh:${channelId}`);

        if (!isRefreshed) {
            await Promise.all([this.saveEmojis(channelId, guild), this.saveStickers(channelId, guild)]);

            await this._cacheService.set(`refresh:${channelId}`, true, ms("1w"));
        }
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

        return job.waitUntilFinished(this._voiceTranscriptionQueueEvents, ms("10m"));
    }
}
