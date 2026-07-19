import type { IVoiceService } from "#/interface/IVoiceService.ts";

export class VoiceService implements IVoiceService {
    private readonly _whisperUrl: string;

    public constructor(whisperUrl: string = "http://whisper:9000/v1/audio") {
        this._whisperUrl = whisperUrl;
    }

    /**
     * Fetches audio from url then sends to whisper
     * for a transcription that returns plain text
     *
     * @param url
     *
     * @author Kyrylo Maliuha
     */
    public async convertSpeechToText(url: string): Promise<string> {
        const audio: Response = await fetch(url);

        const form = new FormData();
        form.append("file", await audio.blob(), "audio.ogg");
        form.append("response_format", "text");

        const res: Response = await fetch(`${this._whisperUrl}/transcriptions`, {
            method: "POST",
            body: form,
        });

        return await res.text();
    }
}
