import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiSpiralEyesPanic1: Template = {
    name: "btrBocchiSpiralEyesPanic1",
    displayName: buildLocales("Bocchi spiral eyes panic 1", {
        [Locale.Russian]: "Бокки в панике с глазами-спиралями 1",
        [Locale.Ukrainian]: "Боккі в паніці з очима-спіралями 1",
        [Locale.Dutch]: "Bocchi in paniek met spiraalogen 1",
        [Locale.French]: "Bocchi paniquée avec des yeux en spirale 1",
        [Locale.German]: "Bocchi in Panik mit Spiralaugen 1",
        [Locale.Polish]: "Bocchi w panice z oczami-spiralami 1",
        [Locale.SpanishES]: "Bocchi en pánico con ojos en espiral 1",
        [Locale.SpanishLATAM]: "Bocchi en pánico con ojos en espiral 1",
        [Locale.PortugueseBR]: "Bocchi em pânico com olhos em espiral 1",
        [Locale.Turkish]: "Bocchi panikte spiral gözlerle 1",
        [Locale.Italian]: "Bocchi in preda al panico con occhi a spirale 1",
        [Locale.Indonesian]: "Bocchi panik dengan mata spiral 1",
        [Locale.Czech]: "Bocchi v panice se spirálovýma očima 1",
        [Locale.Japanese]: "目がぐるぐるでパニックのぼっち 1",
        [Locale.Korean]: "소용돌이 눈 패닉 봇치 1",
        [Locale.ChineseCN]: "波奇漩涡眼恐慌 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiSpiralEyesPanic1.gif"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
