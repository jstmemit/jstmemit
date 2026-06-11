import { z } from "zod";

export const Env = z.object({
    DB_FILE_NAME: z.string().min(1),

    DISCORD_TOKEN: z.string().min(1),
    DISCORD_CLIENT_ID: z.string().min(1),
});
