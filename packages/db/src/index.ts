import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";
import { drizzle } from "drizzle-orm/tursodatabase/database";

config({ path: "../../.env" });

const env = Env.parse(process.env);

export const db = drizzle(env.DB_FILE_NAME);
