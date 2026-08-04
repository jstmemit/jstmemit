import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const stonks1: Template = {
    name: "stonks1",
    displayName: buildLocales("Stonks 1", {
        [Locale.Russian]: "Stonks 1",
        [Locale.Ukrainian]: "Stonks 1",
        [Locale.Dutch]: "Stonks 1",
        [Locale.French]: "Stonks 1",
        [Locale.German]: "Stonks 1",
        [Locale.Polish]: "Stonks 1",
        [Locale.SpanishES]: "Stonks 1",
        [Locale.SpanishLATAM]: "Stonks 1",
        [Locale.PortugueseBR]: "Stonks 1",
        [Locale.Turkish]: "Stonks 1",
        [Locale.Italian]: "Stonks 1",
        [Locale.Indonesian]: "Stonks 1",
        [Locale.Czech]: "Stonks 1",
        [Locale.Japanese]: "ストンクス 1",
        [Locale.Korean]: "스통크스 1",
        [Locale.ChineseCN]: "Stonks 1",
    }),
    topics: [Topic.Reaction],
    types: [Type.FaceImage, Type.TextRight],
    width: 1858,
    height: 1304,
    texts: [{ id: 0, description: "the phrase", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "stonks guy`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/stonks-without-stonks.jpg"
                width={1858}
                height={1304}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={500}
                height={500}
                style={{ position: "absolute", top: 60, left: 160, borderRadius: "100%", objectFit: "cover" }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 100,
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
