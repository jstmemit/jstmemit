import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaKaguyaNervousTea: Template = {
    name: "kaguyasamaKaguyaNervousTea",
    displayName: buildLocales("Nervous Kaguya drinking tea", {
        [Locale.Russian]: "Нервничающая Кагуя пьет чай",
        [Locale.Ukrainian]: "Знервована Каґуя п'є чай",
        [Locale.Dutch]: "Zenuwachtige Kaguya drinkt thee",
        [Locale.French]: "Kaguya buvant du thé nerveusement",
        [Locale.German]: "Nervöse Kaguya trinkt Tee",
        [Locale.Polish]: "Zdenerwowana Kaguya pijąca herbatę",
        [Locale.SpanishES]: "Kaguya nerviosa tomando té",
        [Locale.SpanishLATAM]: "Kaguya nerviosa tomando té",
        [Locale.PortugueseBR]: "Kaguya nervosa tomando chá",
        [Locale.Turkish]: "Gergin Kaguya çay içiyor",
        [Locale.Italian]: "Kaguya nervosa che beve il tè",
        [Locale.Indonesian]: "Kaguya gugup minum teh",
        [Locale.Czech]: "Nervózní Kaguya pije čaj",
        [Locale.Japanese]: "緊張してお茶を飲むかぐや",
        [Locale.Korean]: "긴장하며 차를 마시는 카구야",
        [Locale.ChineseCN]: "紧张喝茶的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 376,
    animationDuration: 3600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaNervousTea.gif"
                width={480}
                height={286}
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
