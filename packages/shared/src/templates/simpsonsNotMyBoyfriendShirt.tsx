import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsNotMyBoyfriendShirt: Template = {
    name: "simpsonsNotMyBoyfriendShirt",
    displayName: buildLocales("Not my boyfriend shirt", {
        [Locale.Russian]: "Футболка «не мой парень»",
        [Locale.Ukrainian]: "Футболка «не мій хлопець»",
        [Locale.Dutch]: "Shirt “niet mijn vriendje”",
        [Locale.French]: "T-shirt « pas mon copain »",
        [Locale.German]: "Shirt „nicht mein Freund“",
        [Locale.Polish]: "Koszulka „nie mój chłopak”",
        [Locale.SpanishES]: "Camiseta «no es mi novio»",
        [Locale.SpanishLATAM]: "Camiseta «no es mi novio»",
        [Locale.PortugueseBR]: "Camiseta “não é meu namorado”",
        [Locale.Turkish]: "“Erkek arkadaşım değil” tişörtü",
        [Locale.Italian]: "Maglietta «non è il mio ragazzo»",
        [Locale.Indonesian]: "Kaus “bukan pacarku”",
        [Locale.Czech]: "Tričko „není to můj kluk“",
        [Locale.Japanese]: "私の彼氏じゃないTシャツ",
        [Locale.Korean]: "내 남친 아님 티셔츠",
        [Locale.ChineseCN]: "不是我男朋友衬衫",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.DefaultText],
    width: 493,
    height: 750,
    texts: [],
    images: [
        { id: 0, description: "woman`s face" },
        { id: 1, description: "man`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsNotMyBoyfriendShirt.png"
                width={493}
                height={750}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "30%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "40%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
        </div>
    ),
};
