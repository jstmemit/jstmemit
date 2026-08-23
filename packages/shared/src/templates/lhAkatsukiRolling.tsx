import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lhAkatsukiRolling: Template = {
    name: "lhAkatsukiRolling",
    displayName: buildLocales("Rolling Akatsuki", {
        [Locale.Russian]: "Катящаяся Акацуки",
        [Locale.Ukrainian]: "Акацукі, що котиться",
        [Locale.Dutch]: "Rollende Akatsuki",
        [Locale.French]: "Akatsuki qui roule",
        [Locale.German]: "Rollende Akatsuki",
        [Locale.Polish]: "Tocząca się Akatsuki",
        [Locale.SpanishES]: "Akatsuki rodando",
        [Locale.SpanishLATAM]: "Akatsuki rodando",
        [Locale.PortugueseBR]: "Akatsuki rolando",
        [Locale.Turkish]: "Yuvarlanan Akatsuki",
        [Locale.Italian]: "Akatsuki che rotola",
        [Locale.Indonesian]: "Akatsuki berguling",
        [Locale.Czech]: "Koulející se Akatsuki",
        [Locale.Japanese]: "転がるアカツキ",
        [Locale.Korean]: "구르는 아카츠키",
        [Locale.ChineseCN]: "打滚的晓",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LogHorizon],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 370,
    animationDuration: 4230,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lhAkatsukiRolling.gif"
                width={500}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
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
                        fontSize: 30,
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
