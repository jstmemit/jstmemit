import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoEmaYasuharaBlush: Template = {
    name: "shirobakoEmaYasuharaBlush",
    displayName: buildLocales("Ema Yasuhara blushing", {
        [Locale.Russian]: "Смущенная Эма Ясухара",
        [Locale.Ukrainian]: "Збентежена Ема Ясухара",
        [Locale.Dutch]: "Blozende Ema Yasuhara",
        [Locale.French]: "Ema Yasuhara rougissante",
        [Locale.German]: "Errötende Ema Yasuhara",
        [Locale.Polish]: "Zarumieniona Ema Yasuhara",
        [Locale.SpanishES]: "Ema Yasuhara sonrojada",
        [Locale.SpanishLATAM]: "Ema Yasuhara sonrojada",
        [Locale.PortugueseBR]: "Ema Yasuhara corada",
        [Locale.Turkish]: "Kızaran Ema Yasuhara",
        [Locale.Italian]: "Ema Yasuhara arrossita",
        [Locale.Indonesian]: "Ema Yasuhara tersipu",
        [Locale.Czech]: "Červenající se Ema Yasuhara",
        [Locale.Japanese]: "赤面する安原絵麻",
        [Locale.Korean]: "얼굴을 붉히는 야스하라 에마",
        [Locale.ChineseCN]: "脸红的安原绘麻",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextTopWithBackground, Type.Animated],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoEmaYasuharaBlush.gif"
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
