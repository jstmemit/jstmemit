import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gjbuKasumiBites: Template = {
    name: "gjbuKasumiBites",
    displayName: buildLocales("Kasumi bites", {
        [Locale.Russian]: "Касуми кусает",
        [Locale.Ukrainian]: "Касумі кусає",
        [Locale.Dutch]: "Kasumi bijt",
        [Locale.French]: "Kasumi mord",
        [Locale.German]: "Kasumi beißt",
        [Locale.Polish]: "Kasumi gryzie",
        [Locale.SpanishES]: "Kasumi muerde",
        [Locale.SpanishLATAM]: "Kasumi muerde",
        [Locale.PortugueseBR]: "Kasumi morde",
        [Locale.Turkish]: "Kasumi ısırıyor",
        [Locale.Italian]: "Kasumi morde",
        [Locale.Indonesian]: "Kasumi menggigit",
        [Locale.Czech]: "Kasumi kouše",
        [Locale.Japanese]: "霞の噛みつき",
        [Locale.Korean]: "카스미 깨물기",
        [Locale.ChineseCN]: "霞咬人",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GJBu],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 368,
    animationDuration: 1500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gjbuKasumiBites.gif"
                width={498}
                height={278}
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
