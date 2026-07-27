import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { Template } from "@jstmemit/shared/models/Template";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";

export abstract class IMemesService {
    public abstract generateMeme(data: MemeGenerationJob): Promise<MemeGenerationResult>;
    public abstract getMemeTemplateContext(
        template: Template,
        channelId: string,
        userId: string,
        turbo: boolean,
    ): Promise<TemplateProps | undefined>;
}
