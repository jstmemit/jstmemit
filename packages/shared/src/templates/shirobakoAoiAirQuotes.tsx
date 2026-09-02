import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiAirQuotes: Template = {
    name: "shirobakoAoiAirQuotes",
    displayName: buildLocales("Aoi Miyamori air quotes", {
        [Locale.Russian]: "Аой Миямори показывает воздушные кавычки",
        [Locale.Ukrainian]: "Аой Міяморі показує повітряні лапки",
        [Locale.Dutch]: "Aoi Miyamori maakt handgebaren voor aanhalingstekens",
        [Locale.French]: "Aoi Miyamori faisant des guillemets avec les doigts",
        [Locale.German]: "Aoi Miyamori mit Gänsefüßchen-Gesten",
        [Locale.Polish]: "Aoi Miyamori pokazująca cudzysłów w powietrzu",
        [Locale.SpanishES]: "Aoi Miyamori haciendo comillas con los dedos",
        [Locale.SpanishLATAM]: "Aoi Miyamori haciendo comillas con los dedos",
        [Locale.PortugueseBR]: "Aoi Miyamori fazendo gestos de aspas",
        [Locale.Turkish]: "Havada tırnak işareti yapan Aoi Miyamori",
        [Locale.Italian]: "Aoi Miyamori che fa le virgolette con le dita",
        [Locale.Indonesian]: "Aoi Miyamori membuat tanda kutip jari",
        [Locale.Czech]: "Aoi Miyamori ukazující uvozovky ve vzduchu",
        [Locale.Japanese]: "エアフィングガーマーの宮森あおい",
        [Locale.Korean]: "손가락 따옴표를 하는 미야모리 아오이",
        [Locale.ChineseCN]: "比出空气引号的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 499,
    animationDuration: 1320,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiAirQuotes.gif"
                width={500}
                height={399}
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
