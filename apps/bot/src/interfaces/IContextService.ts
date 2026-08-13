import type { Attachment, Collection, Guild, Poll } from "discord.js";
import type { ContextImage } from "@jstmemit/shared/models/ContextImage";
import type { messagesTable } from "@jstmemit/db/schema.ts";

export abstract class IContextService {
    public abstract saveContent(messages: readonly (typeof messagesTable.$inferInsert)[]): Promise<number>;

    public abstract saveTranscribedVoice(messageId: string, channelId: string, audio: string): Promise<void>;

    public abstract buildMessageImages(
        messageId: string,
        channelId: string,
        avatarUrl: string | null,
        attachments: Collection<string, Attachment>,
    ): ContextImage[];

    public abstract saveImages(images: readonly ContextImage[]): Promise<void>;

    public abstract saveGif(messageId: string, channelId: string, content: string): Promise<void>;

    public abstract saveAvatar(messageId: string, channelId: string, avatarUrl: string): Promise<void>;

    public abstract savePoll(messageId: string, channelId: string, poll: Poll): Promise<void>;

    public abstract saveEmojis(channelId: string, guild: Guild): Promise<void>;

    public abstract saveStickers(channelId: string, guild: Guild): Promise<void>;

    public abstract checkAndFetchGuildAssets(channelId: string, enabled: boolean, guild: Guild | null): Promise<void>;
}
