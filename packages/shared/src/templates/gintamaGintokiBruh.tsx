import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiBruh: Template = {
    name: "gintamaGintokiBruh",
    displayName: buildLocales("Gintoki bruh", {
        [Locale.Russian]: "Гинтоки bruh",
        [Locale.Ukrainian]: "Гінтокі bruh",
        [Locale.Dutch]: "Gintoki bruh",
        [Locale.French]: "Gintoki bruh",
        [Locale.German]: "Gintoki bruh",
        [Locale.Polish]: "Gintoki bruh",
        [Locale.SpanishES]: "Gintoki bruh",
        [Locale.SpanishLATAM]: "Gintoki bruh",
        [Locale.PortugueseBR]: "Gintoki bruh",
        [Locale.Turkish]: "Gintoki bruh",
        [Locale.Italian]: "Gintoki bruh",
        [Locale.Indonesian]: "Gintoki bruh",
        [Locale.Czech]: "Gintoki bruh",
        [Locale.Japanese]: "呆れる銀時",
        [Locale.Korean]: "어이없는 긴토키",
        [Locale.ChineseCN]: "无语的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 474,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiBruh.png"
                width={500}
                height={374}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
