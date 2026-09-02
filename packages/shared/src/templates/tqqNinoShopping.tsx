import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqNinoShopping: Template = {
    name: "tqqNinoShopping",
    displayName: buildLocales("Nino shopping", {
        [Locale.Russian]: "Нино за покупками",
        [Locale.Ukrainian]: "Ніно за покупками",
        [Locale.Dutch]: "Winkelende Nino",
        [Locale.French]: "Nino faisant du shopping",
        [Locale.German]: "Nino beim Einkaufen",
        [Locale.Polish]: "Nino na zakupach",
        [Locale.SpanishES]: "Nino de compras",
        [Locale.SpanishLATAM]: "Nino de compras",
        [Locale.PortugueseBR]: "Nino fazendo compras",
        [Locale.Turkish]: "Alışveriş yapan Nino",
        [Locale.Italian]: "Nino che fa shopping",
        [Locale.Indonesian]: "Nino berbelanja",
        [Locale.Czech]: "Nino na nákupech",
        [Locale.Japanese]: "買い物をする二乃",
        [Locale.Korean]: "쇼핑하는 니노",
        [Locale.ChineseCN]: "购物的二乃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 1850,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqNinoShopping.gif"
                width={498}
                height={280}
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
