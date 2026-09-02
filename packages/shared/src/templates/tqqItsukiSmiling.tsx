import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqItsukiSmiling: Template = {
    name: "tqqItsukiSmiling",
    displayName: buildLocales("Itsuki smiling", {
        [Locale.Russian]: "Улыбающаяся Ицуки",
        [Locale.Ukrainian]: "Усміхнена Іцукі",
        [Locale.Dutch]: "Glimlachende Itsuki",
        [Locale.French]: "Itsuki souriante",
        [Locale.German]: "Lächelnde Itsuki",
        [Locale.Polish]: "Uśmiechnięta Itsuki",
        [Locale.SpanishES]: "Itsuki sonriendo",
        [Locale.SpanishLATAM]: "Itsuki sonriendo",
        [Locale.PortugueseBR]: "Itsuki sorrindo",
        [Locale.Turkish]: "Gülümseyen Itsuki",
        [Locale.Italian]: "Itsuki che sorride",
        [Locale.Indonesian]: "Itsuki tersenyum",
        [Locale.Czech]: "Usmívající se Itsuki",
        [Locale.Japanese]: "微笑む五月",
        [Locale.Korean]: "미소 짓는 이츠키",
        [Locale.ChineseCN]: "微笑的五月",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 919,
    height: 981,
    animationDuration: 1400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqItsukiSmiling.gif"
                width={919}
                height={801}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "180px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
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
