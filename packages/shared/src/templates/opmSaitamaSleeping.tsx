import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const opmSaitamaSleeping: Template = {
    name: "opmSaitamaSleeping",
    displayName: buildLocales("Saitama sleeping", {
        [Locale.Russian]: "Спящий Сайтама",
        [Locale.Ukrainian]: "Сплячий Сайтама",
        [Locale.Dutch]: "Slapende Saitama",
        [Locale.French]: "Saitama endormi",
        [Locale.German]: "Schlafender Saitama",
        [Locale.Polish]: "Śpiący Saitama",
        [Locale.SpanishES]: "Saitama durmiendo",
        [Locale.SpanishLATAM]: "Saitama durmiendo",
        [Locale.PortugueseBR]: "Saitama dormindo",
        [Locale.Turkish]: "Uyuyan Saitama",
        [Locale.Italian]: "Saitama che dorme",
        [Locale.Indonesian]: "Saitama tidur",
        [Locale.Czech]: "Spící Saitama",
        [Locale.Japanese]: "眠るサイタマ",
        [Locale.Korean]: "잠자는 사이타마",
        [Locale.ChineseCN]: "睡觉的埼玉",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.OnePunchMan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 534,
    animationDuration: 1700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/opmSaitamaSleeping.gif"
                width={540}
                height={434}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
