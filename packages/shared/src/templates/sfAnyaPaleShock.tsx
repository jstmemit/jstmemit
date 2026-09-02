import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaPaleShock: Template = {
    name: "sfAnyaPaleShock",
    displayName: buildLocales("Anya pale shock", {
        [Locale.Russian]: "Побледневшая от шока Аня",
        [Locale.Ukrainian]: "Зблідла від шоку Аня",
        [Locale.Dutch]: "Bleke, geschokte Anya",
        [Locale.French]: "Anya pâle sous le choc",
        [Locale.German]: "Schockierte blasse Anya",
        [Locale.Polish]: "Blada z szoku Anya",
        [Locale.SpanishES]: "Anya pálida por el shock",
        [Locale.SpanishLATAM]: "Anya pálida por el shock",
        [Locale.PortugueseBR]: "Anya pálida em choque",
        [Locale.Turkish]: "Şoktan bembeyaz olan Anya",
        [Locale.Italian]: "Anya pallida per lo shock",
        [Locale.Indonesian]: "Anya pucat karena syok",
        [Locale.Czech]: "Šokem zbledlá Anya",
        [Locale.Japanese]: "ショックで青ざめるアーニャ",
        [Locale.Korean]: "충격받아 창백해진 아냐",
        [Locale.ChineseCN]: "震惊到脸色发白的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextLeft, Type.Animated],
    width: 640,
    height: 360,
    animationDuration: 5390,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 9 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaPaleShock.gif"
                width={640}
                height={360}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "40%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
