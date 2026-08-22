import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lhShiroeNervous: Template = {
    name: "lhShiroeNervous",
    displayName: buildLocales("Nervous Shiroe", {
        [Locale.Russian]: "Нервничающий Сироэ",
        [Locale.Ukrainian]: "Знервований Сірое",
        [Locale.Dutch]: "Zenuwachtige Shiroe",
        [Locale.French]: "Shiroe nerveux",
        [Locale.German]: "Nervöser Shiroe",
        [Locale.Polish]: "Zdenerwowany Shiroe",
        [Locale.SpanishES]: "Shiroe nervioso",
        [Locale.SpanishLATAM]: "Shiroe nervioso",
        [Locale.PortugueseBR]: "Shiroe nervoso",
        [Locale.Turkish]: "Gergin Shiroe",
        [Locale.Italian]: "Shiroe nervoso",
        [Locale.Indonesian]: "Shiroe gugup",
        [Locale.Czech]: "Nervózní Shiroe",
        [Locale.Japanese]: "焦るシロエ",
        [Locale.Korean]: "긴장한 시로에",
        [Locale.ChineseCN]: "紧张的城惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LogHorizon],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 4600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lhShiroeNervous.gif"
                width={500}
                height={281}
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
