import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lhAkatsukiBlush: Template = {
    name: "lhAkatsukiBlush",
    displayName: buildLocales("Blushing Akatsuki", {
        [Locale.Russian]: "Смущенная Акацуки",
        [Locale.Ukrainian]: "Зніяковіла Акацукі",
        [Locale.Dutch]: "Blozende Akatsuki",
        [Locale.French]: "Akatsuki rougissante",
        [Locale.German]: "Errötende Akatsuki",
        [Locale.Polish]: "Rumieniąca się Akatsuki",
        [Locale.SpanishES]: "Akatsuki sonrojada",
        [Locale.SpanishLATAM]: "Akatsuki sonrojada",
        [Locale.PortugueseBR]: "Akatsuki corada",
        [Locale.Turkish]: "Kızaran Akatsuki",
        [Locale.Italian]: "Akatsuki che arrossisce",
        [Locale.Indonesian]: "Akatsuki tersipu",
        [Locale.Czech]: "Červenající se Akatsuki",
        [Locale.Japanese]: "照れるアカツキ",
        [Locale.Korean]: "부끄러워하는 아카츠키",
        [Locale.ChineseCN]: "脸红的晓",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LogHorizon],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 370,
    animationDuration: 2040,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lhAkatsukiBlush.gif"
                width={500}
                height={280}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
