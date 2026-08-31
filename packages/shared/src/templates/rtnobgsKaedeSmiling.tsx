import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsKaedeSmiling: Template = {
    name: "rtnobgsKaedeSmiling",
    displayName: buildLocales("Kaede smiling", {
        [Locale.Russian]: "Каэдэ улыбается",
        [Locale.Ukrainian]: "Каеде посміхається",
        [Locale.Dutch]: "Glimlachende Kaede",
        [Locale.French]: "Kaede souriante",
        [Locale.German]: "Lächelnde Kaede",
        [Locale.Polish]: "Uśmiechnięta Kaede",
        [Locale.SpanishES]: "Kaede sonriendo",
        [Locale.SpanishLATAM]: "Kaede sonriendo",
        [Locale.PortugueseBR]: "Kaede sorrindo",
        [Locale.Turkish]: "Gülümseyen Kaede",
        [Locale.Italian]: "Kaede che sorride",
        [Locale.Indonesian]: "Kaede tersenyum",
        [Locale.Czech]: "Usmívající se Kaede",
        [Locale.Japanese]: "微笑むかえで",
        [Locale.Korean]: "미소 짓는 카에데",
        [Locale.ChineseCN]: "微笑的枫",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 473,
    height: 387,
    animationDuration: 1680,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsKaedeSmiling.gif"
                width={473}
                height={297}
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
