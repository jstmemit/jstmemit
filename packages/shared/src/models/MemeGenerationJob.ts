import type { Template } from "@jstmemit/shared/models/Template.ts";
import type { MemeGenerationTrigger } from "@jstmemit/shared/models/MemeGenerationTrigger.ts";

export interface MemeGenerationJob {
    channelId: string;
    guildId?: string;
    isUserInstall?: boolean;
    locale?: string;
    trigger: MemeGenerationTrigger;
    userId: string;
    templateName?: Template["name"];
    texts?: Record<string, string>;
    images?: Record<string, string>;
    turbo: boolean;
    parentGenerationId?: number;
}
