import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";
import { drizzle } from "drizzle-orm/tursodatabase/database";
import path from "path";

config({ path: "../../.env" });

const env = Env.parse(process.env);
const dbPath: string = path.join(import.meta.dirname, env.DB_FILE_NAME);

export const db = drizzle(dbPath);
