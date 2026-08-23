import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaRomantic: Template = {
    name: "kaguyasamaKaguyaRomantic",
    displayName: buildLocales("Romantic Kaguya", {
        [Locale.Russian]: "Романтичная Кагуя",
        [Locale.Ukrainian]: "Романтична Каґуя",
        [Locale.Dutch]: "Romantische Kaguya",
        [Locale.French]: "Kaguya romantique",
        [Locale.German]: "Romantische Kaguya",
        [Locale.Polish]: "Romantyczna Kaguya",
        [Locale.SpanishES]: "Kaguya romántica",
        [Locale.SpanishLATAM]: "Kaguya romántica",
        [Locale.PortugueseBR]: "Kaguya romântica",
        [Locale.Turkish]: "Romantik Kaguya",
        [Locale.Italian]: "Kaguya romantica",
        [Locale.Indonesian]: "Kaguya romantis",
        [Locale.Czech]: "Romantická Kaguya",
        [Locale.Japanese]: "恋するかぐや",
        [Locale.Korean]: "로맨틱한 카구야",
        [Locale.ChineseCN]: "浪漫的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 900,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaRomantic.gif"
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
