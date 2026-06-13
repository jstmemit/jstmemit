import { client } from "../bot.ts";
import { Events } from "discord.js";
import type { IMemesController } from "../interfaces/IMemesController.ts";
import { MemesController } from "../controllers/MemesController.ts";

const memesController: IMemesController = new MemesController();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  // chat commands
  if (interaction.isChatInputCommand()) {
    switch (interaction.commandName) {
      case "meme":
        await memesController.handleMemeInteraction(interaction);
        break;
    }
  }
});
