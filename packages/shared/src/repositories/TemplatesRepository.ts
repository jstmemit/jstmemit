import { topBottomText } from "#/templates/topBottomText.tsx";
import { liveReaction } from "#/templates/liveReaction.tsx";
import { spongebob } from "#/templates/spongebob.tsx";
import { explains } from "#/templates/explains.tsx";
import type { ITemplatesRepository } from "#/interfaces/ITemplatesRepository.ts";
import type { Template } from "#/models/Template.ts";
import { looksAtPaperAngry } from "#/templates/looksAtPaperAngry.tsx";

export class TemplatesRepository implements ITemplatesRepository {
    /**
     * Returns an array of all template objects
     *
     * @returns Template[]
     */
    public getAll(): Template[] {
        return [topBottomText, liveReaction, spongebob, explains, looksAtPaperAngry];
    }
}
