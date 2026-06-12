import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";
config({ path: "../../.env" });

const env = Env.parse(process.env);

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.DB_URL,
  },
});
