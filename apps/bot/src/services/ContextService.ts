import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { Attachment, Collection } from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { analytics } from "@jstmemit/analytics";

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

        attachments.forEach((attachment: Attachment): void => {
            if (!attachment.contentType?.startsWith("image/")) {
                return;
            }

            const expiresAt: Date = this._getExpirationDate(
                attachment.proxyURL,
            );

            this._imagesRepository
                .new(
                    messageId,
                    channelId,
                    attachment.proxyURL,
                    "attachment",
                    new Date(),
                    expiresAt,
                )
                .catch((error): void => {
                    console.error(error);
                });
        });

        return true;
    }

    public async saveGif(
        messageId: string,
        channelId: string,
        content: string,
    ): Promise<boolean> {
        if (!(await this._channelsService.isChannelEnabled(channelId))) {
            return false;
        }

        const result: string | undefined =
            await this._resolveTenorGifUrl(content);

        if (!result) {
            return false;
        }

        this._imagesRepository
            .new(messageId, channelId, result, "gif", new Date())
            .catch((error): void => {
                console.error(error);
            });

        return true;
    }

    public async saveAvatar(
        messageId: string,
        channelId: string,
        avatarUrl: string,
    ): Promise<boolean> {
        if (!(await this._channelsService.isChannelEnabled(channelId))) {
            return false;
        }

        avatarUrl = `${avatarUrl.replace(".webp", "")}?size=1024&format=png`;

        this._imagesRepository
            .new(messageId, channelId, avatarUrl, "avatar", new Date())
            .catch((error): void => {
                console.error(error);
            });

        return true;
    }

    private async _resolveTenorGifUrl(
        tenorUrl: string,
    ): Promise<string | undefined> {
        const response: Response = await fetch(tenorUrl);

        if (!response.ok) {
            return undefined;
        }

        const html: string = await response.text();
        const match: RegExpMatchArray | null = html.match(
            /<link[^>]+rel="image_src"[^>]+href="([^"]+)"/i,
        );

        return match?.[1];
    }

    private _getExpirationDate(attachmentUrl: string): Date {
        try {
            const expiration: string | null = new URL(
                attachmentUrl,
            ).searchParams.get("ex");

            return expiration
                ? new Date(parseInt(expiration, 16) * 1000)
                : new Date(Date.now() + 24 * 60 * 60 * 1000);
        } catch (error) {
            console.error(error);

            analytics.captureException(error, "bot", {
                attachmentUrl,
            });

            return new Date(Date.now() + 24 * 60 * 60 * 1000);
        }
    }
}
