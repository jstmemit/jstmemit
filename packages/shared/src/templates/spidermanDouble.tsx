import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spidermanDouble: Template = {
    name: "spiderManDouble",
    displayName: buildLocales("Spider-Man double", {
        [Locale.Russian]: "Двойник Человека-паука",
        [Locale.Ukrainian]: "Двійник Людини-павука",
        [Locale.Dutch]: "Spider-Man dubbelganger",
        [Locale.French]: "Double de Spider-Man",
        [Locale.German]: "Spider-Man Doppelgänger",
        [Locale.Polish]: "Sobowtór Spider-Mana",
        [Locale.SpanishES]: "Doble de Spider-Man",
        [Locale.SpanishLATAM]: "Doble de Spider-Man",
        [Locale.PortugueseBR]: "Sósia do Homem-Aranha",
        [Locale.Turkish]: "Örümcek Adam ikizi",
        [Locale.Italian]: "Doppio Spider-Man",
        [Locale.Indonesian]: "Spider-Man ganda",
        [Locale.Czech]: "Dvojník Spider-Mana",
        [Locale.Japanese]: "スパイダーマンの偽物",
        [Locale.Korean]: "스파이더맨 도플갱어",
        [Locale.ChineseCN]: "真假蜘蛛侠",
    }),
    topics: [Topic.SpiderMan, Topic.Cartoons],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 560,
    height: 376,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "left spiderman`s face" },
        { id: 1, description: "right spiderman`s face" },
    ],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spiderManDouble.jpg"
                width={560}
                height={376}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={50}
                height={50}
                style={{
                    position: "absolute",
                    top: 140,
                    right: 120,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
