import type { Template } from "@jstmemit/shared/models/Template.ts";

export interface MemeGenerationJob {
    channelId: string;
    guildId?: string;
    isUserInstall?: boolean;
    locale?: string;
    trigger: "auto" | "command" | "regenerate" | "custom" | "context";
    userId: string;
    templateName?: Template["name"];
    texts?: Record<string, string>;
    images?: Record<string, string>;
    turbo: boolean;
}
