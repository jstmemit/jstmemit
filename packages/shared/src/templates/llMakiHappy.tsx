import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const llMakiHappy: Template = {
    name: "llMakiHappy",
    displayName: buildLocales("Happy Maki", {
        [Locale.Russian]: "Счастливая Маки",
        [Locale.Ukrainian]: "Щаслива Макі",
        [Locale.Dutch]: "Blije Maki",
        [Locale.French]: "Maki heureuse",
        [Locale.German]: "Glückliche Maki",
        [Locale.Polish]: "Szczęśliwa Maki",
        [Locale.SpanishES]: "Maki feliz",
        [Locale.SpanishLATAM]: "Maki feliz",
        [Locale.PortugueseBR]: "Maki feliz",
        [Locale.Turkish]: "Mutlu Maki",
        [Locale.Italian]: "Maki felice",
        [Locale.Indonesian]: "Maki senang",
        [Locale.Czech]: "Šťastná Maki",
        [Locale.Japanese]: "喜ぶ真姫",
        [Locale.Korean]: "기뻐하는 마키",
        [Locale.ChineseCN]: "开心的真姬",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LoveLab],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/llMakiHappy.gif"
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
