import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineAndRumiaShocked: Template = {
    name: "arobmiSistineAndRumiaShocked",
    displayName: buildLocales("Sistine and Rumia shocked", {
        [Locale.Russian]: "Систина и Румия в шоке",
        [Locale.Ukrainian]: "Сістіна та Румія в шоці",
        [Locale.Dutch]: "Sistine en Rumia geschokt",
        [Locale.French]: "Sistine et Rumia choquées",
        [Locale.German]: "Sistine und Rumia geschockt",
        [Locale.Polish]: "Sistine i Rumia w szoku",
        [Locale.SpanishES]: "Sistine y Rumia en shock",
        [Locale.SpanishLATAM]: "Sistine y Rumia en shock",
        [Locale.PortugueseBR]: "Sistine e Rumia chocadas",
        [Locale.Turkish]: "Sistine ve Rumia şokta",
        [Locale.Italian]: "Sistine e Rumia scioccate",
        [Locale.Indonesian]: "Sistine dan Rumia terkejut",
        [Locale.Czech]: "Sistine a Rumia v šoku",
        [Locale.Japanese]: "ショックを受けるシスティーナとルミア",
        [Locale.Korean]: "시스티나와 루미아 충격",
        [Locale.ChineseCN]: "希丝缇娜和露米娅震惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 1800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/arobmiSistineAndRumiaShocked.gif"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
