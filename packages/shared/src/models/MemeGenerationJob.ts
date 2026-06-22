import type { Template } from "@jstmemit/shared/models/Template.ts";

export interface MemeGenerationJob {
    channelId: string;
    trigger: "auto" | "command" | "regenerate";
    userId: string;
    template?: Template;
}
