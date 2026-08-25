import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaCatEars: Template = {
    name: "kaguyasamaKaguyaCatEars",
    displayName: buildLocales("Kaguya with cat ears", {
        [Locale.Russian]: "Кагуя с кошачьими ушками",
        [Locale.Ukrainian]: "Каґуя з котячими вушками",
        [Locale.Dutch]: "Kaguya met kattenoren",
        [Locale.French]: "Kaguya avec des oreilles de chat",
        [Locale.German]: "Kaguya mit Katzenohren",
        [Locale.Polish]: "Kaguya z kocimi uszami",
        [Locale.SpanishES]: "Kaguya con orejas de gato",
        [Locale.SpanishLATAM]: "Kaguya con orejas de gato",
        [Locale.PortugueseBR]: "Kaguya com orelhas de gato",
        [Locale.Turkish]: "Kedi kulaklı Kaguya",
        [Locale.Italian]: "Kaguya con orecchie da gatto",
        [Locale.Indonesian]: "Kaguya dengan telinga kucing",
        [Locale.Czech]: "Kaguya s kočičíma ušima",
        [Locale.Japanese]: "猫耳かぐや",
        [Locale.Korean]: "고양이 귀 카구야",
        [Locale.ChineseCN]: "猫耳辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 543,
    animationDuration: 1680,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaCatEars.gif"
                width={540}
                height={453}
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
