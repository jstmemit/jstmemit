import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsKahoAndMaikaMaids: Template = {
    name: "blendsKahoAndMaikaMaids",
    displayName: buildLocales("Kaho and Maika maids", {
        [Locale.Russian]: "Кахо и Майка в форме горничных",
        [Locale.Ukrainian]: "Кахо і Майка в формі покоївок",
        [Locale.Dutch]: "Kaho en Maika als dienstmeisjes",
        [Locale.French]: "Kaho et Maika en tenues de bonnes",
        [Locale.German]: "Kaho und Maika als Maids",
        [Locale.Polish]: "Kaho i Maika jako pokojówki",
        [Locale.SpanishES]: "Kaho y Maika de maids",
        [Locale.SpanishLATAM]: "Kaho y Maika de maids",
        [Locale.PortugueseBR]: "Kaho e Maika de maids",
        [Locale.Turkish]: "Kaho ve Maika maid kıyafetiyle",
        [Locale.Italian]: "Kaho e Maika in versione maid",
        [Locale.Indonesian]: "Kaho dan Maika berseragam maid",
        [Locale.Czech]: "Kaho a Maika jako servírky",
        [Locale.Japanese]: "カホとマイカのメイド服",
        [Locale.Korean]: "카호와 마이카 메이드복",
        [Locale.ChineseCN]: "佳穗和麻衣花的女仆装",
    }),
    topics: [Topic.Anime, Topic.BlendS],
    types: [Type.FaceImage, Type.TextBottom],
    width: 422,
    height: 600,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Kaho`s face" },
        { id: 1, description: "Maika`s face" },
    ],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsKahoAndMaikaMaids.png"
                width={422}
                height={600}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 80,
                    left: 75,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(-5deg)",
                }}
            />
            <img
                src={images[1]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: 90,
                    right: 75,
                    borderRadius: "100%",
                    objectFit: "cover",
                    transform: "rotate(3deg)",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
