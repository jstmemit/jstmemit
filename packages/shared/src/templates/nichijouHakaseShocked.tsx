import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouHakaseShocked: Template = {
    name: "nichijouHakaseShocked",
    displayName: buildLocales("Hakase shocked", {
        [Locale.Russian]: "Шокированная Хакасэ",
        [Locale.Ukrainian]: "Шокована Хакасе",
        [Locale.Dutch]: "Geschokte Hakase",
        [Locale.French]: "Hakase choquée",
        [Locale.German]: "Geschockte Hakase",
        [Locale.Polish]: "Zszokowana Hakase",
        [Locale.SpanishES]: "Hakase en shock",
        [Locale.SpanishLATAM]: "Hakase en shock",
        [Locale.PortugueseBR]: "Hakase chocada",
        [Locale.Turkish]: "Şok olmuş Hakase",
        [Locale.Italian]: "Hakase scioccata",
        [Locale.Indonesian]: "Hakase terkejut",
        [Locale.Czech]: "Šokovaná Hakase",
        [Locale.Japanese]: "ショックを受けるはかせ",
        [Locale.Korean]: "충격받은 하카세",
        [Locale.ChineseCN]: "震惊的博士",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 240,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouHakaseShocked.gif"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
