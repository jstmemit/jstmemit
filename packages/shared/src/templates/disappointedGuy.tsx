import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const disappointedGuy: Template = {
    name: "disappointedGuy",
    displayName: buildLocales("Disappointed guy", {
        [Locale.Russian]: "Разочарованный парень",
        [Locale.Ukrainian]: "Розчарований хлопець",
        [Locale.Dutch]: "Teleurgestelde man",
        [Locale.French]: "Gars déçu",
        [Locale.German]: "Enttäuschter Typ",
        [Locale.Polish]: "Rozczarowany facet",
        [Locale.SpanishES]: "Chico decepcionado",
        [Locale.SpanishLATAM]: "Chico decepcionado",
        [Locale.PortugueseBR]: "Cara decepcionado",
        [Locale.Turkish]: "Hayal kırıklığına uğramış adam",
        [Locale.Italian]: "Ragazzo deluso",
        [Locale.Indonesian]: "Cowok kecewa",
        [Locale.Czech]: "Zklamaný chlap",
        [Locale.Japanese]: "がっかりする男",
        [Locale.Korean]: "실망한 남자",
        [Locale.ChineseCN]: "失望的男人",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 775,
    height: 500,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/disappointedGuy.jpg"
                width={775}
                height={500}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "60%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
                    width: "60%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
