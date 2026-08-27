import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsPeterGriffinThinking: Template = {
    name: "griffinsPeterGriffinThinking",
    displayName: buildLocales("Peter Griffin thinking", {
        [Locale.Russian]: "Питер Гриффин думает",
        [Locale.Ukrainian]: "Пітер Гріффін думає",
        [Locale.Dutch]: "Nadenkende Peter Griffin",
        [Locale.French]: "Peter Griffin pensif",
        [Locale.German]: "Nachdenklicher Peter Griffin",
        [Locale.Polish]: "Myślący Peter Griffin",
        [Locale.SpanishES]: "Peter Griffin pensando",
        [Locale.SpanishLATAM]: "Peter Griffin pensando",
        [Locale.PortugueseBR]: "Peter Griffin pensando",
        [Locale.Turkish]: "Düşünen Peter Griffin",
        [Locale.Italian]: "Peter Griffin che pensa",
        [Locale.Indonesian]: "Peter Griffin berpikir",
        [Locale.Czech]: "Přemýšlející Peter Griffin",
        [Locale.Japanese]: "考えるピーター・グリフィン",
        [Locale.Korean]: "생각하는 피터 그리핀",
        [Locale.ChineseCN]: "思考中的彼得·格里芬",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextBottom, Type.FaceImage],
    width: 604,
    height: 453,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Peter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterGriffinThinking.jpg"
                width={604}
                height={453}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: "32%",
                    left: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[0]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: "5%",
                    right: 50,
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
