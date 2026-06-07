import "dotenv/config";
import { z } from "zod";
import { drizzle } from "drizzle-orm/tursodatabase/database";

const env = z
  .object({
    DB_FILE_NAME: z.string().min(1),
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  .parse(process.env);

export const db = drizzle(env.DB_FILE_NAME);
