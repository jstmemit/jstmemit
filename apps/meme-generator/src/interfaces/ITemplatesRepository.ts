import type { Template } from "@jstmemit/shared/models/Template";

export abstract class ITemplatesRepository {
    public abstract getAll(): Template[];
}
