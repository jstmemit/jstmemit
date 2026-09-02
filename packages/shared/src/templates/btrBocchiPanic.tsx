import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiPanic: Template = {
    name: "btrBocchiPanic",
    displayName: buildLocales("Bocchi panic", {
        [Locale.Russian]: "Бокки в панике",
        [Locale.Ukrainian]: "Боккі в паніці",
        [Locale.Dutch]: "Bocchi in paniek",
        [Locale.French]: "Bocchi paniquée",
        [Locale.German]: "Bocchi in Panik",
        [Locale.Polish]: "Bocchi w panice",
        [Locale.SpanishES]: "Bocchi en pánico",
        [Locale.SpanishLATAM]: "Bocchi en pánico",
        [Locale.PortugueseBR]: "Bocchi em pânico",
        [Locale.Turkish]: "Bocchi panikte",
        [Locale.Italian]: "Bocchi in preda al panico",
        [Locale.Indonesian]: "Bocchi panik",
        [Locale.Czech]: "Bocchi v panice",
        [Locale.Japanese]: "パニックのぼっち",
        [Locale.Korean]: "패닉 봇치",
        [Locale.ChineseCN]: "波奇恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 404,
    animationDuration: 6880,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiPanic.gif"
                width={540}
                height={304}
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
