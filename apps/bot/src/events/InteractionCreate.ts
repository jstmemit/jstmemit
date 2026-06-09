import { client } from "../bot.ts";
import { Events } from "discord.js";
import { FontsRepository } from "@jstmemit/meme-generator/repositories/FontsRepository";
import { MemeService } from "@jstmemit/meme-generator/services/MemeService";
import { topBottomText } from "@jstmemit/meme-generator/data/templates/topBottomText.tsx";
import type { TemplateResult } from "@jstmemit/meme-generator/models/TemplateResult";
import type { IFontsRepository } from "@jstmemit/meme-generator/interfaces/IFontsRepository";
import type { IMemeService } from "@jstmemit/meme-generator/interfaces/IMemeService";
import type { IMemeRepository } from "@jstmemit/meme-generator/interfaces/IMemeRepository";
import { MemeRepository } from "@jstmemit/meme-generator/repositories/MemeRepository";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";

const fontsRepository: IFontsRepository = new FontsRepository();
const messagesRepository: IMessagesRepository = new MessagesRepository();
const memeRepository: IMemeRepository = new MemeRepository(fontsRepository);
const memeService: IMemeService = new MemeService(
  memeRepository,
  messagesRepository,
);

client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.deferReply();

    const png: TemplateResult = await memeService.generateMeme(
      topBottomText,
      interaction.channelId,
    );

    if (!png.result) {
      await interaction.reply("error");
      return;
    }

    await interaction.editReply({
      content: "123 test",
      files: [
        {
          attachment: png.result,
          name: "meme.png",
        },
      ],
    });
  }
});
