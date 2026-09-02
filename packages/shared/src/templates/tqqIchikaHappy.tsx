import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqIchikaHappy: Template = {
    name: "tqqIchikaHappy",
    displayName: buildLocales("Ichika happy", {
        [Locale.Russian]: "Счастливая Ичика",
        [Locale.Ukrainian]: "Щаслива Ічіка",
        [Locale.Dutch]: "Blije Ichika",
        [Locale.French]: "Ichika heureuse",
        [Locale.German]: "Glückliche Ichika",
        [Locale.Polish]: "Szczęśliwa Ichika",
        [Locale.SpanishES]: "Ichika feliz",
        [Locale.SpanishLATAM]: "Ichika feliz",
        [Locale.PortugueseBR]: "Ichika feliz",
        [Locale.Turkish]: "Mutlu Ichika",
        [Locale.Italian]: "Ichika felice",
        [Locale.Indonesian]: "Ichika senang",
        [Locale.Czech]: "Šťastná Ichika",
        [Locale.Japanese]: "喜ぶ一花",
        [Locale.Korean]: "행복한 이치카",
        [Locale.ChineseCN]: "开心的一花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 2900,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqIchikaHappy.gif"
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
