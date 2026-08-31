import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiKofukuShocked: Template = {
    name: "noragamiKofukuShocked",
    displayName: buildLocales("Kofuku shocked", {
        [Locale.Russian]: "Шокированная Кофуку",
        [Locale.Ukrainian]: "Шокована Кофуку",
        [Locale.Dutch]: "Geschokte Kofuku",
        [Locale.French]: "Kofuku choquée",
        [Locale.German]: "Geschockte Kofuku",
        [Locale.Polish]: "Zszokowana Kofuku",
        [Locale.SpanishES]: "Kofuku en shock",
        [Locale.SpanishLATAM]: "Kofuku en shock",
        [Locale.PortugueseBR]: "Kofuku chocada",
        [Locale.Turkish]: "Şok olmuş Kofuku",
        [Locale.Italian]: "Kofuku scioccata",
        [Locale.Indonesian]: "Kofuku terkejut",
        [Locale.Czech]: "Šokovaná Kofuku",
        [Locale.Japanese]: "ショックを受ける小福",
        [Locale.Korean]: "충격받은 코후쿠",
        [Locale.ChineseCN]: "震惊的小福",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 1600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/noragamiKofukuShocked.gif"
                width={500}
                height={281}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
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
