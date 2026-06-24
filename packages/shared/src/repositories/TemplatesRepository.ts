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
import { tf2Hahaha } from "#/templates/tf2Hahaha.tsx";
import { yesChad } from "#/templates/yesChad.tsx";
import { quote } from "#/templates/quote.tsx";
import { stonks } from "#/templates/stonks.tsx";
import { stonks1 } from "#/templates/stonks1.tsx";
import { missingPiece } from "#/templates/missingPiece.tsx";
import { newsReporterSitting } from "#/templates/newsReporterSitting.tsx";
import { sleepyThinking } from "#/templates/sleepyThinking.tsx";
import { wojackPoint } from "#/templates/wojackPoint.tsx";
import { absoluteCinema } from "#/templates/absoluteCinema.tsx";
import { iAdopted100Dogs } from "#/templates/iAdopted100Dogs.tsx";
import { iGotHuntedByARealBountyHunter } from "#/templates/iGotHuntedByARealBountyHunter.tsx";
import { oneDollarPrivateIsland } from "#/templates/oneDollarPrivateIsland.tsx";
import { spongebobHappy } from "#/templates/spongebobHappy.tsx";
import { worldsMostDangerousTrap } from "#/templates/worldsMostDangerousTrap.tsx";
import { connor } from "#/templates/connor.tsx";

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
            quote,
            stonks,
            stonks1,
            missingPiece,
            newsReporterSitting,
            sleepyThinking,
            wojackPoint,
            absoluteCinema,
            iAdopted100Dogs,
            iGotHuntedByARealBountyHunter,
            oneDollarPrivateIsland,
            spongebobHappy,
            worldsMostDangerousTrap,
            connor,
        ];
    }
}
