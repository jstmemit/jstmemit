export abstract class IVoiceService {
    public abstract convertSpeechToText(url: string): Promise<string>;
    public abstract narrateText(text: string, voice?: string | null): Promise<Buffer | undefined>;
}
