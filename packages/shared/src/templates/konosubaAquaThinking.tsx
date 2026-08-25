import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaThinking: Template = {
    name: "konosubaAquaThinking",
    displayName: buildLocales("Thinking Aqua", {
        [Locale.Russian]: "Задумчивая Аква",
        [Locale.Ukrainian]: "Замислена Аква",
        [Locale.Dutch]: "Denkende Aqua",
        [Locale.French]: "Aqua qui réfléchit",
        [Locale.German]: "Denkende Aqua",
        [Locale.Polish]: "Myśląca Aqua",
        [Locale.SpanishES]: "Aqua pensando",
        [Locale.SpanishLATAM]: "Aqua pensando",
        [Locale.PortugueseBR]: "Aqua pensando",
        [Locale.Turkish]: "Düşünen Aqua",
        [Locale.Italian]: "Aqua che pensa",
        [Locale.Indonesian]: "Aqua berpikir",
        [Locale.Czech]: "Přemýšlející Aqua",
        [Locale.Japanese]: "考えるアクア",
        [Locale.Korean]: "생각하는 아쿠아",
        [Locale.ChineseCN]: "思考的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 2130,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaThinking.gif"
                width={500}
                height={281}
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
