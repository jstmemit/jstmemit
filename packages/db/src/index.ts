import { Env } from "@jstmemit/shared/schemas/Env";
import { drizzle } from "drizzle-orm/libsql";

const env = Env.parse(process.env);

const url: string = env.DB_URL;

export const db = drizzle({
    connection: { url },
    jit: true,
});
