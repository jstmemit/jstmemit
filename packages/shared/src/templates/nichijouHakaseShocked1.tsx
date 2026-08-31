import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouHakaseShocked1: Template = {
    name: "nichijouHakaseShocked1",
    displayName: buildLocales("Hakase shocked 1", {
        [Locale.Russian]: "Шокированная Хакасэ 1",
        [Locale.Ukrainian]: "Шокована Хакасе 1",
        [Locale.Dutch]: "Geschokte Hakase 1",
        [Locale.French]: "Hakase choquée 1",
        [Locale.German]: "Geschockte Hakase 1",
        [Locale.Polish]: "Zszokowana Hakase 1",
        [Locale.SpanishES]: "Hakase en shock 1",
        [Locale.SpanishLATAM]: "Hakase en shock 1",
        [Locale.PortugueseBR]: "Hakase chocada 1",
        [Locale.Turkish]: "Şok olmuş Hakase 1",
        [Locale.Italian]: "Hakase scioccata 1",
        [Locale.Indonesian]: "Hakase terkejut 1",
        [Locale.Czech]: "Šokovaná Hakase 1",
        [Locale.Japanese]: "ショックを受けるはかせ 1",
        [Locale.Korean]: "충격받은 하카세 1",
        [Locale.ChineseCN]: "震惊的博士 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 370,
    animationDuration: 1280,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouHakaseShocked1.gif"
                width={480}
                height={270}
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
