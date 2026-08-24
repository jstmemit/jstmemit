import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const arobmiSistineShocked: Template = {
    name: "arobmiSistineShocked",
    displayName: buildLocales("Sistine shocked", {
        [Locale.Russian]: "Систина в шоке",
        [Locale.Ukrainian]: "Сістіна в шоці",
        [Locale.Dutch]: "Sistine geschokt",
        [Locale.French]: "Sistine choquée",
        [Locale.German]: "Sistine geschockt",
        [Locale.Polish]: "Sistine w szoku",
        [Locale.SpanishES]: "Sistine en shock",
        [Locale.SpanishLATAM]: "Sistine en shock",
        [Locale.PortugueseBR]: "Sistine chocada",
        [Locale.Turkish]: "Sistine şokta",
        [Locale.Italian]: "Sistine scioccata",
        [Locale.Indonesian]: "Sistine terkejut",
        [Locale.Czech]: "Sistine v šoku",
        [Locale.Japanese]: "ショックを受けるシスティーナ",
        [Locale.Korean]: "시스티나 충격",
        [Locale.ChineseCN]: "希丝缇娜震惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 432,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/arobmiSistineShocked.gif"
                width={432}
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
