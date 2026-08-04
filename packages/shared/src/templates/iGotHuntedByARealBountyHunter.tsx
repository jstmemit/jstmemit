import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const iGotHuntedByARealBountyHunter: Template = {
    name: "iGotHuntedByARealBountyHunter",
    displayName: buildLocales("I got hunted by a real bounty hunter", {
        [Locale.Russian]: "За мной охотился настоящий охотник за головами",
        [Locale.Ukrainian]: "За мною полював справжній мисливець за головами",
        [Locale.Dutch]: "Ik werd opgejaagd door een echte premiejager",
        [Locale.French]: "J'ai été chassé par un vrai chasseur de primes",
        [Locale.German]: "Ich wurde von einem echten Kopfgeldjäger gejagt",
        [Locale.Polish]: "Ścigał mnie prawdziwy łowca nagród",
        [Locale.SpanishES]: "Fui cazado por un cazarrecompensas real",
        [Locale.SpanishLATAM]: "Fui cazado por un cazarrecompensas real",
        [Locale.PortugueseBR]: "Fui caçado por um caçador de recompensas real",
        [Locale.Turkish]: "Gerçek bir ödül avcısı tarafından avlandım",
        [Locale.Italian]: "Sono stato braccato da un vero cacciatore di taglie",
        [Locale.Indonesian]: "Saya diburu oleh pemburu hadiah sungguhan",
        [Locale.Czech]: "Lovil mě opravdový lovec odměn",
        [Locale.Japanese]: "本物の賞金稼ぎに追われました",
        [Locale.Korean]: "진짜 현상금 사냥꾼에게 쫓겼습니다",
        [Locale.ChineseCN]: "我被真正的赏金猎人追捕",
    }),
    topics: [Topic.YouTube],
    types: [Type.DefaultText, Type.ObjectImage],
    width: 621,
    height: 426,
    texts: [],
    images: [{ id: 0, description: "the thumbnail subject" }],
    element: ({ images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src={images[0]}
                width={621}
                height={300}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ytthumbnail4.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    ),
};
