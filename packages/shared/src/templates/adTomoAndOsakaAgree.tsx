import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adTomoAndOsakaAgree: Template = {
    name: "adTomoAndOsakaAgree",
    displayName: buildLocales("Tomo and Osaka agree", {
        [Locale.Russian]: "Томо и Осака согласны",
        [Locale.Ukrainian]: "Томо і Осака згодні",
        [Locale.Dutch]: "Tomo en Osaka zijn het eens",
        [Locale.French]: "Tomo et Osaka sont d'accord",
        [Locale.German]: "Tomo und Osaka sind sich einig",
        [Locale.Polish]: "Tomo i Osaka się zgadzają",
        [Locale.SpanishES]: "Tomo y Osaka están de acuerdo",
        [Locale.SpanishLATAM]: "Tomo y Osaka están de acuerdo",
        [Locale.PortugueseBR]: "Tomo e Osaka concordam",
        [Locale.Turkish]: "Tomo ve Osaka aynı fikirde",
        [Locale.Italian]: "Tomo e Osaka sono d'accordo",
        [Locale.Indonesian]: "Tomo dan Osaka setuju",
        [Locale.Czech]: "Tomo a Osaka souhlasí",
        [Locale.Japanese]: "智と大阪が同意",
        [Locale.Korean]: "토모와 오사카가 동의함",
        [Locale.ChineseCN]: "智和大阪同意",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 495,
    animationDuration: 3700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adTomoAndOsakaAgree.gif"
                width={540}
                height={404}
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
