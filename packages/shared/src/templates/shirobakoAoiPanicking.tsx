import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiPanicking: Template = {
    name: "shirobakoAoiPanicking",
    displayName: buildLocales("Aoi Miyamori panicking", {
        [Locale.Russian]: "Паникующая Аой Миямори",
        [Locale.Ukrainian]: "Аой Міяморі в паніці",
        [Locale.Dutch]: "Panikerende Aoi Miyamori",
        [Locale.French]: "Aoi Miyamori paniquée",
        [Locale.German]: "Panische Aoi Miyamori",
        [Locale.Polish]: "Panikująca Aoi Miyamori",
        [Locale.SpanishES]: "Aoi Miyamori en pánico",
        [Locale.SpanishLATAM]: "Aoi Miyamori en pánico",
        [Locale.PortugueseBR]: "Aoi Miyamori em pânico",
        [Locale.Turkish]: "Panikleyen Aoi Miyamori",
        [Locale.Italian]: "Aoi Miyamori nel panico",
        [Locale.Indonesian]: "Aoi Miyamori panik",
        [Locale.Czech]: "Panikařící Aoi Miyamori",
        [Locale.Japanese]: "パニックになる宮森あおい",
        [Locale.Korean]: "패닉에 빠진 미야모리 아오이",
        [Locale.ChineseCN]: "惊慌的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 370,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiPanicking.gif"
                width={500}
                height={270}
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
