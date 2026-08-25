import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const wojackPoint: Template = {
    name: "wojackPoint",
    displayName: buildLocales("Wojak pointing", {
        [Locale.Russian]: "Вояк указывает",
        [Locale.Ukrainian]: "Вояк вказує",
        [Locale.Dutch]: "Wojak wijst",
        [Locale.French]: "Wojak qui pointe",
        [Locale.German]: "Wojak zeigt",
        [Locale.Polish]: "Wojak wskazujący",
        [Locale.SpanishES]: "Wojak señalando",
        [Locale.SpanishLATAM]: "Wojak señalando",
        [Locale.PortugueseBR]: "Wojak apontando",
        [Locale.Turkish]: "İşaret eden Wojak",
        [Locale.Italian]: "Wojak che punta il dito",
        [Locale.Indonesian]: "Wojak menunjuk",
        [Locale.Czech]: "Wojak ukazuje",
        [Locale.Japanese]: "指差すウォジャック",
        [Locale.Korean]: "손가락질하는 워잭",
        [Locale.ChineseCN]: "Wojak指人",
    }),
    topics: [Topic.Reaction],
    types: [Type.BackgroundImage, Type.TextBottom],
    width: 512,
    height: 512,
    texts: [{ id: 0, description: "what wojak says", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "pointed at image" }],
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
                src={images[0]}
                width={512}
                height={512}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/wojackpoint.png"
                width={512}
                height={512}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "30%",
                    bottom: 0,
                    width: "45%",
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
