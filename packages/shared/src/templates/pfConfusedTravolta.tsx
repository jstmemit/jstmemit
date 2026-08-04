import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const pfConfusedTravolta: Template = {
    name: "pfConfusedTravolta",
    displayName: buildLocales("Confused Travolta", {
        [Locale.Russian]: "Растерянный Траволта",
        [Locale.Ukrainian]: "Розгублений Траволта",
        [Locale.Dutch]: "Verwarde Travolta",
        [Locale.French]: "Travolta confus",
        [Locale.German]: "Verwirrter Travolta",
        [Locale.Polish]: "Zdezorientowany Travolta",
        [Locale.SpanishES]: "Travolta confundido",
        [Locale.SpanishLATAM]: "Travolta confundido",
        [Locale.PortugueseBR]: "Travolta confuso",
        [Locale.Turkish]: "Kafası karışık Travolta",
        [Locale.Italian]: "Travolta confuso",
        [Locale.Indonesian]: "Travolta kebingungan",
        [Locale.Czech]: "Zmatený Travolta",
        [Locale.Japanese]: "困惑するトラボルタ",
        [Locale.Korean]: "혼란스러운 트라볼타",
        [Locale.ChineseCN]: "困惑的特拉沃尔塔",
    }),
    topics: [Topic.PulpFiction, Topic.Movies, Topic.Reaction],
    types: [Type.TextBottom, Type.FaceImage],
    width: 735,
    height: 552,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Vincent's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/pfConfusedTravolta.jpg"
                width={735}
                height={552}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={125}
                height={125}
                style={{
                    position: "absolute",
                    top: "6%",
                    left: "37%",
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
                    height: "25%",
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
