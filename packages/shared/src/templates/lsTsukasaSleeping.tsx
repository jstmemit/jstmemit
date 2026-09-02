import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsTsukasaSleeping: Template = {
    name: "lsTsukasaSleeping",
    displayName: buildLocales("Tsukasa sleeping", {
        [Locale.Russian]: "Цукаса спит",
        [Locale.Ukrainian]: "Цукаса спить",
        [Locale.Dutch]: "Slapende Tsukasa",
        [Locale.French]: "Tsukasa dormant",
        [Locale.German]: "Schlafende Tsukasa",
        [Locale.Polish]: "Śpiąca Tsukasa",
        [Locale.SpanishES]: "Tsukasa durmiendo",
        [Locale.SpanishLATAM]: "Tsukasa durmiendo",
        [Locale.PortugueseBR]: "Tsukasa dormindo",
        [Locale.Turkish]: "Uyuyan Tsukasa",
        [Locale.Italian]: "Tsukasa che dorme",
        [Locale.Indonesian]: "Tsukasa tidur",
        [Locale.Czech]: "Spící Tsukasa",
        [Locale.Japanese]: "寝ているつかさ",
        [Locale.Korean]: "자는 츠카사",
        [Locale.ChineseCN]: "睡觉的司",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 404,
    animationDuration: 1860,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsTsukasaSleeping.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
