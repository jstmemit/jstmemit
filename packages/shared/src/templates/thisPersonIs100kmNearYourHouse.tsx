import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const thisPersonIs100kmNearYourHouse: Template = {
    name: "thisPersonIs100kmNearYourHouse",
    displayName: buildLocales("This person is 100km near your house", {
        [Locale.Russian]: "Этот человек находится в 100 км от вашего дома",
        [Locale.Ukrainian]: "Ця людина знаходиться в 100 км від вашого дому",
        [Locale.Dutch]: "Deze persoon is 100 km bij je huis vandaan",
        [Locale.French]: "Cette personne est à 100 km de chez vous",
        [Locale.German]: "Diese Person ist 100 km von deinem Haus entfernt",
        [Locale.Polish]: "Ta osoba jest 100 km od twojego domu",
        [Locale.SpanishES]: "Esta persona está a 100 km de tu casa",
        [Locale.SpanishLATAM]: "Esta persona está a 100 km de tu casa",
        [Locale.PortugueseBR]: "Esta pessoa está a 100 km da sua casa",
        [Locale.Turkish]: "Bu kişi evinize 100 km uzakta",
        [Locale.Italian]: "Questa persona è a 100 km da casa tua",
        [Locale.Indonesian]: "Orang ini berjarak 100km dari rumahmu",
        [Locale.Czech]: "Tato osoba je 100 km od vašeho domu",
        [Locale.Japanese]: "この人はあなたの家から100km以内にいます",
        [Locale.Korean]: "이 사람은 당신의 집에서 100km 거리에 있습니다",
        [Locale.ChineseCN]: "这个人离你家100公里",
    }),
    topics: [Topic.Misc],
    types: [Type.FaceImage, Type.DefaultText],
    width: 498,
    height: 464,
    texts: [],
    images: [{ id: 0, description: "Person face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/thisPersonIs100kmNearYourHouse.png"
                width={498}
                height={464}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
        </div>
    ),
};
