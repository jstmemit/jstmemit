import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ditfZeroTwoHeh: Template = {
    name: "ditfZeroTwoHeh",
    displayName: buildLocales("Zero Two heh", {
        [Locale.Russian]: "Зеро Ту хех",
        [Locale.Ukrainian]: "Зіро Ту хех",
        [Locale.Dutch]: "Zero Two heh",
        [Locale.French]: "Zero Two heh",
        [Locale.German]: "Zero Two heh",
        [Locale.Polish]: "Zero Two heh",
        [Locale.SpanishES]: "Zero Two je",
        [Locale.SpanishLATAM]: "Zero Two je",
        [Locale.PortugueseBR]: "Zero Two rs",
        [Locale.Turkish]: "Zero Two heh",
        [Locale.Italian]: "Zero Two eh",
        [Locale.Indonesian]: "Zero Two heh",
        [Locale.Czech]: "Zero Two heh",
        [Locale.Japanese]: "ゼロツーのふふっ",
        [Locale.Korean]: "제로투 흐음",
        [Locale.ChineseCN]: "02嘿嘿",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.FaceImage, Type.TextBottom],
    width: 720,
    height: 720,
    texts: [{ id: 0, description: "the phrase Zero Two says", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Zero Two's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoHeh.png"
                width={720}
                height={720}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{ position: "absolute", top: 130, right: 80, borderRadius: "100%", objectFit: "cover" }}
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
                        lineClamp: 2,
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
