import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const griffinsElephantAndPenguin: Template = {
    name: "griffinsElephantAndPenguin",
    displayName: buildLocales("Elephant and penguin", {
        [Locale.Russian]: "Слон и пингвин",
        [Locale.Ukrainian]: "Слон і пінгвін",
        [Locale.Dutch]: "Olifant en pinguïn",
        [Locale.French]: "Éléphant et pingouin",
        [Locale.German]: "Elefant und Pinguin",
        [Locale.Polish]: "Słoń i pingwin",
        [Locale.SpanishES]: "Elefante y pingüino",
        [Locale.SpanishLATAM]: "Elefante y pingüino",
        [Locale.PortugueseBR]: "Elefante e pinguim",
        [Locale.Turkish]: "Fil ve penguen",
        [Locale.Italian]: "Elefante e pinguino",
        [Locale.Indonesian]: "Gajah dan penguin",
        [Locale.Czech]: "Slon a tučňák",
        [Locale.Japanese]: "ゾウとペンギン",
        [Locale.Korean]: "코끼리와 펭귄",
        [Locale.ChineseCN]: "大象和企鹅",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextTopWithBackground, Type.FaceImage, Type.DefaultText],
    width: 450,
    height: 371,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "person`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsElephantAndPenguin.jpg"
                width={450}
                height={371}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: "35%",
                    left: 160,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
