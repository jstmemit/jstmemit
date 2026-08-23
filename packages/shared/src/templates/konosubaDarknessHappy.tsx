import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaDarknessHappy: Template = {
    name: "konosubaDarknessHappy",
    displayName: buildLocales("Happy Darkness", {
        [Locale.Russian]: "Счастливая Даркнесс",
        [Locale.Ukrainian]: "Щаслива Даркнесс",
        [Locale.Dutch]: "Blije Darkness",
        [Locale.French]: "Darkness heureuse",
        [Locale.German]: "Glückliche Darkness",
        [Locale.Polish]: "Szczęśliwa Darkness",
        [Locale.SpanishES]: "Darkness feliz",
        [Locale.SpanishLATAM]: "Darkness feliz",
        [Locale.PortugueseBR]: "Darkness feliz",
        [Locale.Turkish]: "Mutlu Darkness",
        [Locale.Italian]: "Darkness felice",
        [Locale.Indonesian]: "Darkness senang",
        [Locale.Czech]: "Šťastná Darkness",
        [Locale.Japanese]: "喜ぶダクネス",
        [Locale.Korean]: "기뻐하는 다크니스",
        [Locale.ChineseCN]: "开心的达克妮斯",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 2200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaDarknessHappy.gif"
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
