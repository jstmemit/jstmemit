import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { Attachment, Collection } from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { analytics } from "@jstmemit/analytics";

export class ContextService implements IContextService {
    private readonly _expiration: number = 30 * 24 * 60 * 60 * 1000;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _imagesRepository: IImagesRepository;

    public constructor(messagesRepository: IMessagesRepository, imagesRepository: IImagesRepository) {
        this._messagesRepository = messagesRepository;
        this._imagesRepository = imagesRepository;
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
    public async saveContent(messageId: string, channelId: string, content: string): Promise<boolean> {
        return await this._messagesRepository.new(messageId, channelId, content, new Date());
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
    public saveImages(messageId: string, channelId: string, attachments: Collection<string, Attachment>): boolean {
        attachments.forEach((attachment: Attachment): void => {
            const expiresAt: Date = this._getExpirationDate(attachment.proxyURL);

            if (attachment.proxyURL.includes(".webp")) {
                return;
            }

            this._imagesRepository
                .new(messageId, channelId, attachment.proxyURL, "attachment", new Date(), expiresAt)
                .catch((error): void => {
                    console.error(error);
                });
        });

        return true;
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
    public async saveGif(messageId: string, channelId: string, content: string): Promise<boolean> {
        let result: string | undefined = "";

        if (content.includes("tenor")) {
            result = await this._resolveTenorGifUrl(content);
        }

        if (content.includes("giphy")) {
            result = await this._resolveGiphyGifUrl(content);
        }

        if (!result) {
            return false;
        }

        this._imagesRepository.new(messageId, channelId, result, "gif", new Date()).catch((error): void => {
            console.error(error);
        });

        return true;
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
    public saveAvatar(messageId: string, channelId: string, avatarUrl: string): boolean {
        const url: URL = new URL(`${avatarUrl.replace(".webp", "")}?size=1024&format=png`);
        url.searchParams.set("channel", channelId);

        this._imagesRepository.new(messageId, channelId, url.toString(), "avatar", new Date()).catch((error): void => {
            console.error(error);
        });

        return true;
    }

    /**
     * Fetches a Tenor URL and looks for a direct link to the GIF
     * source inside <link> elements with "image_src" rel attribute
     *
     * @param tenorUrl
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _resolveTenorGifUrl(tenorUrl: string): Promise<string | undefined> {
        const response: Response = await fetch(tenorUrl);

        if (!response.ok) {
            return undefined;
        }

        const html: string = await response.text();
        const match: RegExpMatchArray | null = html.match(/<link[^>]+rel="image_src"[^>]+href="([^"]+)"/i);

        return match?.[1];
    }

    private async _resolveGiphyGifUrl(tenorUrl: string): Promise<string | undefined> {
        const response: Response = await fetch(tenorUrl);

        if (!response.ok) {
            return undefined;
        }

        const html: string = await response.text();
        const match: RegExpMatchArray | null = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i);

        return match?.[1];
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
            console.error(error);

            analytics.captureException(error, "bot", {
                attachmentUrl,
            });

            return new Date(Date.now() + this._expiration);
        }
    }
}
