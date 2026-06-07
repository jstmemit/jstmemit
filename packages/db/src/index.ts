import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";
import { drizzle } from "drizzle-orm/tursodatabase/database";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

config({ path: "../../.env" });

const env = Env.parse(process.env);

const __dirname: string = dirname(fileURLToPath(import.meta.url));
const dbPath: string = resolve(__dirname, env.DB_FILE_NAME);

export const db = drizzle(dbPath);
