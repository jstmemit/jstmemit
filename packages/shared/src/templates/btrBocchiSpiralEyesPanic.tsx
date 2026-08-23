import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiSpiralEyesPanic: Template = {
    name: "btrBocchiSpiralEyesPanic",
    displayName: buildLocales("Bocchi spiral eyes panic", {
        [Locale.Russian]: "Бокки в панике с глазами-спиралями",
        [Locale.Ukrainian]: "Боккі в паніці з очима-спіралями",
        [Locale.Dutch]: "Bocchi in paniek met spiraalogen",
        [Locale.French]: "Bocchi paniquée avec des yeux en spirale",
        [Locale.German]: "Bocchi in Panik mit Spiralaugen",
        [Locale.Polish]: "Bocchi w panice z oczami-spiralami",
        [Locale.SpanishES]: "Bocchi en pánico con ojos en espiral",
        [Locale.SpanishLATAM]: "Bocchi en pánico con ojos en espiral",
        [Locale.PortugueseBR]: "Bocchi em pânico com olhos em espiral",
        [Locale.Turkish]: "Bocchi panikte spiral gözlerle",
        [Locale.Italian]: "Bocchi in preda al panico con occhi a spirale",
        [Locale.Indonesian]: "Bocchi panik dengan mata spiral",
        [Locale.Czech]: "Bocchi v panice se spirálovýma očima",
        [Locale.Japanese]: "目がぐるぐるでパニックのぼっち",
        [Locale.Korean]: "소용돌이 눈 패닉 봇치",
        [Locale.ChineseCN]: "波奇漩涡眼恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground],
    width: 800,
    height: 580,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiSpiralEyesPanic.png"
                width={800}
                height={450}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
