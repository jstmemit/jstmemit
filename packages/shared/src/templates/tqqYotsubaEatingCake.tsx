import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqYotsubaEatingCake: Template = {
    name: "tqqYotsubaEatingCake",
    displayName: buildLocales("Yotsuba eating cake", {
        [Locale.Russian]: "Йоцуба ест торт",
        [Locale.Ukrainian]: "Йоцуба їсть торт",
        [Locale.Dutch]: "Taart etende Yotsuba",
        [Locale.French]: "Yotsuba mangeant du gâteau",
        [Locale.German]: "Kuchen essende Yotsuba",
        [Locale.Polish]: "Yotsuba jedząca ciasto",
        [Locale.SpanishES]: "Yotsuba comiendo pastel",
        [Locale.SpanishLATAM]: "Yotsuba comiendo pastel",
        [Locale.PortugueseBR]: "Yotsuba comendo bolo",
        [Locale.Turkish]: "Pasta yiyen Yotsuba",
        [Locale.Italian]: "Yotsuba che mangia una torta",
        [Locale.Indonesian]: "Yotsuba makan kue",
        [Locale.Czech]: "Yotsuba jedící dort",
        [Locale.Japanese]: "ケーキを食べる四葉",
        [Locale.Korean]: "케이크를 먹는 요츠바",
        [Locale.ChineseCN]: "吃蛋糕的四叶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 996,
    height: 498,
    animationDuration: 850,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqYotsubaEatingCake.gif"
                width={498}
                height={498}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
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
