import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsTwoSidesOfMrBurns: Template = {
    name: "simpsonsTwoSidesOfMrBurns",
    displayName: buildLocales("Two sides of Mr. Burns", {
        [Locale.Russian]: "Две стороны мистера Бернса",
        [Locale.Ukrainian]: "Дві сторони містера Бернса",
        [Locale.Dutch]: "Twee kanten van Mr. Burns",
        [Locale.French]: "Les deux visages de M. Burns",
        [Locale.German]: "Zwei Seiten von Mr. Burns",
        [Locale.Polish]: "Dwie twarze pana Burnsa",
        [Locale.SpanishES]: "Dos lados de Mr. Burns",
        [Locale.SpanishLATAM]: "Dos lados del Sr. Burns",
        [Locale.PortugueseBR]: "Dois lados do Sr. Burns",
        [Locale.Turkish]: "Bay Burns'ün iki yüzü",
        [Locale.Italian]: "I due lati del signor Burns",
        [Locale.Indonesian]: "Dua sisi Tuan Burns",
        [Locale.Czech]: "Dvě tváře pana Burnse",
        [Locale.Japanese]: "バーンズ社長の二面性",
        [Locale.Korean]: "번즈 사장의 두 얼굴",
        [Locale.ChineseCN]: "伯恩斯先生的两面",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextTopWithBackground, Type.TwoOption],
    width: 1200,
    height: 855,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 8 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsTwoSidesOfMrBurns.png"
                width={1200}
                height={655}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
