import { z } from "zod";

export const Env = z.object({
    DB_URL: z.string().min(1),

    DISCORD_TOKEN: z.string().min(1),
    DISCORD_CLIENT_ID: z.string().min(1),
    DISCORD_CLIENT_ID_PRODUCTION: z.string().min(1),

    POSTHOG_PUBLIC_KEY: z.string().min(1),
    TOPGG_TOKEN: z.string().min(1).optional(),

    REDIS_HOST: z.string().min(1),
    REDIS_PORT: z.coerce.number().min(1),

    REDIS_CACHE_HOST: z.string().min(1),
    REDIS_CACHE_PORT: z.string().min(1),
});
