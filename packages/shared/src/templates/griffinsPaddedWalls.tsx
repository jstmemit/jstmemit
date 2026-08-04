import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const griffinsPaddedWalls: Template = {
    name: "griffinsPaddedWalls",
    displayName: buildLocales("Padded walls", {
        [Locale.Russian]: "Мягкие стены",
        [Locale.Ukrainian]: "М'які стіни",
        [Locale.Dutch]: "Gewatteerde muren",
        [Locale.French]: "Murs capitonnés",
        [Locale.German]: "Gummizelle",
        [Locale.Polish]: "Wyściełane ściany",
        [Locale.SpanishES]: "Paredes acolchadas",
        [Locale.SpanishLATAM]: "Paredes acolchadas",
        [Locale.PortugueseBR]: "Paredes acolchoadas",
        [Locale.Turkish]: "Yumuşak duvarlar",
        [Locale.Italian]: "Muri imbottiti",
        [Locale.Indonesian]: "Dinding berlapis empuk",
        [Locale.Czech]: "Polstrované zdi",
        [Locale.Japanese]: "クッション壁",
        [Locale.Korean]: "푹신한 벽",
        [Locale.ChineseCN]: "软包墙",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextBottomWithBackground, Type.FaceImage],
    width: 640,
    height: 457,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "Peter`s face" }],
    element: ({ texts, images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPaddedWalls.jpg"
                width={640}
                height={357}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={120}
                height={120}
                style={{
                    position: "absolute",
                    top: "12%",
                    left: "32%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
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
