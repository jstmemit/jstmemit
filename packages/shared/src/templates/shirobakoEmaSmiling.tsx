import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoEmaSmiling: Template = {
    name: "shirobakoEmaSmiling",
    displayName: buildLocales("Ema Yasuhara smiling", {
        [Locale.Russian]: "Улыбающаяся Эма Ясухара",
        [Locale.Ukrainian]: "Усміхнена Ема Ясухара",
        [Locale.Dutch]: "Glimlachende Ema Yasuhara",
        [Locale.French]: "Ema Yasuhara souriante",
        [Locale.German]: "Lächelnde Ema Yasuhara",
        [Locale.Polish]: "Uśmiechnięta Ema Yasuhara",
        [Locale.SpanishES]: "Ema Yasuhara sonriendo",
        [Locale.SpanishLATAM]: "Ema Yasuhara sonriendo",
        [Locale.PortugueseBR]: "Ema Yasuhara sorrindo",
        [Locale.Turkish]: "Gülümseyen Ema Yasuhara",
        [Locale.Italian]: "Ema Yasuhara che sorride",
        [Locale.Indonesian]: "Ema Yasuhara tersenyum",
        [Locale.Czech]: "Usmívající se Ema Yasuhara",
        [Locale.Japanese]: "微笑む安原絵麻",
        [Locale.Korean]: "미소 짓는 야스하라 에마",
        [Locale.ChineseCN]: "微笑的安原绘麻",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 1620,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoEmaSmiling.gif"
                width={500}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
