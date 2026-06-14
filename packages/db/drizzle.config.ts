import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { Env } from "@jstmemit/shared/schemas/Env";

config({ path: "../../.env" });

const env = Env.parse(process.env);

const dbPath = resolve(__dirname, "src", env.DB_FILE_NAME);

export default defineConfig({
    out: "./drizzle",
    schema: "./src/schema.ts",
    dialect: "turso",
    dbCredentials: {
        url: pathToFileURL(dbPath).href,
    },
});
