import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfLoidOnGuard: Template = {
    name: "sfLoidOnGuard",
    displayName: buildLocales("Loid on guard", {
        [Locale.Russian]: "Лойд начеку",
        [Locale.Ukrainian]: "Лойд насторожі",
        [Locale.Dutch]: "Loid op zijn hoede",
        [Locale.French]: "Loid sur ses gardes",
        [Locale.German]: "Loid auf der Hut",
        [Locale.Polish]: "Loid w gotowości",
        [Locale.SpanishES]: "Loid en guardia",
        [Locale.SpanishLATAM]: "Loid en guardia",
        [Locale.PortugueseBR]: "Loid em guarda",
        [Locale.Turkish]: "Loid tetikte",
        [Locale.Italian]: "Loid in guardia",
        [Locale.Indonesian]: "Loid waspada",
        [Locale.Czech]: "Loid na stráži",
        [Locale.Japanese]: "警戒するロイド",
        [Locale.Korean]: "경계하는 로이드",
        [Locale.ChineseCN]: "警戒的劳埃德",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 2050,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfLoidOnGuard.gif"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
