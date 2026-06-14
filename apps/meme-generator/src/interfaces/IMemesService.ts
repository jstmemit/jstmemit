import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";

export abstract class IMemesService {
    public abstract generateMeme(
        data: MemeGenerationJob,
    ): Promise<MemeGenerationResult>;
}
