import type { Attachment, Collection } from "discord.js";

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
}
