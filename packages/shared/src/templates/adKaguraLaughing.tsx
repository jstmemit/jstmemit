import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adKaguraLaughing: Template = {
    name: "adKaguraLaughing",
    displayName: buildLocales("Kagura laughing", {
        [Locale.Russian]: "Кагура смеется",
        [Locale.Ukrainian]: "Кагура сміється",
        [Locale.Dutch]: "Kagura lacht",
        [Locale.French]: "Kagura rit",
        [Locale.German]: "Kagura lacht",
        [Locale.Polish]: "Kagura się śmieje",
        [Locale.SpanishES]: "Kagura riendo",
        [Locale.SpanishLATAM]: "Kagura riendo",
        [Locale.PortugueseBR]: "Kagura rindo",
        [Locale.Turkish]: "Kagura gülüyor",
        [Locale.Italian]: "Kagura ride",
        [Locale.Indonesian]: "Kagura tertawa",
        [Locale.Czech]: "Kagura se směje",
        [Locale.Japanese]: "神楽 笑う",
        [Locale.Korean]: "카구라 웃음",
        [Locale.ChineseCN]: "神乐大笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 473,
    animationDuration: 1800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adKaguraLaughing.gif"
                width={498}
                height={373}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
