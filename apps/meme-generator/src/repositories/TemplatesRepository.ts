import type { ITemplatesRepository } from "../interfaces/ITemplatesRepository.ts";
import type { Template } from "../models/Template.ts";
import { topBottomText } from "../data/templates/topBottomText.tsx";
import { liveReaction } from "../data/templates/liveReaction.tsx";
import { spongebob } from "../data/templates/spongebob.tsx";
import { explains } from "../data/templates/explains.tsx";

export class TemplatesRepository implements ITemplatesRepository {
    /**
     * Returns an array of all template objects
     *
     * @returns Template[]
     *
     * @author Kyrylo Maliuha
     */
    public getAll(): Template[] {
        return [topBottomText, liveReaction, spongebob, explains];
    }
}
