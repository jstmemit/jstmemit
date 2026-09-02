import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiExhausted: Template = {
    name: "shirobakoAoiExhausted",
    displayName: buildLocales("Aoi Miyamori exhausted", {
        [Locale.Russian]: "Изможденная Аой Миямори",
        [Locale.Ukrainian]: "Виснажена Аой Міяморі",
        [Locale.Dutch]: "Uitgeputte Aoi Miyamori",
        [Locale.French]: "Aoi Miyamori épuisée",
        [Locale.German]: "Erschöpfte Aoi Miyamori",
        [Locale.Polish]: "Wyczerpana Aoi Miyamori",
        [Locale.SpanishES]: "Aoi Miyamori exhausta",
        [Locale.SpanishLATAM]: "Aoi Miyamori exhausta",
        [Locale.PortugueseBR]: "Aoi Miyamori exausta",
        [Locale.Turkish]: "Bitkin Aoi Miyamori",
        [Locale.Italian]: "Aoi Miyamori esausta",
        [Locale.Indonesian]: "Aoi Miyamori kelelahan",
        [Locale.Czech]: "Vyčerpaná Aoi Miyamori",
        [Locale.Japanese]: "疲れ果てた宮森あおい",
        [Locale.Korean]: "지친 미야모리 아오이",
        [Locale.ChineseCN]: "精疲力尽的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 404,
    animationDuration: 2250,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiExhausted.gif"
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
