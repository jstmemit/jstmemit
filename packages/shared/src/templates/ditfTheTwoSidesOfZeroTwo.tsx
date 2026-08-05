import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ditfTheTwoSidesOfZeroTwo: Template = {
    name: "ditfTheTwoSidesOfZeroTwo",
    displayName: buildLocales("The two sides of Zero Two", {
        [Locale.Russian]: "Две стороны Зеро Ту",
        [Locale.Ukrainian]: "Дві сторони Зіро Ту",
        [Locale.Dutch]: "De twee kanten van Zero Two",
        [Locale.French]: "Les deux facettes de Zero Two",
        [Locale.German]: "Die zwei Seiten von Zero Two",
        [Locale.Polish]: "Dwie strony Zero Two",
        [Locale.SpanishES]: "Las dos caras de Zero Two",
        [Locale.SpanishLATAM]: "Las dos caras de Zero Two",
        [Locale.PortugueseBR]: "Os dois lados de Zero Two",
        [Locale.Turkish]: "Zero Two'nun iki yüzü",
        [Locale.Italian]: "I due lati di Zero Two",
        [Locale.Indonesian]: "Dua sisi Zero Two",
        [Locale.Czech]: "Dvě strany Zero Two",
        [Locale.Japanese]: "ゼロツーの二面性",
        [Locale.Korean]: "제로투의 두 얼굴",
        [Locale.ChineseCN]: "02的两面性",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.TwoOption, Type.TextLeftWithBackground],
    width: 906,
    height: 739,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfTheTwoSidesOfZeroTwo.png"
                width={453}
                height={739}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
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
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
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
