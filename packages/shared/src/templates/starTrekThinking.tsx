import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const starTrekThinking: Template = {
    name: "starTrekThinking",
    displayName: buildLocales("Thinking", {
        [Locale.Russian]: "Думает",
        [Locale.Ukrainian]: "Думає",
        [Locale.Dutch]: "Denkend",
        [Locale.French]: "Réfléchit",
        [Locale.German]: "Denkend",
        [Locale.Polish]: "Myślenie",
        [Locale.SpanishES]: "Pensando",
        [Locale.SpanishLATAM]: "Pensando",
        [Locale.PortugueseBR]: "Pensando",
        [Locale.Turkish]: "Düşünüyor",
        [Locale.Italian]: "Pensando",
        [Locale.Indonesian]: "Berpikir",
        [Locale.Czech]: "Přemýšlí",
        [Locale.Japanese]: "考え中",
        [Locale.Korean]: "생각 중",
        [Locale.ChineseCN]: "思考中",
    }),
    topics: [Topic.StarTrek, Topic.Movies, Topic.Reaction],
    types: [Type.TextTopWithBackground, Type.TextBottomWithBackground],
    width: 1200,
    height: 1200,
    texts: [
        { id: 0, description: "caption", minLength: 1, maxLength: 10 },
        { id: 1, description: "caption", minLength: 1, maxLength: 10 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/starTrekThinking.png"
                width={1200}
                height={1200}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
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
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "15%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
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
