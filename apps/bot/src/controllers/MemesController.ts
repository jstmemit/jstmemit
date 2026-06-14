import type { IMemesController } from "../interfaces/IMemesController.ts";
import type { ChatInputCommandInteraction } from "discord.js";
import type { TemplateResult } from "@jstmemit/meme-generator/models/TemplateResult";
import type { IMemesService } from "@jstmemit/meme-generator/interfaces/IMemesService";

export class MemesController implements IMemesController {
    private readonly _memesService: IMemesService;

    public constructor(memesService: IMemesService) {
        this._memesService = memesService;
    }

    public async handleMemeInteraction(
        interaction: ChatInputCommandInteraction,
    ): Promise<void> {
        await interaction.deferReply();

        const png: TemplateResult | undefined =
            await this._memesService.generateMeme(interaction.channelId);

        if (!png?.result) {
            await interaction.reply("error");
            return;
        }

        await interaction.editReply({
            files: [
                {
                    attachment: png.result,
                    name: "meme.png",
                },
            ],
        });
    }
}
