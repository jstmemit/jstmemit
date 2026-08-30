import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsMiyukiAndTsukasa: Template = {
    name: "lsMiyukiAndTsukasa",
    displayName: buildLocales("Miyuki and Tsukasa", {
        [Locale.Russian]: "Миюки и Цукаса",
        [Locale.Ukrainian]: "Міюкі та Цукаса",
        [Locale.Dutch]: "Miyuki en Tsukasa",
        [Locale.French]: "Miyuki et Tsukasa",
        [Locale.German]: "Miyuki und Tsukasa",
        [Locale.Polish]: "Miyuki i Tsukasa",
        [Locale.SpanishES]: "Miyuki y Tsukasa",
        [Locale.SpanishLATAM]: "Miyuki y Tsukasa",
        [Locale.PortugueseBR]: "Miyuki e Tsukasa",
        [Locale.Turkish]: "Miyuki ve Tsukasa",
        [Locale.Italian]: "Miyuki e Tsukasa",
        [Locale.Indonesian]: "Miyuki dan Tsukasa",
        [Locale.Czech]: "Miyuki a Tsukasa",
        [Locale.Japanese]: "みゆきとつかさ",
        [Locale.Korean]: "미유키와 츠카사",
        [Locale.ChineseCN]: "美幸和司",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 550,
    height: 406,
    animationDuration: 2700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsMiyukiAndTsukasa.gif"
                width={550}
                height={306}
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
