import { client } from "../bot.ts";
import { Events } from "discord.js";
import { FontsRepository } from "@jstmemit/meme-generator/repositories/FontsRepository";
import { MemesService } from "@jstmemit/meme-generator/services/MemesService";
import type { IFontsRepository } from "@jstmemit/meme-generator/interfaces/IFontsRepository";
import type { IMemesService } from "@jstmemit/meme-generator/interfaces/IMemesService";
import type { IMemesRepository } from "@jstmemit/meme-generator/interfaces/IMemesRepository";
import { MemesRepository } from "@jstmemit/meme-generator/repositories/MemesRepository";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import type { IMemesController } from "../interfaces/IMemesController.ts";
import { MemesController } from "../controllers/MemesController.ts";

// repositories
const fontsRepository: IFontsRepository = new FontsRepository();
const messagesRepository: IMessagesRepository = new MessagesRepository();
const memeRepository: IMemesRepository = new MemesRepository(fontsRepository);
const imagesRepository: IImagesRepository = new ImagesRepository();

// services
const memeService: IMemesService = new MemesService(
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
