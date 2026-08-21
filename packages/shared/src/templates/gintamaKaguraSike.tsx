import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaKaguraSike: Template = {
    name: "gintamaKaguraSike",
    displayName: buildLocales('Kagura "Sike"', {
        [Locale.Russian]: "Кагура: «Шутка!»",
        [Locale.Ukrainian]: "Кагура: «Жарт!»",
        [Locale.Dutch]: 'Kagura: "Grapje!"',
        [Locale.French]: "Kagura : « Je rigole ! »",
        [Locale.German]: "Kagura: „Reingelegt!“",
        [Locale.Polish]: "Kagura: „Żart!”",
        [Locale.SpanishES]: "Kagura: «¡Es broma!»",
        [Locale.SpanishLATAM]: "Kagura: «¡Te la creíste!»",
        [Locale.PortugueseBR]: 'Kagura: "Pegadinha!"',
        [Locale.Turkish]: 'Kagura: "Şaka şaka!"',
        [Locale.Italian]: "Kagura: «Scherzavo!»",
        [Locale.Indonesian]: 'Kagura: "Bercanda!"',
        [Locale.Czech]: "Kagura: „Dělám si srandu!“",
        [Locale.Japanese]: "神楽の「なんちゃって」",
        [Locale.Korean]: '카구라: "뻥이지롱!"',
        [Locale.ChineseCN]: "神乐：“骗你的！”",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 370,
    animationDuration: 1700,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaKaguraSike.gif"
                width={500}
                height={280}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
