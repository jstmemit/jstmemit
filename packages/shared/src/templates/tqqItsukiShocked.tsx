import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqItsukiShocked: Template = {
    name: "tqqItsukiShocked",
    displayName: buildLocales("Itsuki shocked", {
        [Locale.Russian]: "Шокированная Ицуки",
        [Locale.Ukrainian]: "Шокована Іцукі",
        [Locale.Dutch]: "Geschokte Itsuki",
        [Locale.French]: "Itsuki choquée",
        [Locale.German]: "Schockierte Itsuki",
        [Locale.Polish]: "Zszokowana Itsuki",
        [Locale.SpanishES]: "Itsuki conmocionada",
        [Locale.SpanishLATAM]: "Itsuki impactada",
        [Locale.PortugueseBR]: "Itsuki chocada",
        [Locale.Turkish]: "Şok olmuş Itsuki",
        [Locale.Italian]: "Itsuki scioccata",
        [Locale.Indonesian]: "Itsuki terkejut",
        [Locale.Czech]: "Šokovaná Itsuki",
        [Locale.Japanese]: "ショックを受ける五月",
        [Locale.Korean]: "충격받은 이츠키",
        [Locale.ChineseCN]: "震惊的五月",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 382,
    animationDuration: 2320,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqItsukiShocked.gif"
                width={498}
                height={282}
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
