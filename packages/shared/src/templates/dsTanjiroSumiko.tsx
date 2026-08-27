import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dsTanjiroSumiko: Template = {
    name: "dsTanjiroSumiko",
    displayName: buildLocales("Tanjiro Sumiko", {
        [Locale.Russian]: "Тандзиро Сумико",
        [Locale.Ukrainian]: "Тандзіро Суміко",
        [Locale.Dutch]: "Tanjiro Sumiko",
        [Locale.French]: "Tanjiro Sumiko",
        [Locale.German]: "Tanjiro Sumiko",
        [Locale.Polish]: "Tanjiro Sumiko",
        [Locale.SpanishES]: "Tanjiro Sumiko",
        [Locale.SpanishLATAM]: "Tanjiro Sumiko",
        [Locale.PortugueseBR]: "Tanjiro Sumiko",
        [Locale.Turkish]: "Tanjiro Sumiko",
        [Locale.Italian]: "Tanjiro Sumiko",
        [Locale.Indonesian]: "Tanjiro Sumiko",
        [Locale.Czech]: "Tanjiro Sumiko",
        [Locale.Japanese]: "炭治郎とすみ子",
        [Locale.Korean]: "탄지로와 스미코",
        [Locale.ChineseCN]: "炭治郎与澄子",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.TextTopWithBackground],
    width: 600,
    height: 719,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsTanjiroSumiko.png"
                width={600}
                height={609}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
