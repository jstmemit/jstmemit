import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const griffinsPeterVsChicken: Template = {
    name: "griffinsPeterVsChicken",
    displayName: buildLocales("Peter vs chicken", {
        [Locale.Russian]: "Питер против курицы",
        [Locale.Ukrainian]: "Пітер проти курки",
        [Locale.Dutch]: "Peter vs kip",
        [Locale.French]: "Peter contre le poulet",
        [Locale.German]: "Peter gegen Huhn",
        [Locale.Polish]: "Peter vs kurczak",
        [Locale.SpanishES]: "Peter vs pollo",
        [Locale.SpanishLATAM]: "Peter vs pollo",
        [Locale.PortugueseBR]: "Peter vs frango",
        [Locale.Turkish]: "Peter tavuğa karşı",
        [Locale.Italian]: "Peter vs pollo",
        [Locale.Indonesian]: "Peter vs ayam",
        [Locale.Czech]: "Peter vs kuře",
        [Locale.Japanese]: "ピーター vs ニワトリ",
        [Locale.Korean]: "피터 대 닭",
        [Locale.ChineseCN]: "彼得对战大公鸡",
    }),
    topics: [Topic.Griffins, Topic.Cartoons, Topic.Animals],
    types: [Type.TextBottomWithBackground, Type.FaceImage],
    width: 2000,
    height: 1350,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Chicken`s face" },
        { id: 1, description: "Peter`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterVsChicken.png"
                width={2000}
                height={1125}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "27%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: "33%",
                    right: "18%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "225",
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
                        fontSize: 90,
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
