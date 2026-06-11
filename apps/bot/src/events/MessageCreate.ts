import { client } from "../bot.ts";
import { Events } from "discord.js";
import type { IContextController } from "./../interfaces/IContextController.ts";
import { ContextController } from "./../controllers/ContextController.ts";
import type { IContextService } from "./../interfaces/IContextService.ts";
import { ContextService } from "./../services/ContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import { ChannelsService } from "./../services/ChannelsService.ts";
import type { IChannelsService } from "./../interfaces/IChannelsService.ts";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import { ChannelsRepository } from "@jstmemit/db/repositories/ChannelsRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";

const messagesRepository: IMessagesRepository = new MessagesRepository();
const channelsRepository: IChannelsRepository = new ChannelsRepository();
const imagesRepository: IImagesRepository = new ImagesRepository();
const channelsService: IChannelsService = new ChannelsService(
    channelsRepository,
);
const contextService: IContextService = new ContextService(
    messagesRepository,
    imagesRepository,
    channelsService,
);
const contextController: IContextController = new ContextController(
    contextService,
);

client.on(Events.MessageCreate, async (message): Promise<void> => {
    if (message.author.bot) return;

    await contextController.handleNewMessage(message);
});
