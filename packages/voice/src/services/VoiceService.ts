import type { IVoiceService } from "#/interface/IVoiceService.ts";

export class VoiceService implements IVoiceService {
    private readonly _whisperUrl: string;

    public constructor(whisperUrl: string = "http://whisper:9000/v1/audio/transcriptions") {
        this._whisperUrl = whisperUrl;
    }

    public async convertSpeechToText(url: string): Promise<string> {
        const audio: Response = await fetch(url);

        const form = new FormData();
        form.append("file", await audio.blob(), "audio.ogg");
        form.append("response_format", "text");

        const res: Response = await fetch(this._whisperUrl, {
            method: "POST",
            body: form,
        });

        return await res.text();
    }
}
