export abstract class IVoiceService {
    public abstract convertSpeechToText(url: string): Promise<string>;
}
