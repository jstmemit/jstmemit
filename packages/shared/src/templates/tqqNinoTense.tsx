import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqNinoTense: Template = {
    name: "tqqNinoTense",
    displayName: buildLocales("Nino tense", {
        [Locale.Russian]: "Напряженная Нино",
        [Locale.Ukrainian]: "Напружена Ніно",
        [Locale.Dutch]: "Gespannen Nino",
        [Locale.French]: "Nino tendue",
        [Locale.German]: "Angespannte Nino",
        [Locale.Polish]: "Spięta Nino",
        [Locale.SpanishES]: "Nino tensa",
        [Locale.SpanishLATAM]: "Nino tensa",
        [Locale.PortugueseBR]: "Nino tensa",
        [Locale.Turkish]: "Gergin Nino",
        [Locale.Italian]: "Nino tesa",
        [Locale.Indonesian]: "Nino tegang",
        [Locale.Czech]: "Napjatá Nino",
        [Locale.Japanese]: "緊張する二乃",
        [Locale.Korean]: "긴장한 니노",
        [Locale.ChineseCN]: "紧张的二乃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 1380,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqNinoTense.gif"
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
