import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaShiroganeNervous: Template = {
    name: "kaguyasamaShiroganeNervous",
    displayName: buildLocales("Nervous Shirogane", {
        [Locale.Russian]: "Нервничающий Сироганэ",
        [Locale.Ukrainian]: "Знервований Шірогане",
        [Locale.Dutch]: "Zenuwachtige Shirogane",
        [Locale.French]: "Shirogane nerveux",
        [Locale.German]: "Nervöser Shirogane",
        [Locale.Polish]: "Zdenerwowany Shirogane",
        [Locale.SpanishES]: "Shirogane nervioso",
        [Locale.SpanishLATAM]: "Shirogane nervioso",
        [Locale.PortugueseBR]: "Shirogane nervoso",
        [Locale.Turkish]: "Gergin Shirogane",
        [Locale.Italian]: "Shirogane nervoso",
        [Locale.Indonesian]: "Shirogane gugup",
        [Locale.Czech]: "Nervózní Shirogane",
        [Locale.Japanese]: "緊張する白銀",
        [Locale.Korean]: "긴장한 시로가네",
        [Locale.ChineseCN]: "紧张的白银",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 640,
    height: 450,
    animationDuration: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaShiroganeNervous.gif"
                width={640}
                height={360}
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
