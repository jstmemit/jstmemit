import { client } from "../bot.ts";
import { Events } from "discord.js";
import { FontsRepository } from "@jstmemit/meme-generator/repositories/FontsRepository";
import { MemeService } from "@jstmemit/meme-generator/services/MemeService";
import type { IFontsRepository } from "@jstmemit/meme-generator/interfaces/IFontsRepository";
import type { IMemeService } from "@jstmemit/meme-generator/interfaces/IMemeService";
import type { IMemeRepository } from "@jstmemit/meme-generator/interfaces/IMemeRepository";
import { MemeRepository } from "@jstmemit/meme-generator/repositories/MemeRepository";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import type { IMemesController } from "../interfaces/IMemesController.ts";
import { MemesController } from "../controllers/MemesController.ts";

// repositories
const fontsRepository: IFontsRepository = new FontsRepository();
const messagesRepository: IMessagesRepository = new MessagesRepository();
const memeRepository: IMemeRepository = new MemeRepository(fontsRepository);
const imagesRepository: IImagesRepository = new ImagesRepository();

// services
const memeService: IMemeService = new MemeService(
  memeRepository,
  messagesRepository,
  imagesRepository,
);

// controllers
const memesController: IMemesController = new MemesController(memeService);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  // chat commands
  if (interaction.isChatInputCommand()) {
    switch (interaction.commandName) {
      case "meme":
        await memesController.handleMemeInteraction(interaction);
    }
  }
});
