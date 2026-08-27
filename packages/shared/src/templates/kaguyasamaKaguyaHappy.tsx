import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaKaguyaHappy: Template = {
    name: "kaguyasamaKaguyaHappy",
    displayName: buildLocales("Happy Kaguya", {
        [Locale.Russian]: "Счастливая Кагуя",
        [Locale.Ukrainian]: "Щаслива Каґуя",
        [Locale.Dutch]: "Blije Kaguya",
        [Locale.French]: "Kaguya heureuse",
        [Locale.German]: "Glückliche Kaguya",
        [Locale.Polish]: "Szczęśliwa Kaguya",
        [Locale.SpanishES]: "Kaguya feliz",
        [Locale.SpanishLATAM]: "Kaguya feliz",
        [Locale.PortugueseBR]: "Kaguya feliz",
        [Locale.Turkish]: "Mutlu Kaguya",
        [Locale.Italian]: "Kaguya felice",
        [Locale.Indonesian]: "Kaguya bahagia",
        [Locale.Czech]: "Šťastná Kaguya",
        [Locale.Japanese]: "幸せなかぐや",
        [Locale.Korean]: "행복한 카구야",
        [Locale.ChineseCN]: "开心的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 1680,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaHappy.gif"
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
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
