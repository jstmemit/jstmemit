import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const iSteppedInShit: Template = {
    name: "iSteppedInShit",
    displayName: buildLocales("I stepped in shit", {
        [Locale.Russian]: "Я наступил в дерьмо",
        [Locale.Ukrainian]: "Я наступив у лайно",
        [Locale.Dutch]: "Ik ben in de stront gestapt",
        [Locale.French]: "J'ai marché dans la merde",
        [Locale.German]: "Ich bin in Scheiße getreten",
        [Locale.Polish]: "Wdepnąłem w gówno",
        [Locale.SpanishES]: "Pisé mierda",
        [Locale.SpanishLATAM]: "Pisé caca",
        [Locale.PortugueseBR]: "Eu pisei em merda",
        [Locale.Turkish]: "Boka bastım",
        [Locale.Italian]: "Ho pestato una cacca",
        [Locale.Indonesian]: "Saya menginjak kotoran",
        [Locale.Czech]: "Šlápl jsem do hovna",
        [Locale.Japanese]: "クソを踏んじゃった",
        [Locale.Korean]: "똥을 밟았어",
        [Locale.ChineseCN]: "我踩到屎了",
    }),
    topics: [Topic.Cartoons],
    types: [Type.FaceImage, Type.DefaultText],
    width: 636,
    height: 900,
    texts: [],
    images: [
        { id: 0, description: "person face" },
        { id: 1, description: "person face on foot" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/iSteppedInShit.jpg"
                width={636}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 310,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    bottom: 100,
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
