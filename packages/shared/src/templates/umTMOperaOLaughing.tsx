import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umTMOperaOLaughing: Template = {
    name: "umTMOperaOLaughing",
    displayName: buildLocales("T.M. Opera O laughing", {
        [Locale.Russian]: "Смеющаяся Т.М. Опера О",
        [Locale.Ukrainian]: "Т.М. Опера О, що сміється",
        [Locale.Dutch]: "Lachende T.M. Opera O",
        [Locale.French]: "T.M. Opera O qui rit",
        [Locale.German]: "Lachende T.M. Opera O",
        [Locale.Polish]: "Śmiejąca się T.M. Opera O",
        [Locale.SpanishES]: "T.M. Opera O riendo",
        [Locale.SpanishLATAM]: "T.M. Opera O riendo",
        [Locale.PortugueseBR]: "T.M. Opera O rindo",
        [Locale.Turkish]: "Gülen T.M. Opera O",
        [Locale.Italian]: "T.M. Opera O che ride",
        [Locale.Indonesian]: "T.M. Opera O tertawa",
        [Locale.Czech]: "Smějící se T.M. Opera O",
        [Locale.Japanese]: "笑うテイエムオペラオー",
        [Locale.Korean]: "웃는 티엠 오페라 오",
        [Locale.ChineseCN]: "大笑的好歌剧",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextBottom, Type.Animated],
    width: 498,
    height: 498,
    animationDuration: 3130,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umTMOperaOLaughing.gif"
                width={498}
                height={498}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
