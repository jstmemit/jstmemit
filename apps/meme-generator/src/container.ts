import { type ConnectionOptions } from "bullmq";
import type { IMemesService } from "#/interfaces/IMemesService.ts";
import { MemesService } from "#/services/MemesService.ts";
import type { IMemesRepository } from "#/interfaces/IMemesRepository.ts";
import { MemesRepository } from "#/repositories/MemesRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository.ts";
import { TemplatesRepository } from "@jstmemit/shared/repositories/TemplatesRepository.ts";
import type { IFontsService } from "@jstmemit/shared/interfaces/IFontsService";
import { FontsService } from "@jstmemit/shared/services/FontsService";
import type { IFontsRepository } from "@jstmemit/shared/interfaces/IFontsRepository";
import { FontsRepository } from "@jstmemit/shared/repositories/FontsRepository";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { Env } from "@jstmemit/shared/schemas/Env";
import type { ITransformService } from "#/interfaces/ITransformService.ts";
import { TransformService } from "#/services/TransformService.ts";
import type { ITransformProvider } from "#/interfaces/ITransformProvider.ts";
import { MarkovProvider } from "#/providers/MarkovProvider.ts";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import { GenerationsRepository } from "@jstmemit/db/repositories/GenerationsRepository";
import type { IBanditRepository } from "@jstmemit/db/interfaces/IBanditRepository";
import { BanditRepository } from "@jstmemit/db/repositories/BanditRepository";
import type { IBanditService } from "@jstmemit/bandit/interfaces/IBanditService";
import { BanditService } from "@jstmemit/bandit/services/BanditService";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import { ChannelsRepository } from "@jstmemit/db/repositories/ChannelsRepository";

const env = Env.parse(process.env);

export const redisConnection: ConnectionOptions = createRedisConnection(env.REDIS_HOST, env.REDIS_PORT);

// fonts
const fontsRepository: IFontsRepository = new FontsRepository();
const fontsService: IFontsService = new FontsService(fontsRepository);

// messages
export const messagesRepository: IMessagesRepository = new MessagesRepository();

// images
export const imagesRepository: IImagesRepository = new ImagesRepository();

// templates
const templatesRepository: ITemplatesRepository = new TemplatesRepository();

// transform
const markovProvider: ITransformProvider = new MarkovProvider();
const transformService: ITransformService = new TransformService(markovProvider);

// generations
const generationsRepository: IGenerationsRepository = new GenerationsRepository();

// bandit
export const banditRepository: IBanditRepository = new BanditRepository();
const banditService: IBanditService = new BanditService(banditRepository, templatesRepository);

// channels
const channelsRepository: IChannelsRepository = new ChannelsRepository();

// memes
const memesRepository: IMemesRepository = new MemesRepository(fontsService);
export const memesService: IMemesService = new MemesService(
    memesRepository,
    messagesRepository,
    imagesRepository,
    transformService,
    generationsRepository,
    banditService,
    channelsRepository,
    templatesRepository,
);
