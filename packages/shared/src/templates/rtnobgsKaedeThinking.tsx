import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsKaedeThinking: Template = {
    name: "rtnobgsKaedeThinking",
    displayName: buildLocales("Kaede thinking", {
        [Locale.Russian]: "Каэдэ думает",
        [Locale.Ukrainian]: "Каеде думає",
        [Locale.Dutch]: "Denkende Kaede",
        [Locale.French]: "Kaede pensive",
        [Locale.German]: "Nachdenkliche Kaede",
        [Locale.Polish]: "Zamyślona Kaede",
        [Locale.SpanishES]: "Kaede pensando",
        [Locale.SpanishLATAM]: "Kaede pensando",
        [Locale.PortugueseBR]: "Kaede pensando",
        [Locale.Turkish]: "Düşünen Kaede",
        [Locale.Italian]: "Kaede che pensa",
        [Locale.Indonesian]: "Kaede berpikir",
        [Locale.Czech]: "Přemýšlející Kaede",
        [Locale.Japanese]: "考えるかえで",
        [Locale.Korean]: "생각하는 카에데",
        [Locale.ChineseCN]: "思考的枫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1440,
    height: 720,
    animationDuration: 6000,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsKaedeThinking.gif"
                width={720}
                height={720}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "25px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
