import type { Template } from "@jstmemit/meme-generator/models/Template";

export interface MemeGenerationJob {
    channelId: string;
    trigger: "auto" | "command" | "regenerate";
    userId: string;
    template?: Template;
}
