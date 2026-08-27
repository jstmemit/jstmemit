import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrNijikaGoodbye: Template = {
    name: "btrNijikaGoodbye",
    displayName: buildLocales("Nijika goodbye", {
        [Locale.Russian]: "Нидзика прощается",
        [Locale.Ukrainian]: "Ніджіка прощається",
        [Locale.Dutch]: "Nijika neemt afscheid",
        [Locale.French]: "Nijika dit au revoir",
        [Locale.German]: "Nijika verabschiedet sich",
        [Locale.Polish]: "Nijika żegna się",
        [Locale.SpanishES]: "Nijika se despide",
        [Locale.SpanishLATAM]: "Nijika se despide",
        [Locale.PortugueseBR]: "Nijika se despedindo",
        [Locale.Turkish]: "Nijika veda ediyor",
        [Locale.Italian]: "Nijika saluta",
        [Locale.Indonesian]: "Nijika mengucapkan selamat tinggal",
        [Locale.Czech]: "Nijika se loučí",
        [Locale.Japanese]: "さよならのニジカ",
        [Locale.Korean]: "안녕 니지카",
        [Locale.ChineseCN]: "虹夏告别",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 465,
    animationDuration: 4200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrNijikaGoodbye.gif"
                width={498}
                height={375}
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
