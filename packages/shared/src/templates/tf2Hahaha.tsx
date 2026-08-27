import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tf2Hahaha: Template = {
    name: "tf2Hahaha",
    displayName: buildLocales("Hahaha", {
        [Locale.Russian]: "хахаха",
        [Locale.Ukrainian]: "хахаха",
        [Locale.Dutch]: "hahaha",
        [Locale.French]: "hahaha",
        [Locale.German]: "hahaha",
        [Locale.Polish]: "hahaha",
        [Locale.SpanishES]: "jajaja",
        [Locale.SpanishLATAM]: "jajaja",
        [Locale.PortugueseBR]: "hahaha",
        [Locale.Turkish]: "hahaha",
        [Locale.Italian]: "ahahah",
        [Locale.Indonesian]: "hahaha",
        [Locale.Czech]: "hahaha",
        [Locale.Japanese]: "ハハハ",
        [Locale.Korean]: "하하하",
        [Locale.ChineseCN]: "哈哈哈",
    }),
    topics: [Topic.TeamFortress2, Topic.Games, Topic.Reaction],
    types: [Type.FaceImage, Type.TextRight],
    width: 1732,
    height: 1732,
    texts: [{ id: 0, description: "phrase", minLength: 1, maxLength: 12 }],
    images: [
        { id: 0, description: "person who says the phrase" },
        { id: 1, description: "person who reacts" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/tf2hahaha.jpg"
                width={1732}
                height={1732}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={500}
                height={500}
                style={{
                    position: "absolute",
                    top: 50,
                    left: 400,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: 900,
                    left: 1350,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: 900,
                    left: 200,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "40%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5))",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
