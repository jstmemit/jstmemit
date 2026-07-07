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
import { grokTweet } from "#/templates/grokTweet.tsx";
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
import { boykisserEnergy } from "#/templates/boykisserEnergy.tsx";
import { creativeMetaphor } from "#/templates/creativeMetaphor.tsx";
import { britishCuisine } from "#/templates/britishCuisine.tsx";
import { soGladIGrewUpWithThis } from "#/templates/soGladIGrewUpWithThis.tsx";
import { bumperSticker } from "#/templates/bumperSticker.tsx";
import { falklandWolf } from "#/templates/falklandWolf.tsx";
import { pleaseBePatient } from "#/templates/pleaseBePatient.tsx";
import { bbCooking } from "#/templates/bbCooking.tsx";
import { bbLetsCook } from "#/templates/bbLetsCook.tsx";
import { bbSayMyName } from "#/templates/bbSayMyName.tsx";
import { futuramaNotSureIfFry } from "#/templates/futuramaNotSureIfFry.tsx";
import { futuramaShutUpAndTakeMyMoney } from "#/templates/futuramaShutUpAndTakeMyMoney.tsx";
import { griffinsElephantAndPenguin } from "#/templates/griffinsElephantAndPenguin.tsx";
import { griffinsPeterGriffinRunningAway } from "#/templates/griffinsPeterGriffinRunningAway.tsx";
import { griffinsPeterGriffinThinking } from "#/templates/griffinsPeterGriffinThinking.tsx";
import { griffinsPeterWaitingForSomething } from "#/templates/griffinsPeterWaitingForSomething.tsx";
import { monaLisa } from "#/templates/monaLisa.tsx";
import { mrBeanWaiting } from "#/templates/mrBeanWaiting.tsx";
import { mrBeanWaiting1 } from "#/templates/mrBeanWaiting1.tsx";
import { pfAllToghether } from "#/templates/pfAllToghether.tsx";
import { pfCoffeeScene } from "#/templates/pfCoffeeScene.tsx";
import { pfConfusedTravolta } from "#/templates/pfConfusedTravolta.tsx";
import { pfSayWhatOneMoreTime } from "#/templates/pfSayWhatOneMoreTime.tsx";
import { pfTwoGangsterWithGuns } from "#/templates/pfTwoGangsterWithGuns.tsx";
import { saltBae } from "#/templates/saltBae.tsx";
import { sdFredUnmaskingGhost } from "#/templates/sdFredUnmaskingGhost.tsx";
import { simpsonsLIsaShowPresentation } from "#/templates/simpsonsLIsaShowPresentation.tsx";
import { simpsonsRalphImInDanger } from "#/templates/simpsonsRalphImInDanger.tsx";
import { spidermanPeterDance } from "#/templates/spidermanPeterDance.tsx";
import { spidermanPeterParkerWearingGlasses } from "#/templates/spidermanPeterParkerWearingGlasses.tsx";
import { spongebobBeggingVsTuxedo } from "#/templates/spongebobBeggingVsTuxedo.tsx";
import { dhGirlWithHandOverMouth } from "#/templates/dhGirlWithHandOverMouth.tsx";
import { griffinsLoisInBed } from "#/templates/griffensLoisInBed.tsx";
import { cinemaGuys } from "#/templates/cinemaGuys.tsx";
import { incomingCall } from "#/templates/incomingCall.tsx";
import { spongebobSacredTextBook } from "#/templates/spongebobSacredTextBook.tsx";
import { griffinsPeterSkinColor } from "#/templates/griffinsPeterSkinColor.tsx";
import { spongebobLongTodoList } from "#/templates/spongebobLongTodoList.tsx";
import { spongebobRainbow } from "#/templates/spongebobRainbow.tsx";
import { spongebobCaveman } from "#/templates/spongebobCaveman.tsx";
import { spongebobMonolith } from "#/templates/spongebobMonolith.tsx";
import { spongebobGrin } from "#/templates/spongebobGrin.tsx";
import { simpsonsHomerReadingBook } from "#/templates/simpsonsHomerReadingBook.tsx";
import { simpsonsMoeKickingOutBarney } from "#/templates/simpsonsMoeKickingOutBarney.tsx";
import { simpsonsThatsAPaddlin } from "#/templates/simpsonsThatsAPaddlin.tsx";
import { simpsonsTheWorstDayOfYourLifeSoFar } from "#/templates/simpsonsTheWorstDayOfYourLifeSoFar.tsx";
import { simpsonsHomerInLesbianBar } from "#/templates/simpsonsHomerInLesbianBar.tsx";
import { simpsonsMonkeyInHomerHead } from "#/templates/simpsonsMonkeyInHomerHead.tsx";
import { simpsonsScaryNews } from "#/templates/simpsonsScaryNews.tsx";
import { simpsonsAdultLisaAndBart } from "#/templates/simpsonsAdultLisaAndBart.tsx";
import { simpsonsMoeHoldingGunToHead } from "#/templates/simpsonsMoeHoldingGunToHead.tsx";
import { spongebobProud } from "#/templates/spongebobProud.tsx";
import { simpsonsWhatIsInHomersHead } from "#/templates/simpsonsWhatIsInHomersHead.tsx";
import { simpsonsWhatIsInHomersHead1 } from "#/templates/simpsonsWhatIsInHomersHead1.tsx";
import { quoteBottomText } from "#/templates/quoteBottomText.tsx";
import { quoteTopText } from "#/templates/quoteTopText.tsx";
import { simpsonsBartHitsHomerWithChair } from "#/templates/simpsonsBartHitsHomerWithChair.tsx";
import { griffinsPaddedWalls } from "#/templates/griffinsPaddedWalls.tsx";
import { griffinsPeterHurtsHisKnee } from "#/templates/griffinsPeterHurtsHisKnee.tsx";
import { futuramaFryReadingLetter } from "#/templates/futuramaFryReadingLetter.tsx";
import { futuramaBenderCaptcha } from "#/templates/futuramaBenderCaptcha.tsx";
import { futuramaBenderScared } from "#/templates/futuramaBenderScared.tsx";
import { futuramaZeroDaysSinceLast } from "#/templates/futuramaZeroDaysSinceLast.tsx";
import { simpsonsLemmyThinking } from "#/templates/simpsonsLemmyThinking.tsx";
import { simpsonsTwoSidesOfMrBurns } from "#/templates/simpsonsTwoSidesOfMrBurns.tsx";
import { simpsonsWhyYouLittle } from "#/templates/simpsonsWhyYouLittle.tsx";
import { futuramaFrySleeplessInsomnia } from "#/templates/futuramaFrySleeplessInsomnia.tsx";
import { futuramaZappBranniganAsDrake } from "#/templates/futuramaZappBranniganAsDrake.tsx";
import { futuramaBenderAsDrake } from "#/templates/futuramaBenderAsDrake.tsx";
import { futuramaSkeletons } from "#/templates/futuramaSkeletons.tsx";
import { futuramaToasterBoo } from "#/templates/futuramaToasterBoo.tsx";
import { spongebobHandsomeFace } from "#/templates/spongebobHandsomeFace.tsx";
import { griffinsPeterPickingADonkey } from "#/templates/griffinsPeterPickingADonkey.tsx";
import { griffinsPeterWriteALetter } from "#/templates/griffinsPeterWriteALetter.tsx";
import { griffinsPeterVsChicken } from "#/templates/griffinsPeterVsChicken.tsx";
import { simpsonsAtLeastYouTried } from "#/templates/simpsonsAtLeastYouTried.tsx";
import { simpsonsLisaStaring } from "#/templates/simpsonsLisaStaring.tsx";
import { simpsonsNotMyBoyfriendShirt } from "#/templates/simpsonsNotMyBoyfriendShirt.tsx";

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
            grokTweet,
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
            boykisserEnergy,
            creativeMetaphor,
            britishCuisine,
            soGladIGrewUpWithThis,
            bumperSticker,
            falklandWolf,
            pleaseBePatient,
            bbCooking,
            bbLetsCook,
            bbSayMyName,
            futuramaNotSureIfFry,
            futuramaShutUpAndTakeMyMoney,
            griffinsElephantAndPenguin,
            griffinsPeterGriffinRunningAway,
            griffinsPeterGriffinThinking,
            griffinsPeterWaitingForSomething,
            monaLisa,
            mrBeanWaiting,
            mrBeanWaiting1,
            pfAllToghether,
            pfCoffeeScene,
            pfConfusedTravolta,
            pfSayWhatOneMoreTime,
            pfTwoGangsterWithGuns,
            saltBae,
            sdFredUnmaskingGhost,
            simpsonsLIsaShowPresentation,
            simpsonsRalphImInDanger,
            spidermanPeterDance,
            spidermanPeterParkerWearingGlasses,
            spongebobBeggingVsTuxedo,
            dhGirlWithHandOverMouth,
            griffinsLoisInBed,
            cinemaGuys,
            incomingCall,
            spongebobSacredTextBook,
            griffinsPeterSkinColor,
            spongebobLongTodoList,
            spongebobRainbow,
            spongebobCaveman,
            spongebobMonolith,
            spongebobGrin,
            simpsonsHomerReadingBook,
            simpsonsMoeKickingOutBarney,
            simpsonsThatsAPaddlin,
            simpsonsTheWorstDayOfYourLifeSoFar,
            simpsonsHomerInLesbianBar,
            simpsonsMonkeyInHomerHead,
            simpsonsScaryNews,
            simpsonsAdultLisaAndBart,
            simpsonsMoeHoldingGunToHead,
            spongebobProud,
            simpsonsWhatIsInHomersHead,
            simpsonsWhatIsInHomersHead1,
            quoteBottomText,
            quoteTopText,
            simpsonsBartHitsHomerWithChair,
            griffinsPaddedWalls,
            griffinsPeterHurtsHisKnee,
            futuramaFryReadingLetter,
            futuramaBenderCaptcha,
            futuramaBenderScared,
            futuramaZeroDaysSinceLast,
            simpsonsLemmyThinking,
            simpsonsTwoSidesOfMrBurns,
            simpsonsWhyYouLittle,
            futuramaFrySleeplessInsomnia,
            futuramaZappBranniganAsDrake,
            futuramaBenderAsDrake,
            futuramaSkeletons,
            futuramaToasterBoo,
            spongebobHandsomeFace,
            griffinsPeterPickingADonkey,
            griffinsPeterWriteALetter,
            griffinsPeterVsChicken,
            simpsonsAtLeastYouTried,
            simpsonsLisaStaring,
            simpsonsNotMyBoyfriendShirt,
        ];
    }
}
