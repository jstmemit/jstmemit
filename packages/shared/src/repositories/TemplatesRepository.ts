import type { ITemplatesRepository } from "#/interfaces/ITemplatesRepository.ts";
import type { Template } from "#/models/Template.ts";
import { topBottomText } from "#/templates/topBottomText.tsx";
import { explains } from "#/templates/explains.tsx";
import { liveReaction } from "#/templates/liveReaction.tsx";
import { spongebob } from "#/templates/spongebob.tsx";
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
import { disappointedGuy } from "#/templates/disappointedGuy.tsx";
import { disappointedGuy1 } from "#/templates/disappointedGuy1.tsx";
import { disasterGirl } from "#/templates/disasterGirl.tsx";
import { dogAndTeblet } from "#/templates/dogAndTeblet.tsx";
import { missingPiece } from "#/templates/missingPiece.tsx";
import { newsReporterSitting } from "#/templates/newsReporterSitting.tsx";
import { sleepyThinking } from "#/templates/sleepyThinking.tsx";
import { wojackPoint } from "#/templates/wojackPoint.tsx";
import { absoluteCinema } from "#/templates/absoluteCinema.tsx";
import { bearArrest } from "#/templates/bearArrest.tsx";
import { awkwardLookMonkey } from "#/templates/awkwardLookMonkey.tsx";
import { crowdFromAngryToHappy } from "#/templates/crowdFromAngryToHappy.tsx";
import { diagramIQ } from "#/templates/diagramIQ.tsx";
import { blooInBed } from "#/templates/blooInBed.tsx";
import { iAdopted100Dogs } from "#/templates/iAdopted100Dogs.tsx";
import { iGotHuntedByARealBountyHunter } from "#/templates/iGotHuntedByARealBountyHunter.tsx";
import { oneDollarPrivateIsland } from "#/templates/oneDollarPrivateIsland.tsx";
import { spongebobHappy } from "#/templates/spongebobHappy.tsx";
import { worldsMostDangerousTrap } from "#/templates/worldsMostDangerousTrap.tsx";
import { connor } from "#/templates/connor.tsx";
import { dogeWithGlasses } from "#/templates/dogeWithGlasses.tsx";
import { expandingBrain } from "#/templates/expandingBrain.tsx";
import { expandingBrain1 } from "#/templates/expandingBrain1.tsx";
import { explainingWhiteboard } from "#/templates/explainingWhiteboard.tsx";
import { grokTwit } from "#/templates/grokTwit.tsx";
import { iSteppedInShit } from "#/templates/iSteppedInShit.tsx";
import { lookAtThis } from "#/templates/lookAtThis.tsx";
import { moneyTonyStark } from "#/templates/moneyTonyStark.tsx";
import { monkeyThinking } from "#/templates/monkeyThinking.tsx";
import { mrMcMahonReaction } from "#/templates/mrMcMahonReaction.tsx";
import { myHeartBlank } from "#/templates/myHeartBlank.tsx";
import { myHonestReaction } from "#/templates/myHonestReaction.tsx";
import { nerdDog } from "#/templates/nerdDog.tsx";
import { owlStareAtYou } from "#/templates/owlStareAtYou.tsx";
import { sadMan } from "#/templates/sadMan.tsx";
import { spiderManDouble } from "#/templates/spiderManDouble.tsx";
import { starTrekThinking } from "#/templates/starTrekThinking.tsx";
import { tf2ScoutTalk } from "#/templates/tf2ScoutTalk.tsx";
import { tryingToExplain } from "#/templates/tryingToExplain.tsx";
import { willSmith } from "#/templates/willSmith.tsx";
import { winnieThePooh } from "#/templates/winnieThePooh.tsx";
import { winnieThePooh1 } from "#/templates/winnieThePooh1.tsx";
import { womanYellingAtACat } from "#/templates/womanYellingAtACat.tsx";
import { iInterviewedAnimals } from "#/templates/iInterviewedAnimals.tsx";
import { catIsCalling } from "#/templates/catIsCalling.tsx";
import { spongebobShowsSign } from "#/templates/spongebobShowsSign.tsx";
import { post } from "#/templates/post.tsx";
import { fuckMyChudLife } from "#/templates/fuckMyChudLife.tsx";
import { ukGovernmentToBanPeople } from "#/templates/ukGovernmentToBanPeople.tsx";
import { bernieSandersLive } from "#/templates/bernieSandersLive.tsx";
import { theyAllGoIntoSquareHole } from "#/templates/theyAllGoIntoSquareHole.tsx";
import { purestCookie } from "#/templates/purestCookie.tsx";
import { applyingForJobsWithFunnyPfp } from "#/templates/applyingForJobsWithFunnyPfp.tsx";

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
            disappointedGuy,
            disappointedGuy1,
            disasterGirl,
            dogAndTeblet,
            missingPiece,
            newsReporterSitting,
            sleepyThinking,
            wojackPoint,
            absoluteCinema,
            bearArrest,
            awkwardLookMonkey,
            crowdFromAngryToHappy,
            diagramIQ,
            blooInBed,
            iAdopted100Dogs,
            iGotHuntedByARealBountyHunter,
            oneDollarPrivateIsland,
            spongebobHappy,
            worldsMostDangerousTrap,
            connor,
            dogeWithGlasses,
            expandingBrain,
            expandingBrain1,
            explainingWhiteboard,
            grokTwit,
            iSteppedInShit,
            lookAtThis,
            moneyTonyStark,
            monkeyThinking,
            mrMcMahonReaction,
            myHeartBlank,
            myHonestReaction,
            nerdDog,
            owlStareAtYou,
            sadMan,
            spiderManDouble,
            starTrekThinking,
            tf2ScoutTalk,
            tryingToExplain,
            willSmith,
            winnieThePooh,
            winnieThePooh1,
            womanYellingAtACat,
            iInterviewedAnimals,
            catIsCalling,
            spongebobShowsSign,
            post,
            fuckMyChudLife,
            ukGovernmentToBanPeople,
            bernieSandersLive,
            theyAllGoIntoSquareHole,
            purestCookie,
            applyingForJobsWithFunnyPfp,
        ];
    }
}
