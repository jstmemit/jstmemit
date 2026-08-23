import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const futuramaSkeletons: Template = {
    name: "futuramaSkeletons",
    displayName: buildLocales("Skeletons", {
        [Locale.Russian]: "Скелеты",
        [Locale.Ukrainian]: "Скелети",
        [Locale.Dutch]: "Skeletten",
        [Locale.French]: "Squelettes",
        [Locale.German]: "Skelette",
        [Locale.Polish]: "Szkielety",
        [Locale.SpanishES]: "Esqueletos",
        [Locale.SpanishLATAM]: "Esqueletos",
        [Locale.PortugueseBR]: "Esqueletos",
        [Locale.Turkish]: "İskeletler",
        [Locale.Italian]: "Scheletri",
        [Locale.Indonesian]: "Kerangka",
        [Locale.Czech]: "Kostlivci",
        [Locale.Japanese]: "スケルトン",
        [Locale.Korean]: "해골",
        [Locale.ChineseCN]: "骷髅",
    }),
    topics: [Topic.Futurama, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottom],
    width: 480,
    height: 385,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "face in the left" },
        { id: 1, description: "face in the center" },
        { id: 2, description: "face in the right" },
    ],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaSkeletons.jpg"
                width={480}
                height={385}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={95}
                height={95}
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "13%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={70}
                height={70}
                style={{
                    position: "absolute",
                    top: "26%",
                    left: "38%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[2]}
                width={90}
                height={90}
                style={{
                    position: "absolute",
                    top: "17%",
                    right: "16%",
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
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
