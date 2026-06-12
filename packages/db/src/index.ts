import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";
import { drizzle } from "drizzle-orm/libsql";

config({ path: "../../.env" });

const env = Env.parse(process.env);

const url: string = env.DB_URL;

export const db = drizzle({ connection: { url } });
