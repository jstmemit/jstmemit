import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraMinoriTwoMoods: Template = {
    name: "toradoraMinoriTwoMoods",
    displayName: buildLocales("Minori two moods", {
        [Locale.Russian]: "Два настроения Минори",
        [Locale.Ukrainian]: "Два настрої Мінорі",
        [Locale.Dutch]: "Minori twee stemmingen",
        [Locale.French]: "Minori deux humeurs",
        [Locale.German]: "Minori zwei Stimmungen",
        [Locale.Polish]: "Dwa nastroje Minori",
        [Locale.SpanishES]: "Minori dos estados de ánimo",
        [Locale.SpanishLATAM]: "Minori dos estados de ánimo",
        [Locale.PortugueseBR]: "Minori dois humores",
        [Locale.Turkish]: "Minori'nin iki ruh hali",
        [Locale.Italian]: "Minori due umori",
        [Locale.Indonesian]: "Dua suasana hati Minori",
        [Locale.Czech]: "Minori dvě nálady",
        [Locale.Japanese]: "実乃梨の2つの気分",
        [Locale.Korean]: "미노리의 두 가지 기분",
        [Locale.ChineseCN]: "实乃梨的两种心情",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Toradora],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 978,
    height: 1080,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraMinoriTwoMoods.png"
                width={489}
                height={1080}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50.5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "4px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "49.5%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "4px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
