import type { Template } from "@jstmemit/shared/models/Template.ts";

export interface MemeGenerationJob {
    channelId: string;
    trigger: "auto" | "command" | "regenerate" | "custom";
    userId: string;
    templateName?: Template["name"];
    texts?: Record<string, string>;
    images?: Record<string, string>;
}
