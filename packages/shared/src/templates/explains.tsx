import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const explains: Template = {
    name: "explains",
    displayName: buildLocales("Jim explains", {
        [Locale.Russian]: "Джим объясняет",
        [Locale.Ukrainian]: "Джим пояснює",
        [Locale.Dutch]: "Jim legt uit",
        [Locale.French]: "Jim explique",
        [Locale.German]: "Jim erklärt",
        [Locale.Polish]: "Jim tłumaczy",
        [Locale.SpanishES]: "Jim explica",
        [Locale.SpanishLATAM]: "Jim explica",
        [Locale.PortugueseBR]: "Jim explica",
        [Locale.Turkish]: "Jim açıklıyor",
        [Locale.Italian]: "Jim spiega",
        [Locale.Indonesian]: "Jim menjelaskan",
        [Locale.Czech]: "Jim vysvětluje",
        [Locale.Japanese]: "説明するジム",
        [Locale.Korean]: "설명하는 짐",
        [Locale.ChineseCN]: "吉姆解释",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.ObjectImage, Type.TwoOption, Type.TextBottom],
    width: 700,
    height: 800,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "content of whiteboard" }],
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
            <img src={images[0]} width={455} height={360} style={{ position: "absolute", top: 20, left: 0 }} />
            <img src={images[0]} width={400} height={320} style={{ position: "absolute", top: 435, left: 0 }} />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/explains.png"
                width={700}
                height={800}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: 50,
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
