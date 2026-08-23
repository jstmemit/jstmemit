import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenCold: Template = {
    name: "frierenCold",
    displayName: buildLocales("Cold Frieren", {
        [Locale.Russian]: "Замерзшая Фрирен",
        [Locale.Ukrainian]: "Змерзла Фрірен",
        [Locale.Dutch]: "Koude Frieren",
        [Locale.French]: "Frieren qui a froid",
        [Locale.German]: "Frierende Frieren",
        [Locale.Polish]: "Zmarznięta Frieren",
        [Locale.SpanishES]: "Frieren con frío",
        [Locale.SpanishLATAM]: "Frieren con frío",
        [Locale.PortugueseBR]: "Frieren com frio",
        [Locale.Turkish]: "Üşüyen Frieren",
        [Locale.Italian]: "Frieren infreddolita",
        [Locale.Indonesian]: "Frieren kedinginan",
        [Locale.Czech]: "Zmrzlá Frieren",
        [Locale.Japanese]: "寒がるフリーレン",
        [Locale.Korean]: "추워하는 프리렌",
        [Locale.ChineseCN]: "受冻的芙莉莲",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 992,
    height: 480,
    animationDuration: 2040,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/frierenCold.gif"
                width={496}
                height={480}
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
                        fontSize: 60,
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
