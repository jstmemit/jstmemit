import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiGlitch: Template = {
    name: "btrBocchiGlitch",
    displayName: buildLocales("Bocchi glitch", {
        [Locale.Russian]: "Бокки глючит",
        [Locale.Ukrainian]: "Боккі глючить",
        [Locale.Dutch]: "Bocchi glitcht",
        [Locale.French]: "Bocchi qui bug",
        [Locale.German]: "Bocchi glitcht",
        [Locale.Polish]: "Bocchi się glitchuje",
        [Locale.SpanishES]: "Bocchi con glitch",
        [Locale.SpanishLATAM]: "Bocchi con glitch",
        [Locale.PortugueseBR]: "Bocchi bugando",
        [Locale.Turkish]: "Bocchi bozuluyor (glitch)",
        [Locale.Italian]: "Bocchi in glitch",
        [Locale.Indonesian]: "Bocchi glitch",
        [Locale.Czech]: "Bocchi glitchuje",
        [Locale.Japanese]: "グリッチするぼっち",
        [Locale.Korean]: "글리치 봇치",
        [Locale.ChineseCN]: "波奇故障画面",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 2380,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiGlitch.gif"
                width={498}
                height={280}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
