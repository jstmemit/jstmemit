import type { Attachment, Collection } from "discord.js";

export abstract class IContextService {
    public abstract saveContent(
        messageId: string,
        channelId: string,
        content: string,
    ): Promise<boolean>;

    public abstract saveImages(
        messageId: string,
        channelId: string,
        attachments: Collection<string, Attachment>,
    ): Promise<boolean>;

    public abstract saveGif(
        messageId: string,
        channelId: string,
        content: string,
    ): Promise<boolean>;

    public abstract saveAvatar(
        messageId: string,
        channelId: string,
        avatarUrl: string,
    ): Promise<boolean>;
}
