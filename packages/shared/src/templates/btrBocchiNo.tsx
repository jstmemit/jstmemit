import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiNo: Template = {
    name: "btrBocchiNo",
    displayName: buildLocales("Bocchi no", {
        [Locale.Russian]: "Бокки говорит нет",
        [Locale.Ukrainian]: "Боккі каже ні",
        [Locale.Dutch]: "Bocchi zegt nee",
        [Locale.French]: "Bocchi dit non",
        [Locale.German]: "Bocchi sagt nein",
        [Locale.Polish]: "Bocchi mówi nie",
        [Locale.SpanishES]: "Bocchi dice que no",
        [Locale.SpanishLATAM]: "Bocchi dice que no",
        [Locale.PortugueseBR]: "Bocchi diz não",
        [Locale.Turkish]: "Bocchi hayır diyor",
        [Locale.Italian]: "Bocchi dice no",
        [Locale.Indonesian]: "Bocchi bilang tidak",
        [Locale.Czech]: "Bocchi říká ne",
        [Locale.Japanese]: "「イヤ」のぼっち",
        [Locale.Korean]: "봇치 노",
        [Locale.ChineseCN]: "波奇说不",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 444,
    animationDuration: 400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiNo.gif"
                width={498}
                height={354}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
