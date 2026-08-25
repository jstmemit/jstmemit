import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const disappointedGuy1: Template = {
    name: "disappointedGuy1",
    displayName: buildLocales("Disappointed guy 1", {
        [Locale.Russian]: "Разочарованный парень 1",
        [Locale.Ukrainian]: "Розчарований хлопець 1",
        [Locale.Dutch]: "Teleurgestelde man 1",
        [Locale.French]: "Gars déçu 1",
        [Locale.German]: "Enttäuschter Typ 1",
        [Locale.Polish]: "Rozczarowany facet 1",
        [Locale.SpanishES]: "Chico decepcionado 1",
        [Locale.SpanishLATAM]: "Chico decepcionado 1",
        [Locale.PortugueseBR]: "Cara decepcionado 1",
        [Locale.Turkish]: "Hayal kırıklığına uğramış adam 1",
        [Locale.Italian]: "Ragazzo deluso 1",
        [Locale.Indonesian]: "Cowok kecewa 1",
        [Locale.Czech]: "Zklamaný chlap 1",
        [Locale.Japanese]: "がっかりする男 1",
        [Locale.Korean]: "실망한 남자 1",
        [Locale.ChineseCN]: "失望的男人 1",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.ThreeOption],
    width: 850,
    height: 1097,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 13 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 13 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 13 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/disappointedGuy1.png"
                width={850}
                height={1097}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "49%",
                    height: "33%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
                    top: "33%",
                    width: "49%",
                    height: "33%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "49%",
                    height: "34%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
