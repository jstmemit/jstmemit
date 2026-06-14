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
import type { IFontsService } from "@jstmemit/meme-generator/interfaces/IFontsService";
import { FontsService } from "@jstmemit/meme-generator/controllers/FontsService";
import type { ITemplatesRepository } from "@jstmemit/meme-generator/interfaces/ITemplatesRepository";
import { TemplatesRepository } from "@jstmemit/meme-generator/repositories/TemplatesRepository";
import { TemplatesService } from "@jstmemit/meme-generator/services/TemplatesService";
import type { ITemplatesService } from "@jstmemit/meme-generator/interfaces/ITemplatesService";

// fonts
const fontsRepository: IFontsRepository = new FontsRepository();
const fontsService: IFontsService = new FontsService(fontsRepository);

// messages
const messagesRepository: IMessagesRepository = new MessagesRepository();

// images
const imagesRepository: IImagesRepository = new ImagesRepository();

// templates
const templatesRepository: ITemplatesRepository = new TemplatesRepository();
const templatesService: ITemplatesService = new TemplatesService(
    templatesRepository,
);

// memes
const memesRepository: IMemesRepository = new MemesRepository(fontsService);
const memesService: IMemesService = new MemesService(
    memesRepository,
    messagesRepository,
    imagesRepository,
    templatesService,
);
const memesController: IMemesController = new MemesController(memesService);

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
