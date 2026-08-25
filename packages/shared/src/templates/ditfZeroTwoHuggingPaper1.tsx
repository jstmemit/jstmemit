import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ditfZeroTwoHuggingPaper1: Template = {
    name: "ditfZeroTwoHuggingPaper1",
    displayName: buildLocales("Zero Two hugging paper 1", {
        [Locale.Russian]: "Зеро Ту обнимает бумагу 1",
        [Locale.Ukrainian]: "Зіро Ту обіймає папір 1",
        [Locale.Dutch]: "Zero Two knuffelt papier 1",
        [Locale.French]: "Zero Two enlace une feuille de papier 1",
        [Locale.German]: "Zero Two umarmt ein Blatt Papier 1",
        [Locale.Polish]: "Zero Two przytula kartkę 1",
        [Locale.SpanishES]: "Zero Two abrazando un papel 1",
        [Locale.SpanishLATAM]: "Zero Two abrazando un papel 1",
        [Locale.PortugueseBR]: "Zero Two abraçando um papel 1",
        [Locale.Turkish]: "Zero Two kağıda sarılıyor 1",
        [Locale.Italian]: "Zero Two abbraccia un foglio 1",
        [Locale.Indonesian]: "Zero Two memeluk kertas 1",
        [Locale.Czech]: "Zero Two objímá papír 1",
        [Locale.Japanese]: "紙を抱きしめるゼロツー 1",
        [Locale.Korean]: "종이를 껴안는 제로투 1",
        [Locale.ChineseCN]: "02抱着纸 1",
    }),
    topics: [Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.FaceImage, Type.TextTopWithBackground],
    width: 732,
    height: 827,
    texts: [],
    images: [
        { id: 0, description: "Zero Two's face" },
        { id: 1, description: "image on the paper" },
    ],
    element: ({ images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src={images[1]}
                width={635}
                height={400}
                style={{
                    position: "absolute",
                    left: "6%",
                    top: 0,
                    objectFit: "cover",
                    transform: "rotate(-3deg)",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoHuggingPaper1.png"
                width={732}
                height={827}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={170}
                height={170}
                style={{ position: "absolute", bottom: 160, left: 240, borderRadius: "100%", objectFit: "cover" }}
            />
        </div>
    ),
};
