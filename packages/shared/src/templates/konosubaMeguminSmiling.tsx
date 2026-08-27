import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaMeguminSmiling: Template = {
    name: "konosubaMeguminSmiling",
    displayName: buildLocales("Smiling Megumin", {
        [Locale.Russian]: "Улыбающаяся Мегумин",
        [Locale.Ukrainian]: "Усміхнена Меґумін",
        [Locale.Dutch]: "Glimlachende Megumin",
        [Locale.French]: "Megumin souriante",
        [Locale.German]: "Lächelnde Megumin",
        [Locale.Polish]: "Uśmiechająca się Megumin",
        [Locale.SpanishES]: "Megumin sonriendo",
        [Locale.SpanishLATAM]: "Megumin sonriendo",
        [Locale.PortugueseBR]: "Megumin sorrindo",
        [Locale.Turkish]: "Gülümseyen Megumin",
        [Locale.Italian]: "Megumin sorridente",
        [Locale.Indonesian]: "Megumin tersenyum",
        [Locale.Czech]: "Usmívající se Megumin",
        [Locale.Japanese]: "微笑むめぐみん",
        [Locale.Korean]: "미소 짓는 메구민",
        [Locale.ChineseCN]: "微笑的惠惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 160,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaMeguminSmiling.gif"
                width={540}
                height={304}
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
