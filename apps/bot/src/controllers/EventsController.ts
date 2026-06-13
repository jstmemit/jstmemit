import { type Client, type Interaction, type Message } from "discord.js";
import type { IContextController } from "./../interfaces/IContextController.ts";
import { ContextController } from "./ContextController.ts";
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
import { MemesController } from "./MemesController.ts";
import type { z } from "zod";
import { Env } from "@jstmemit/shared/schemas/Env";
import { QueueEvents, type ConnectionOptions, type Queue } from "bullmq";
import { createRedisConnection } from "@jstmemit/queue/connection";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { createMemeGenerationQueue } from "@jstmemit/queue/jobs/memeGeneration";
import type { IMemesController } from "../interfaces/IMemesController.ts";
import type { IChannelsController } from "../interfaces/IChannelsController.ts";
import { ChannelsController } from "./ChannelsController.ts";

// messages
const messagesRepository: IMessagesRepository = new MessagesRepository();

// channels
const channelsRepository: IChannelsRepository = new ChannelsRepository();
const channelsService: IChannelsService = new ChannelsService(
  channelsRepository,
);

// images
const imagesRepository: IImagesRepository = new ImagesRepository();

// context
const contextService: IContextService = new ContextService(
  messagesRepository,
  imagesRepository,
  channelsService,
);
const contextController: IContextController = new ContextController(
  contextService,
);

const env: z.infer<typeof Env> = Env.parse(process.env);

const redisConnection: ConnectionOptions = createRedisConnection(
  env.REDIS_HOST,
  env.REDIS_PORT,
);
const memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult> =
  createMemeGenerationQueue(redisConnection);
const memeGenerationQueueEvents: QueueEvents = new QueueEvents(
  "meme-generation",
  {
    connection: redisConnection,
  },
);

const memesController: IMemesController = new MemesController(
  memeGenerationQueue,
  memeGenerationQueueEvents,
);

const channelsController: IChannelsController = new ChannelsController(
  channelsService,
);

export class EventsController {
  public handleClientReady(readyClient: Client<true>): void {
    console.log(`Logged in as ${readyClient.user.tag}!`);
  }

  public async handleMessageCreate(message: Message): Promise<void> {
    if (message.author.bot) {
      return;
    }

    await contextController.handleNewMessage(message);
  }

  public async handleInteractionCreate(
    interaction: Interaction,
  ): Promise<void> {
    // chat commands
    if (interaction.isChatInputCommand()) {
      switch (interaction.commandName) {
        case "meme":
          await memesController.handleMemeInteraction(interaction);
          break;
        case "enable":
          await channelsController.handleEnableInteraction(interaction);
      }
    }
  }
}
