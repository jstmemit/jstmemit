import { topBottomText } from "#/templates/topBottomText.tsx";
import { liveReaction } from "#/templates/liveReaction.tsx";
import { spongebob } from "#/templates/spongebob.tsx";
import { explains } from "#/templates/explains.tsx";
import type { ITemplatesRepository } from "#/interfaces/ITemplatesRepository.ts";
import type { Template } from "#/models/Template.ts";
import { looksAtPaperAngry } from "#/templates/looksAtPaperAngry.tsx";
import { homerHiding } from "#/templates/homerHiding.tsx";
import { isThisAPigeon } from "#/templates/isThisAPigeon.tsx";
import { buzz } from "#/templates/buzz.tsx";
import { cowLookingIntoOcean } from "#/templates/cowLookingIntoOcean.tsx";
import { manLookingUp } from "#/templates/manLookingUp.tsx";
import { uncanny } from "#/templates/uncanny.tsx";
import { tf2Hahaha } from "#/templates/tf2hahaha.tsx";
import { yesChad } from "#/templates/yesChad.tsx";

export class TemplatesRepository implements ITemplatesRepository {
    /**
     * Returns an array of all template objects
     *
     * @returns Template[]
     */
    public getAll(): Template[] {
        return [
            topBottomText,
            liveReaction,
            spongebob,
            explains,
            looksAtPaperAngry,
            homerHiding,
            isThisAPigeon,
            buzz,
            cowLookingIntoOcean,
            manLookingUp,
            uncanny,
            tf2Hahaha,
            yesChad,
        ];
    }
}
