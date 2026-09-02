import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const stonks: Template = {
    name: "stonks",
    displayName: buildLocales("Stonks", {
        [Locale.Russian]: "Stonks",
        [Locale.Ukrainian]: "Stonks",
        [Locale.Dutch]: "Stonks",
        [Locale.French]: "Stonks",
        [Locale.German]: "Stonks",
        [Locale.Polish]: "Stonks",
        [Locale.SpanishES]: "Stonks",
        [Locale.SpanishLATAM]: "Stonks",
        [Locale.PortugueseBR]: "Stonks",
        [Locale.Turkish]: "Stonks",
        [Locale.Italian]: "Stonks",
        [Locale.Indonesian]: "Stonks",
        [Locale.Czech]: "Stonks",
        [Locale.Japanese]: "ストンクス",
        [Locale.Korean]: "스통크스",
        [Locale.ChineseCN]: "Stonks",
    }),
    topics: [Topic.Reaction],
    types: [Type.BackgroundImage, Type.TextRight],
    width: 512,
    height: 386,
    texts: [{ id: 0, description: "the phrase", minLength: 1, maxLength: 16 }],
    images: [{ id: 0, description: "what the stonks guy is happy about" }],
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
                src={images[0]}
                width={512}
                height={386}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/stonks.png"
                width={512}
                height={386}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 10,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
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
