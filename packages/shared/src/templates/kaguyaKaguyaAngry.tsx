import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyaKaguyaAngry: Template = {
    name: "kaguyaKaguyaAngry",
    displayName: buildLocales("Angry Kaguya", {
        [Locale.Russian]: "Злая Кагуя",
        [Locale.Ukrainian]: "Зла Каґуя",
        [Locale.Dutch]: "Boze Kaguya",
        [Locale.French]: "Kaguya en colère",
        [Locale.German]: "Wütende Kaguya",
        [Locale.Polish]: "Zdenerwowana Kaguya",
        [Locale.SpanishES]: "Kaguya enfadada",
        [Locale.SpanishLATAM]: "Kaguya enojada",
        [Locale.PortugueseBR]: "Kaguya brava",
        [Locale.Turkish]: "Kızgın Kaguya",
        [Locale.Italian]: "Kaguya arrabbiata",
        [Locale.Indonesian]: "Kaguya marah",
        [Locale.Czech]: "Naštvaná Kaguya",
        [Locale.Japanese]: "怒るかぐや",
        [Locale.Korean]: "화난 카구야",
        [Locale.ChineseCN]: "生气的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1408,
    height: 704,
    animationDuration: 440,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyaKaguyaAngry.gif"
                width={704}
                height={704}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
