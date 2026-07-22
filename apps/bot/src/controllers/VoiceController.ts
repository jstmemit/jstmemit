import { type ChatInputCommandInteraction, MessageFlags } from "discord.js";
import type { IVoiceController } from "#/interfaces/IVoiceController.ts";
import type { IVoiceService } from "@jstmemit/voice/interface/IVoiceService";
import { type IAudioMetadata, parseBuffer } from "music-metadata";

export class VoiceController implements IVoiceController {
    private readonly _voiceService: IVoiceService;

    public constructor(voiceService: IVoiceService) {
        this._voiceService = voiceService;
    }

    // TODO: add telemetry and remove console logs
    public async handleNarrateTextInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        await interaction.deferReply();

        const text: string | null = interaction.options.getString("text");
        const voice: string | null = interaction.options.getString("voice");

        if (!text) {
            console.log("no text");
            return;
        }

        const result: Buffer<ArrayBufferLike> | undefined = await this._voiceService.narrateText(text, voice);

        if (!result) {
            console.log("no result");
            return;
        }

        const metadata: IAudioMetadata = await parseBuffer(result);
        const duration: number = Math.round(metadata.format.duration || 1);

        await interaction.followUp({
            files: [
                {
                    attachment: result,
                    name: `${text.substring(0, 16)}.ogg`,
                    duration: duration,
                    waveform: this._randomWaveform(),
                },
            ],
            flags: MessageFlags.IsVoiceMessage,
        });
    }

    private _randomWaveform(): string {
        const bytes: Uint8Array = new Uint8Array(64);
        let level: number = 128;
        for (let i = 0; i < bytes.length; i++) {
            level = Math.max(32, Math.min(224, level + (Math.random() - 0.5) * 80));
            bytes[i] = level;
        }
        return Buffer.from(bytes).toString("base64");
    }
}
