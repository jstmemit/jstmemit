import type { IContextController } from "#/interfaces/IContextController.ts";
import { ContextController } from "#/controllers/ContextController.ts";
import type { IContextService } from "#/interfaces/IContextService.ts";
import { ContextService } from "#/services/ContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import { ChannelsService } from "#/services/ChannelsService.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import { ChannelsRepository } from "@jstmemit/db/repositories/ChannelsRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import { MemesController } from "#/controllers/MemesController.ts";
import type { z } from "zod";
import { Env } from "@jstmemit/shared/schemas/Env";
import { QueueEvents, type ConnectionOptions, type Queue } from "bullmq";
import { createRedisConnection } from "@jstmemit/queue/connection";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { createMemeGenerationQueue } from "@jstmemit/queue/jobs/memeGeneration";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import { ChannelsController } from "#/controllers/ChannelsController.ts";
import { EventsController } from "#/controllers/EventsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import { RatingsService } from "#/services/RatingsService.ts";
import type { IRatingsRepository } from "@jstmemit/db/interfaces/IRatingsRepository";
import { RatingsRepository } from "@jstmemit/db/repositories/RatingsRepository";
import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import { RatingsController } from "#/controllers/RatingsController.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { ComponentsService } from "#/services/ComponentsService.ts";
import type { ISettingsController } from "#/interfaces/ISettingsController.ts";
import { SettingsController } from "#/controllers/SettingsController.ts";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import { GenerationsRepository } from "@jstmemit/db/repositories/GenerationsRepository";
import type { IBanditRepository } from "@jstmemit/db/interfaces/IBanditRepository";
import { BanditRepository } from "@jstmemit/db/repositories/BanditRepository";
import type { IBanditService } from "@jstmemit/bandit/interfaces/IBanditService";
import { BanditService } from "@jstmemit/bandit/services/BanditService";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import { TemplatesRepository } from "@jstmemit/shared/repositories/TemplatesRepository";

const env: z.infer<typeof Env> = Env.parse(process.env);

const redisConnection: ConnectionOptions = createRedisConnection(env.REDIS_HOST, env.REDIS_PORT);
const memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult> = createMemeGenerationQueue(redisConnection);
const memeGenerationQueueEvents: QueueEvents = new QueueEvents("meme-generation", {
    connection: redisConnection,
});

// messages
const messagesRepository: IMessagesRepository = new MessagesRepository();

// components
export const componentsService: IComponentsService = new ComponentsService();

// channels
const channelsRepository: IChannelsRepository = new ChannelsRepository();
const channelsService: IChannelsService = new ChannelsService(channelsRepository, messagesRepository);
const channelsController: IChannelsController = new ChannelsController(
    channelsService,
    componentsService,
    messagesRepository,
);

// images
const imagesRepository: IImagesRepository = new ImagesRepository();

// generations
const generationsRepository: IGenerationsRepository = new GenerationsRepository();

// templates

const templatesRepository: ITemplatesRepository = new TemplatesRepository();

// bandit
const banditRepository: IBanditRepository = new BanditRepository();
const banditService: IBanditService = new BanditService(banditRepository, templatesRepository);

// ratings
const ratingsRepository: IRatingsRepository = new RatingsRepository();
const ratingsService: IRatingsService = new RatingsService(ratingsRepository);
const ratingsController: IRatingsController = new RatingsController(
    ratingsService,
    generationsRepository,
    banditService,
);

// memes
const memesController: IMemesController = new MemesController(
    memeGenerationQueue,
    memeGenerationQueueEvents,
    ratingsService,
    componentsService,
    banditService,
    channelsService,
);

// context
const contextService: IContextService = new ContextService(messagesRepository, imagesRepository);
const contextController: IContextController = new ContextController(contextService, channelsService, memesController);

// settings
const settingsController: ISettingsController = new SettingsController(channelsService, componentsService);

// events
export const eventsController: IEventsController = new EventsController(
    contextController,
    channelsController,
    memesController,
    ratingsController,
    settingsController,
);
