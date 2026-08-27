import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruSliding: Template = {
    name: "hucUmaruSliding",
    displayName: buildLocales("Umaru sliding", {
        [Locale.Russian]: "Умару скользит",
        [Locale.Ukrainian]: "Умару ковзає",
        [Locale.Dutch]: "Glijdende Umaru",
        [Locale.French]: "Umaru qui glisse",
        [Locale.German]: "Rutschende Umaru",
        [Locale.Polish]: "Ślizgająca się Umaru",
        [Locale.SpanishES]: "Umaru deslizándose",
        [Locale.SpanishLATAM]: "Umaru deslizándose",
        [Locale.PortugueseBR]: "Umaru deslizando",
        [Locale.Turkish]: "Kayan Umaru",
        [Locale.Italian]: "Umaru che scivola",
        [Locale.Indonesian]: "Umaru meluncur",
        [Locale.Czech]: "Klouzající Umaru",
        [Locale.Japanese]: "滑るうまる",
        [Locale.Korean]: "미끄러지는 우마루",
        [Locale.ChineseCN]: "滑行的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 660,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruSliding.gif"
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
