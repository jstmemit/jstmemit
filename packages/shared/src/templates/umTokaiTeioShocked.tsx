import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umTokaiTeioShocked: Template = {
    name: "umTokaiTeioShocked",
    displayName: buildLocales("Tokai Teio shocked", {
        [Locale.Russian]: "Шокированная Токай Тейо",
        [Locale.Ukrainian]: "Шокована Токай Тейо",
        [Locale.Dutch]: "Geshockeerde Tokai Teio",
        [Locale.French]: "Tokai Teio choquée",
        [Locale.German]: "Geschockte Tokai Teio",
        [Locale.Polish]: "Zszokowana Tokai Teio",
        [Locale.SpanishES]: "Tokai Teio en shock",
        [Locale.SpanishLATAM]: "Tokai Teio en shock",
        [Locale.PortugueseBR]: "Tokai Teio chocada",
        [Locale.Turkish]: "Şok olmuş Tokai Teio",
        [Locale.Italian]: "Tokai Teio scioccata",
        [Locale.Indonesian]: "Tokai Teio terkejut",
        [Locale.Czech]: "Šokovaná Tokai Teio",
        [Locale.Japanese]: "ショックを受けるトウカイテイオー",
        [Locale.Korean]: "충격받은 토카이 테이오",
        [Locale.ChineseCN]: "震惊的东海帝王",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 600,
    height: 441,
    animationDuration: 1200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umTokaiTeioShocked.gif"
                width={600}
                height={331}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
