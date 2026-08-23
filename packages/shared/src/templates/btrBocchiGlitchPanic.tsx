import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiGlitchPanic: Template = {
    name: "btrBocchiGlitchPanic",
    displayName: buildLocales("Bocchi glitch panic", {
        [Locale.Russian]: "Бокки в панике глючит",
        [Locale.Ukrainian]: "Боккі в паніці глючить",
        [Locale.Dutch]: "Bocchi glitcht in paniek",
        [Locale.French]: "Bocchi bug et panique",
        [Locale.German]: "Bocchi glitcht in Panik",
        [Locale.Polish]: "Bocchi glitchuje w panice",
        [Locale.SpanishES]: "Bocchi con glitch y pánico",
        [Locale.SpanishLATAM]: "Bocchi con glitch y pánico",
        [Locale.PortugueseBR]: "Bocchi bugando em pânico",
        [Locale.Turkish]: "Bocchi panikte bozuluyor",
        [Locale.Italian]: "Bocchi in glitch e panico",
        [Locale.Indonesian]: "Bocchi glitch panik",
        [Locale.Czech]: "Bocchi glitchuje v panice",
        [Locale.Japanese]: "パニックでグリッチするぼっち",
        [Locale.Korean]: "패닉 글리치 봇치",
        [Locale.ChineseCN]: "波奇故障恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 1200,
    height: 805,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiGlitchPanic.png"
                width={1200}
                height={805}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
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
                        fontSize: 50,
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
