import { Env } from "@jstmemit/shared/schemas/Env";
import type { ConnectionOptions } from "bullmq";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { cache } from "@jstmemit/cache";
import type { IVoiceService } from "#/interfaces/IVoiceService.ts";
import { VoiceService } from "#/services/VoiceService.ts";
import { asClass, asValue, type AwilixContainer, createContainer, InjectionMode } from "awilix";
import { type Logger, logs } from "@opentelemetry/api-logs";
import { CacheService } from "@jstmemit/cache/services/CacheService";
import { VoicesRepository } from "@jstmemit/shared/repositories/VoicesRepository";

const env = Env.parse(process.env);

export const redisConnection: ConnectionOptions = createRedisConnection(env.REDIS_HOST, env.REDIS_PORT);

const container: AwilixContainer = createContainer({ injectionMode: InjectionMode.CLASSIC });

container.register({
    keyv: asValue(cache),
    redisConnection: asValue(redisConnection),
    logger: asValue(logs.getLogger("jstmemit/voice")),
    cacheService: asClass(CacheService).singleton(),
    voiceService: asClass(VoiceService).singleton(),
    voicesRepository: asClass(VoicesRepository).singleton(),
});

export const voiceService: IVoiceService = container.resolve<IVoiceService>("voiceService");
export const logger: Logger = container.resolve<Logger>("logger");
