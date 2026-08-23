import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ucwthoTsukiUzakiWhatAreYouSaying: Template = {
    name: "ucwthoTsukiUzakiWhatAreYouSaying",
    displayName: buildLocales("Tsuki Uzaki what are you saying", {
        [Locale.Russian]: "Цуки Узаки: что ты несешь",
        [Locale.Ukrainian]: "Цукі Узакі: що ти верзеш",
        [Locale.Dutch]: "Tsuki Uzaki wat zeg je",
        [Locale.French]: "Tsuki Uzaki qu'est-ce que tu dis",
        [Locale.German]: "Tsuki Uzaki was sagst du da",
        [Locale.Polish]: "Tsuki Uzaki co ty mówisz",
        [Locale.SpanishES]: "Tsuki Uzaki qué estás diciendo",
        [Locale.SpanishLATAM]: "Tsuki Uzaki qué estás diciendo",
        [Locale.PortugueseBR]: "Tsuki Uzaki o que você está dizendo",
        [Locale.Turkish]: "Tsuki Uzaki ne diyorsun",
        [Locale.Italian]: "Tsuki Uzaki cosa stai dicendo",
        [Locale.Indonesian]: "Tsuki Uzaki apa yang kamu katakan",
        [Locale.Czech]: "Tsuki Uzaki co to říkáš",
        [Locale.Japanese]: "宇崎月 何を言ってるの",
        [Locale.Korean]: "우자키 츠키 무슨 소리하는 거야",
        [Locale.ChineseCN]: "宇崎月你在说什么",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UzakiChanWantsToHangOut],
    types: [Type.TextTopWithBackground, Type.DefaultText],
    width: 1283,
    height: 874,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ucwthoTsukiUzakiWhatAreYouSaying.png"
                width={1283}
                height={674}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 70,
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
