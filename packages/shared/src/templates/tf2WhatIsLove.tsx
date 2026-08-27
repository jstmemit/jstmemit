import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tf2WhatIsLove: Template = {
    name: "tf2WhatIsLove",
    displayName: buildLocales("What is love", {
        [Locale.Russian]: "Что такое любовь",
        [Locale.Ukrainian]: "Що таке любов",
        [Locale.Dutch]: "Wat is liefde",
        [Locale.French]: "Qu'est-ce que l'amour",
        [Locale.German]: "Was ist Liebe",
        [Locale.Polish]: "Czym jest miłość",
        [Locale.SpanishES]: "Qué es el amor",
        [Locale.SpanishLATAM]: "Qué es el amor",
        [Locale.PortugueseBR]: "O que é o amor",
        [Locale.Turkish]: "Aşk nedir",
        [Locale.Italian]: "Cos'è l'amore",
        [Locale.Indonesian]: "Apa itu cinta",
        [Locale.Czech]: "Co je láska",
        [Locale.Japanese]: "愛とは何か",
        [Locale.Korean]: "사랑이란 무엇인가",
        [Locale.ChineseCN]: "什么是爱",
    }),
    topics: [Topic.Reaction, Topic.Games, Topic.TeamFortress2],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 423,
    animationDuration: 920,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tf2WhatIsLove.gif"
                width={500}
                height={333}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                        fontSize: fontSize(texts[0]),
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
