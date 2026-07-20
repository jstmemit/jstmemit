import { type ConnectionOptions } from "bullmq";
import type { IMemesService } from "#/interfaces/IMemesService.ts";
import { MemesService } from "#/services/MemesService.ts";
import { MemesRepository } from "#/repositories/MemesRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import { TemplatesRepository } from "@jstmemit/shared/repositories/TemplatesRepository.ts";
import { FontsService } from "@jstmemit/shared/services/FontsService";
import { FontsRepository } from "@jstmemit/shared/repositories/FontsRepository";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { Env } from "@jstmemit/shared/schemas/Env";
import { TransformService } from "#/services/TransformService.ts";
import { MarkovProvider } from "#/providers/MarkovProvider.ts";
import { GenerationsRepository } from "@jstmemit/db/repositories/GenerationsRepository";
import type { IBanditRepository } from "@jstmemit/db/interfaces/IBanditRepository";
import { BanditRepository } from "@jstmemit/db/repositories/BanditRepository";
import { BanditService } from "@jstmemit/bandit/services/BanditService";
import { ChannelsRepository } from "@jstmemit/db/repositories/ChannelsRepository";
import { createContainer, asClass, InjectionMode, type AwilixContainer } from "awilix";
import { type Logger, logs } from "@opentelemetry/api-logs";

const env = Env.parse(process.env);

export const redisConnection: ConnectionOptions = createRedisConnection(env.REDIS_HOST, env.REDIS_PORT);

const container: AwilixContainer = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
    fontsRepository: asClass(FontsRepository).singleton(),
    fontsService: asClass(FontsService).singleton(),
    messagesRepository: asClass(MessagesRepository).singleton(),
    templatesRepository: asClass(TemplatesRepository).singleton(),
    markovProvider: asClass(MarkovProvider).singleton(),
    transformService: asClass(TransformService).singleton(),
    generationsRepository: asClass(GenerationsRepository).singleton(),
    banditRepository: asClass(BanditRepository).singleton(),
    banditService: asClass(BanditService).singleton(),
    channelsRepository: asClass(ChannelsRepository).singleton(),
    memesRepository: asClass(MemesRepository).singleton(),
    memesService: asClass(MemesService).singleton(),
    imagesRepository: asClass(ImagesRepository).singleton(),
});

export const messagesRepository: IMessagesRepository = container.resolve<MessagesRepository>("messagesRepository");
export const imagesRepository: IImagesRepository = container.resolve<ImagesRepository>("imagesRepository");
export const banditRepository: IBanditRepository = container.resolve<BanditRepository>("banditRepository");
export const memesService: IMemesService = container.resolve<MemesService>("memesService");
export const logger: Logger = logs.getLogger("jstmemit/meme-generator");
