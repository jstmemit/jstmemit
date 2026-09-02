import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqMikuSmiling: Template = {
    name: "tqqMikuSmiling",
    displayName: buildLocales("Miku smiling", {
        [Locale.Russian]: "Улыбающаяся Мику",
        [Locale.Ukrainian]: "Усміхнена Міку",
        [Locale.Dutch]: "Glimlachende Miku",
        [Locale.French]: "Miku souriante",
        [Locale.German]: "Lächelnde Miku",
        [Locale.Polish]: "Uśmiechnięta Miku",
        [Locale.SpanishES]: "Miku sonriendo",
        [Locale.SpanishLATAM]: "Miku sonriendo",
        [Locale.PortugueseBR]: "Miku sorrindo",
        [Locale.Turkish]: "Gülümseyen Miku",
        [Locale.Italian]: "Miku che sorride",
        [Locale.Indonesian]: "Miku tersenyum",
        [Locale.Czech]: "Usmívající se Miku",
        [Locale.Japanese]: "微笑む三玖",
        [Locale.Korean]: "미소 짓는 미쿠",
        [Locale.ChineseCN]: "微笑的三玖",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 1850,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqMikuSmiling.gif"
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
