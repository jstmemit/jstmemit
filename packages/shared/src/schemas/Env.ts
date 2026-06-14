import { z } from "zod";

export const Env = z.object({
    DB_FILE_NAME: z.string().min(1),
    DB_URL: z.string().min(1),

    DISCORD_TOKEN: z.string().min(1),
    DISCORD_CLIENT_ID: z.string().min(1),

    REDIS_HOST: z.string().min(1),
    REDIS_PORT: z.coerce.number().min(1),
});
