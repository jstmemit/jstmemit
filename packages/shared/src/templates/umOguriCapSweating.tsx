import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umOguriCapSweating: Template = {
    name: "umOguriCapSweating",
    displayName: buildLocales("Oguri Cap sweating", {
        [Locale.Russian]: "Потеющая Огури Кэп",
        [Locale.Ukrainian]: "Спітніла Огурі Кеп",
        [Locale.Dutch]: "Zwetende Oguri Cap",
        [Locale.French]: "Oguri Cap en sueur",
        [Locale.German]: "Schwitzende Oguri Cap",
        [Locale.Polish]: "Pocąca się Oguri Cap",
        [Locale.SpanishES]: "Oguri Cap sudando",
        [Locale.SpanishLATAM]: "Oguri Cap sudando",
        [Locale.PortugueseBR]: "Oguri Cap suando",
        [Locale.Turkish]: "Terleyen Oguri Cap",
        [Locale.Italian]: "Oguri Cap che suda",
        [Locale.Indonesian]: "Oguri Cap berkeringat",
        [Locale.Czech]: "Potící se Oguri Cap",
        [Locale.Japanese]: "汗をかくオグリキャップ",
        [Locale.Korean]: "땀 흘리는 오구리 캡",
        [Locale.ChineseCN]: "流汗的小栗帽",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 720,
    height: 512,
    animationDuration: 2140,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umOguriCapSweating.gif"
                width={720}
                height={372}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "140px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
