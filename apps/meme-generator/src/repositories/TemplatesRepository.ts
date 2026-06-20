import { topBottomText } from "@jstmemit/shared/templates/topBottomText.tsx";
import { liveReaction } from "@jstmemit/shared/templates/liveReaction.tsx";
import { spongebob } from "@jstmemit/shared/templates/spongebob.tsx";
import { explains } from "@jstmemit/shared/templates/explains.tsx";
import type { ITemplatesRepository } from "#/interfaces/ITemplatesRepository.ts";
import type { Template } from "@jstmemit/shared/models/Template";

export class TemplatesRepository implements ITemplatesRepository {
    /**
     * Returns an array of all template objects
     *
     * @returns Template[]
     */
    public getAll(): Template[] {
        return [topBottomText, liveReaction, spongebob, explains];
    }
}
