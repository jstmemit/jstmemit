import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config({ path: "../../.env" });

export default defineConfig({
  out: "./drizzle",
  schema: "./src/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: `./src/${process.env.DB_FILE_NAME!}`,
  },
});
