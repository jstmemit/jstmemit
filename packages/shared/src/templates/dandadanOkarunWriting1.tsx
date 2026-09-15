import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanOkarunWriting1: Template = {
    name: "dandadanOkarunWriting1",
    displayName: buildLocales("Okarun writing 1", {
        [Locale.Russian]: "Окарун пишет 1",
        [Locale.Ukrainian]: "Окарун пише 1",
        [Locale.Dutch]: "Okarun schrijft 1",
        [Locale.French]: "Okarun écrit 1",
        [Locale.German]: "Okarun schreibt 1",
        [Locale.Polish]: "Okarun pisze 1",
        [Locale.SpanishES]: "Okarun escribiendo 1",
        [Locale.SpanishLATAM]: "Okarun escribiendo 1",
        [Locale.PortugueseBR]: "Okarun escrevendo 1",
        [Locale.Turkish]: "Okarun yazıyor 1",
        [Locale.Italian]: "Okarun che scrive 1",
        [Locale.Indonesian]: "Okarun menulis 1",
        [Locale.Czech]: "Okarun píše 1",
        [Locale.Japanese]: "文字を書くオカルン 1",
        [Locale.Korean]: "글을 쓰는 오카룬 1",
        [Locale.ChineseCN]: "厄卡伦写字 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground],
    width: 498,
    height: 422,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanOkarunWriting1.png"
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
                    height: "100px",
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
