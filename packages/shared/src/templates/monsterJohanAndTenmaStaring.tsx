import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const monsterJohanAndTenmaStaring: Template = {
    name: "monsterJohanAndTenmaStaring",
    displayName: buildLocales("Johan and Tenma staring", {
        [Locale.Russian]: "Йохан и Тенма смотрят",
        [Locale.Ukrainian]: "Йоган та Тенма дивляться",
        [Locale.Dutch]: "Starende Johan en Tenma",
        [Locale.French]: "Johan et Tenma regardant fixement",
        [Locale.German]: "Starrende Johan und Tenma",
        [Locale.Polish]: "Wpatrujący się Johan i Tenma",
        [Locale.SpanishES]: "Johan y Tenma mirando fijamente",
        [Locale.SpanishLATAM]: "Johan y Tenma mirando fijamente",
        [Locale.PortugueseBR]: "Johan e Tenma encarando",
        [Locale.Turkish]: "Dikkatle bakan Johan ve Tenma",
        [Locale.Italian]: "Johan e Tenma che fissano",
        [Locale.Indonesian]: "Johan dan Tenma menatap",
        [Locale.Czech]: "Zírající Johan a Tenma",
        [Locale.Japanese]: "見つめるヨハンとテンマ",
        [Locale.Korean]: "응시하는 요한과 텐마",
        [Locale.ChineseCN]: "凝视的约翰和天马",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Monster],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 473,
    animationDuration: 4200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/monsterJohanAndTenmaStaring.gif"
                width={500}
                height={373}
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
