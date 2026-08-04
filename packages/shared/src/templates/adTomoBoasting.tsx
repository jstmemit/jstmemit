import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adTomoBoasting: Template = {
    name: "adTomoBoasting",
    displayName: buildLocales("Tomo boasting", {
        [Locale.Russian]: "Томо хвастается",
        [Locale.Ukrainian]: "Томо хвалиться",
        [Locale.Dutch]: "Tomo schept op",
        [Locale.French]: "Tomo se vante",
        [Locale.German]: "Tomo gibt an",
        [Locale.Polish]: "Tomo się chwali",
        [Locale.SpanishES]: "Tomo presumiendo",
        [Locale.SpanishLATAM]: "Tomo presumiendo",
        [Locale.PortugueseBR]: "Tomo se gabando",
        [Locale.Turkish]: "Tomo böbürleniyor",
        [Locale.Italian]: "Tomo si vanta",
        [Locale.Indonesian]: "Tomo menyombongkan diri",
        [Locale.Czech]: "Tomo se chlubí",
        [Locale.Japanese]: "自慢する智",
        [Locale.Korean]: "뽐내는 토모",
        [Locale.ChineseCN]: "智自夸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 468,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adTomoBoasting.gif"
                width={498}
                height={373}
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
