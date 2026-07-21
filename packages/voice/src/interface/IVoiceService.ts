export abstract class IVoiceService {
    public abstract convertSpeechToText(url: string): Promise<string>;
    public abstract narrateText(text: string, locale?: string, voice?: string): Promise<Buffer | undefined>;
}
