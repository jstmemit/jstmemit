export abstract class INarrationsRepository {
    public abstract add(channelId: string, voice: string | null, date: Date): Promise<number>;
    public abstract getVoiceCountPerChannel(channelId: string): Promise<number>;
}
