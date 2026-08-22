import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaLaughing: Template = {
    name: "kaguyasamaKaguyaLaughing",
    displayName: buildLocales("Laughing Kaguya", {
        [Locale.Russian]: "Смеющаяся Кагуя",
        [Locale.Ukrainian]: "Каґуя сміється",
        [Locale.Dutch]: "Lachende Kaguya",
        [Locale.French]: "Kaguya qui rit",
        [Locale.German]: "Lachende Kaguya",
        [Locale.Polish]: "Śmiejąca się Kaguya",
        [Locale.SpanishES]: "Kaguya riendo",
        [Locale.SpanishLATAM]: "Kaguya riendo",
        [Locale.PortugueseBR]: "Kaguya rindo",
        [Locale.Turkish]: "Gülen Kaguya",
        [Locale.Italian]: "Kaguya che ride",
        [Locale.Indonesian]: "Kaguya tertawa",
        [Locale.Czech]: "Smějící se Kaguya",
        [Locale.Japanese]: "笑うかぐや",
        [Locale.Korean]: "웃는 카구야",
        [Locale.ChineseCN]: "大笑的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 464,
    height: 382,
    animationDuration: 1500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaLaughing.gif"
                width={464}
                height={292}
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
                        fontFamily: "Comic Sans MS",
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
