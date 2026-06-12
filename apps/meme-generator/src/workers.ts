import { type ConnectionOptions, Worker } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { IMemesService } from "./interfaces/IMemesService.ts";
import { MemesService } from "./services/MemesService.ts";
import type { IMemesRepository } from "./interfaces/IMemesRepository.ts";
import { MemesRepository } from "./repositories/MemesRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import { ImagesRepository } from "@jstmemit/db/repositories/ImagesRepository";
import type { ITemplatesService } from "./interfaces/ITemplatesService.ts";
import { TemplatesService } from "./services/TemplatesService.ts";
import type { ITemplatesRepository } from "./interfaces/ITemplatesRepository.ts";
import { TemplatesRepository } from "./repositories/TemplatesRepository.ts";
import type { IFontsService } from "./interfaces/IFontsService.ts";
import { FontsService } from "./controllers/FontsService.ts";
import type { IFontsRepository } from "./interfaces/IFontsRepository.ts";
import { FontsRepository } from "./repositories/FontsRepository.ts";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { Env } from "@jstmemit/shared/schemas/Env";
import type { ITransformService } from "./interfaces/ITransformService.ts";
import { TransformService } from "./services/TransformService.ts";
import type { ITransformProvider } from "./interfaces/ITransformProvider.ts";
import { MarkovProvider } from "./providers/MarkovProvider.ts";

const env = Env.parse(process.env);

const redisConnection: ConnectionOptions = createRedisConnection(
  env.REDIS_HOST,
  env.REDIS_PORT,
);

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

// transform
const markovProvider: ITransformProvider = new MarkovProvider();
const transformService: ITransformService = new TransformService(
  markovProvider,
);

// memes
const memesRepository: IMemesRepository = new MemesRepository(fontsService);
const memesService: IMemesService = new MemesService(
  memesRepository,
  messagesRepository,
  imagesRepository,
  templatesService,
  transformService,
);

export const memeGenerationWorker = new Worker<
  MemeGenerationJob,
  MemeGenerationResult
>("meme-generation", async (job) => memesService.generateMeme(job.data), {
  connection: redisConnection,
  concurrency: 5,
});
