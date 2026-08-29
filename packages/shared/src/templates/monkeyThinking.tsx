import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const monkeyThinking: Template = {
    name: "monkeyThinking",
    displayName: buildLocales("Monkey thinking", {
        [Locale.Russian]: "Задумавшаяся обезьяна",
        [Locale.Ukrainian]: "Замислена мавпа",
        [Locale.Dutch]: "Nadenkende aap",
        [Locale.French]: "Singe pensif",
        [Locale.German]: "Nachdenklicher Affe",
        [Locale.Polish]: "Myśląca małpa",
        [Locale.SpanishES]: "Mono pensando",
        [Locale.SpanishLATAM]: "Mono pensando",
        [Locale.PortugueseBR]: "Macaco pensando",
        [Locale.Turkish]: "Düşünen maymun",
        [Locale.Italian]: "Scimmia che pensa",
        [Locale.Indonesian]: "Monyet berpikir",
        [Locale.Czech]: "Přemýšlející opice",
        [Locale.Japanese]: "考えるサル",
        [Locale.Korean]: "생각하는 원숭이",
        [Locale.ChineseCN]: "思考的猴子",
    }),
    topics: [Topic.Animals, Topic.Reaction],
    types: [Type.TextTopWithBackground],
    width: 800,
    height: 699,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/monkeyThinking.jpg"
                width={800}
                height={699}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "24%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
