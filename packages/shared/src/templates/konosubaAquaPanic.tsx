import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaAquaPanic: Template = {
    name: "konosubaAquaPanic",
    displayName: buildLocales("Aqua panic", {
        [Locale.Russian]: "Паника Аквы",
        [Locale.Ukrainian]: "Паніка Акви",
        [Locale.Dutch]: "Aqua paniek",
        [Locale.French]: "Aqua en panique",
        [Locale.German]: "Aqua Panik",
        [Locale.Polish]: "Panika Aquy",
        [Locale.SpanishES]: "Aqua en pánico",
        [Locale.SpanishLATAM]: "Aqua en pánico",
        [Locale.PortugueseBR]: "Aqua em pânico",
        [Locale.Turkish]: "Aqua panik",
        [Locale.Italian]: "Panico di Aqua",
        [Locale.Indonesian]: "Aqua panik",
        [Locale.Czech]: "Aqua v panice",
        [Locale.Japanese]: "パニックになるアクア",
        [Locale.Korean]: "패닉에 빠진 아쿠아",
        [Locale.ChineseCN]: "阿库娅慌乱",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground],
    width: 1024,
    height: 726,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/konosubaAquaPanic.png"
                width={1024}
                height={576}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
