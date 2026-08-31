import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiKofukuSmiling: Template = {
    name: "noragamiKofukuSmiling",
    displayName: buildLocales("Kofuku smiling", {
        [Locale.Russian]: "Кофуку улыбается",
        [Locale.Ukrainian]: "Кофуку посміхається",
        [Locale.Dutch]: "Glimlachende Kofuku",
        [Locale.French]: "Kofuku souriante",
        [Locale.German]: "Lächelnde Kofuku",
        [Locale.Polish]: "Uśmiechnięta Kofuku",
        [Locale.SpanishES]: "Kofuku sonriendo",
        [Locale.SpanishLATAM]: "Kofuku sonriendo",
        [Locale.PortugueseBR]: "Kofuku sorrindo",
        [Locale.Turkish]: "Gülümseyen Kofuku",
        [Locale.Italian]: "Kofuku che sorride",
        [Locale.Indonesian]: "Kofuku tersenyum",
        [Locale.Czech]: "Usmívající se Kofuku",
        [Locale.Japanese]: "微笑む小福",
        [Locale.Korean]: "미소 짓는 코후쿠",
        [Locale.ChineseCN]: "微笑的小福",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 400,
    height: 400,
    animationDuration: 3500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/noragamiKofukuSmiling.gif"
                width={400}
                height={320}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "80px",
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
