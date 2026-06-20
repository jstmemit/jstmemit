import { PostHog } from "posthog-node";
import { Env } from "@jstmemit/shared/schemas/Env";

const env = Env.parse(process.env);

export const analytics = new PostHog(env.POSTHOG_WRITE_KEY, {
    host: "https://eu.i.posthog.com",
    enableExceptionAutocapture: true,
});

const shutdown = async () => {
    await analytics.shutdown();
    process.exit(0);
};

process.on("beforeExit", () => void shutdown());
process.on("SIGINT", () => void shutdown());
process.on("SIGTERM", () => void shutdown());
