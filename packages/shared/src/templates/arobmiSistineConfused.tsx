import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const arobmiSistineConfused: Template = {
    name: "arobmiSistineConfused",
    displayName: buildLocales("Sistine confused", {
        [Locale.Russian]: "Систина в замешательстве",
        [Locale.Ukrainian]: "Сістіна збентежена",
        [Locale.Dutch]: "Sistine in de war",
        [Locale.French]: "Sistine confuse",
        [Locale.German]: "Sistine verwirrt",
        [Locale.Polish]: "Sistine zdezorientowana",
        [Locale.SpanishES]: "Sistine confundida",
        [Locale.SpanishLATAM]: "Sistine confundida",
        [Locale.PortugueseBR]: "Sistine confusa",
        [Locale.Turkish]: "Sistine kafası karışık",
        [Locale.Italian]: "Sistine confusa",
        [Locale.Indonesian]: "Sistine bingung",
        [Locale.Czech]: "Sistine zmatená",
        [Locale.Japanese]: "困惑するシスティーナ",
        [Locale.Korean]: "시스티나 혼란",
        [Locale.ChineseCN]: "希丝缇娜困惑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 2100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/arobmiSistineConfused.gif"
                width={540}
                height={304}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
