import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dandadanOkarunWriting: Template = {
    name: "dandadanOkarunWriting",
    displayName: buildLocales("Okarun writing", {
        [Locale.Russian]: "Окарун пишет",
        [Locale.Ukrainian]: "Окарун пише",
        [Locale.Dutch]: "Okarun schrijft",
        [Locale.French]: "Okarun écrit",
        [Locale.German]: "Okarun schreibt",
        [Locale.Polish]: "Okarun pisze",
        [Locale.SpanishES]: "Okarun escribiendo",
        [Locale.SpanishLATAM]: "Okarun escribiendo",
        [Locale.PortugueseBR]: "Okarun escrevendo",
        [Locale.Turkish]: "Okarun yazıyor",
        [Locale.Italian]: "Okarun che scrive",
        [Locale.Indonesian]: "Okarun menulis",
        [Locale.Czech]: "Okarun píše",
        [Locale.Japanese]: "文字を書くオカルン",
        [Locale.Korean]: "글을 쓰는 오카룬",
        [Locale.ChineseCN]: "厄卡伦写字",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 412,
    animationDuration: 2000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dandadanOkarunWriting.gif"
                width={498}
                height={322}
                style={{ position: "absolute", top: 0, right: 0 }}
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
