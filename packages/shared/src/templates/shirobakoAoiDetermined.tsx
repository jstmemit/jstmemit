import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiDetermined: Template = {
    name: "shirobakoAoiDetermined",
    displayName: buildLocales("Aoi Miyamori determined", {
        [Locale.Russian]: "Решительная Аой Миямори",
        [Locale.Ukrainian]: "Рішуча Аой Міяморі",
        [Locale.Dutch]: "Vastberaden Aoi Miyamori",
        [Locale.French]: "Aoi Miyamori déterminée",
        [Locale.German]: "Entschlossene Aoi Miyamori",
        [Locale.Polish]: "Zdeterminowana Aoi Miyamori",
        [Locale.SpanishES]: "Aoi Miyamori decidida",
        [Locale.SpanishLATAM]: "Aoi Miyamori decidida",
        [Locale.PortugueseBR]: "Aoi Miyamori determinada",
        [Locale.Turkish]: "Kararlı Aoi Miyamori",
        [Locale.Italian]: "Aoi Miyamori determinata",
        [Locale.Indonesian]: "Aoi Miyamori bertekad",
        [Locale.Czech]: "Odhodlaná Aoi Miyamori",
        [Locale.Japanese]: "決意に満ちた宮森あおい",
        [Locale.Korean]: "결의에 찬 미야모리 아오이",
        [Locale.ChineseCN]: "下定决心的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 600,
    animationDuration: 2160,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiDetermined.gif"
                width={500}
                height={500}
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
