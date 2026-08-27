import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ceLucyHacking: Template = {
    name: "ceLucyHacking",
    displayName: buildLocales("Lucy hacking", {
        [Locale.Russian]: "Люси взламывает",
        [Locale.Ukrainian]: "Люсі зламує",
        [Locale.Dutch]: "Lucy hackt",
        [Locale.French]: "Lucy en train de hacker",
        [Locale.German]: "Lucy hackt",
        [Locale.Polish]: "Lucy hakuje",
        [Locale.SpanishES]: "Lucy hackeando",
        [Locale.SpanishLATAM]: "Lucy hackeando",
        [Locale.PortugueseBR]: "Lucy hackeando",
        [Locale.Turkish]: "Lucy hackliyor",
        [Locale.Italian]: "Lucy che hacka",
        [Locale.Indonesian]: "Lucy meretas",
        [Locale.Czech]: "Lucy hackuje",
        [Locale.Japanese]: "ハッキングするルーシー",
        [Locale.Korean]: "해킹하는 루시",
        [Locale.ChineseCN]: "露西黑入系统",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.CyberpunkEdgerunners],
    types: [Type.TextTopWithBackground, Type.AvatarImage],
    width: 640,
    height: 572,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "avatar" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ceLucyHacking.png"
                width={640}
                height={462}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 300,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                    filter: "sepia(1) hue-rotate(330deg) saturate(3)",
                    opacity: 0.6,
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
