import type { Template } from "@jstmemit/shared/models/Template";

export abstract class ITemplatesService {
    public abstract getRandomTemplate(): Template | undefined;
}
