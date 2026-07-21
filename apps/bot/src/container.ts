import { ContextController } from "#/controllers/ContextController.ts";
import { ContextService } from "#/services/ContextService.ts";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import { ChannelsService } from "#/services/ChannelsService.ts";
import { ChannelsRepository } from "@jstmemit/db/repositories/ChannelsRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import { MemesController } from "#/controllers/MemesController.ts";
import type { z } from "zod";
import { Env } from "@jstmemit/shared/schemas/Env";
import { QueueEvents, type ConnectionOptions } from "bullmq";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { createMemeGenerationQueue } from "@jstmemit/queue/jobs/memeGeneration";
import { ChannelsController } from "#/controllers/ChannelsController.ts";
import { EventsController } from "#/controllers/EventsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import { RatingsService } from "#/services/RatingsService.ts";
import { RatingsRepository } from "@jstmemit/db/repositories/RatingsRepository";
import { RatingsController } from "#/controllers/RatingsController.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { ComponentsService } from "#/services/ComponentsService.ts";
import { SettingsController } from "#/controllers/SettingsController.ts";
import { GenerationsRepository } from "@jstmemit/db/repositories/GenerationsRepository";
import { BanditRepository } from "@jstmemit/db/repositories/BanditRepository";
import { BanditService } from "@jstmemit/bandit/services/BanditService";
import { TemplatesRepository } from "@jstmemit/shared/repositories/TemplatesRepository";
import { ModalsService } from "#/services/ModalsService.ts";
import { FeedbackController } from "#/controllers/FeedbackController.ts";
import { HelpController } from "#/controllers/HelpController.ts";
import { createContainer, asClass, asValue, InjectionMode, type AwilixContainer } from "awilix";
import { VoiceService } from "@jstmemit/voice/services/VoiceService";
import { GifService } from "@jstmemit/images/services/GifService";

const env: z.infer<typeof Env> = Env.parse(process.env);

const redisConnection: ConnectionOptions = createRedisConnection(env.REDIS_HOST, env.REDIS_PORT);

const container: AwilixContainer = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
    memeGenerationQueueEvents: asValue(
        new QueueEvents("meme-generation", {
            connection: redisConnection,
        }),
    ),
    memeGenerationQueue: asValue(createMemeGenerationQueue(redisConnection)),
    messagesRepository: asClass(MessagesRepository).singleton(),
    componentsService: asClass(ComponentsService).singleton(),
    imagesRepository: asClass(ImagesRepository).singleton(),
    generationsRepository: asClass(GenerationsRepository).singleton(),
    templatesRepository: asClass(TemplatesRepository).singleton(),
    banditRepository: asClass(BanditRepository).singleton(),
    banditService: asClass(BanditService).singleton(),
    ratingsRepository: asClass(RatingsRepository).singleton(),
    ratingsService: asClass(RatingsService).singleton(),
    ratingsController: asClass(RatingsController).singleton(),
    modalsService: asClass(ModalsService).singleton(),
    contextService: asClass(ContextService).singleton(),
    channelsRepository: asClass(ChannelsRepository).singleton(),
    channelsService: asClass(ChannelsService).singleton(),
    channelsController: asClass(ChannelsController).singleton(),
    memesController: asClass(MemesController).singleton(),
    contextController: asClass(ContextController).singleton(),
    settingsController: asClass(SettingsController).singleton(),
    feedbackController: asClass(FeedbackController).singleton(),
    helpController: asClass(HelpController).singleton(),
    eventsController: asClass(EventsController).singleton(),
    voiceService: asClass(VoiceService).singleton(),
    gifService: asClass(GifService).singleton(),
});

export const componentsService: IComponentsService = container.resolve<IComponentsService>("componentsService");
export const eventsController: IEventsController = container.resolve<IEventsController>("eventsController");
