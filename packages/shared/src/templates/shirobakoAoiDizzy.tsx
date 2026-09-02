import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiDizzy: Template = {
    name: "shirobakoAoiDizzy",
    displayName: buildLocales("Aoi Miyamori dizzy", {
        [Locale.Russian]: "Аой Миямори с головокружением",
        [Locale.Ukrainian]: "Запаморочена Аой Міяморі",
        [Locale.Dutch]: "Duizelige Aoi Miyamori",
        [Locale.French]: "Aoi Miyamori étourdie",
        [Locale.German]: "Schwindelige Aoi Miyamori",
        [Locale.Polish]: "Oszołomiona Aoi Miyamori",
        [Locale.SpanishES]: "Aoi Miyamori mareada",
        [Locale.SpanishLATAM]: "Aoi Miyamori mareada",
        [Locale.PortugueseBR]: "Aoi Miyamori tonta",
        [Locale.Turkish]: "Başı dönen Aoi Miyamori",
        [Locale.Italian]: "Aoi Miyamori stordita",
        [Locale.Indonesian]: "Aoi Miyamori pusing",
        [Locale.Czech]: "Malátná Aoi Miyamori",
        [Locale.Japanese]: "目を回す宮森あおい",
        [Locale.Korean]: "어지러운 미야모리 아오이",
        [Locale.ChineseCN]: "头晕的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 3300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiDizzy.gif"
                width={500}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
