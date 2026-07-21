import type { ChatInputCommandInteraction } from "discord.js";
import type { IVoiceController } from "#/interfaces/IVoiceController.ts";
import type { IVoiceService } from "@jstmemit/voice/interface/IVoiceService";

export class VoiceController implements IVoiceController {
    private readonly _voiceService: IVoiceService;

    public constructor(voiceService: IVoiceService) {
        this._voiceService = voiceService;
    }

    // TODO: add telemetry and remove console logs
    public async handleNarrateTextInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        await interaction.deferReply();

        const text: string | null = interaction.options.getString("text");

        if (!text) {
            console.log("no text");
            return;
        }

        const result: Buffer<ArrayBufferLike> | undefined = await this._voiceService.narrateText(text);

        if (!result) {
            console.log("no result");
            return;
        }

        await interaction.editReply({
            content: `🗣️ "*${text}*"\n\n<@${interaction.user.id}>`,
            files: [
                {
                    attachment: result,
                    name: text.substring(0, 16) + ".mp3",
                },
            ],
        });
    }
}
