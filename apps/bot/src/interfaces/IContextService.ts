import type { Attachment, Collection, Guild, Poll } from "discord.js";

export abstract class IContextService {
    public abstract saveContent(messageId: string, channelId: string, content: string): Promise<void>;

    public abstract saveTranscribedVoice(messageId: string, channelId: string, audio: string): Promise<void>;

    public abstract saveImages(
        messageId: string,
        channelId: string,
        attachments: Collection<string, Attachment>,
    ): Promise<void>;

    public abstract saveGif(messageId: string, channelId: string, content: string): Promise<void>;

    public abstract saveAvatar(messageId: string, channelId: string, avatarUrl: string): Promise<void>;

    public abstract savePoll(messageId: string, channelId: string, poll: Poll): Promise<void>;

    public abstract saveEmojis(channelId: string, guild: Guild): Promise<void>;

    public abstract saveStickers(channelId: string, guild: Guild): Promise<void>;
}
