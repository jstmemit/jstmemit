import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaShocked: Template = {
    name: "sfAnyaShocked",
    displayName: buildLocales("Anya shocked", {
        [Locale.Russian]: "Шокированная Аня",
        [Locale.Ukrainian]: "Шокована Аня",
        [Locale.Dutch]: "Geschokte Anya",
        [Locale.French]: "Anya choquée",
        [Locale.German]: "Schockierte Anya",
        [Locale.Polish]: "Zszokowana Anya",
        [Locale.SpanishES]: "Anya en shock",
        [Locale.SpanishLATAM]: "Anya en shock",
        [Locale.PortugueseBR]: "Anya chocada",
        [Locale.Turkish]: "Şok olmuş Anya",
        [Locale.Italian]: "Anya scioccata",
        [Locale.Indonesian]: "Anya syok",
        [Locale.Czech]: "Šokovaná Anya",
        [Locale.Japanese]: "ショックを受けたアーニャ",
        [Locale.Korean]: "충격받은 아냐",
        [Locale.ChineseCN]: "震惊的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 347,
    animationDuration: 2300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaShocked.gif"
                width={498}
                height={247}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
