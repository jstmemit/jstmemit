import type { IMemesController } from "../interfaces/IMemesController.ts";
import type { ChatInputCommandInteraction } from "discord.js";
import type { TemplateResult } from "@jstmemit/meme-generator/models/TemplateResult";
import { topBottomText } from "@jstmemit/meme-generator/data/templates/topBottomText.tsx";
import type { IMemesService } from "@jstmemit/meme-generator/interfaces/IMemesService";

export class MemesController implements IMemesController {
  private readonly _memeService: IMemesService;

  public constructor(memeService: IMemesService) {
    this._memeService = memeService;
  }

  public async handleMemeInteraction(
    interaction: ChatInputCommandInteraction,
  ): Promise<void> {
    await interaction.deferReply();

    const png: TemplateResult | undefined =
      await this._memeService.generateMeme(
        topBottomText,
        interaction.channelId,
      );

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
