import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataHappy: Template = {
    name: "lsKonataHappy",
    displayName: buildLocales("Happy Konata", {
        [Locale.Russian]: "Счастливая Коната",
        [Locale.Ukrainian]: "Щаслива Коната",
        [Locale.Dutch]: "Blije Konata",
        [Locale.French]: "Konata heureuse",
        [Locale.German]: "Glückliche Konata",
        [Locale.Polish]: "Szczęśliwa Konata",
        [Locale.SpanishES]: "Konata feliz",
        [Locale.SpanishLATAM]: "Konata feliz",
        [Locale.PortugueseBR]: "Konata feliz",
        [Locale.Turkish]: "Mutlu Konata",
        [Locale.Italian]: "Konata felice",
        [Locale.Indonesian]: "Konata senang",
        [Locale.Czech]: "Šťastná Konata",
        [Locale.Japanese]: "喜ぶこなた",
        [Locale.Korean]: "기뻐하는 코나타",
        [Locale.ChineseCN]: "开心的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 728,
    height: 364,
    animationDuration: 2110,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataHappy.gif"
                width={364}
                height={364}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
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
