export interface TextNarrationJob {
    guildId: string | null | undefined;
    channelId: string;
    userId: string;
    text: string;
    voiceId: string | null | undefined;
}
