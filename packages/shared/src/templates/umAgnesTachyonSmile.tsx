import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umAgnesTachyonSmile: Template = {
    name: "umAgnesTachyonSmile",
    displayName: buildLocales("Agnes Tachyon smiling", {
        [Locale.Russian]: "Улыбающаяся Агнес Тахион",
        [Locale.Ukrainian]: "Усміхнена Агнес Тахіон",
        [Locale.Dutch]: "Glimlachende Agnes Tachyon",
        [Locale.French]: "Agnes Tachyon souriante",
        [Locale.German]: "Lächelnde Agnes Tachyon",
        [Locale.Polish]: "Uśmiechnięta Agnes Tachyon",
        [Locale.SpanishES]: "Agnes Tachyon sonriendo",
        [Locale.SpanishLATAM]: "Agnes Tachyon sonriendo",
        [Locale.PortugueseBR]: "Agnes Tachyon sorrindo",
        [Locale.Turkish]: "Gülümseyen Agnes Tachyon",
        [Locale.Italian]: "Agnes Tachyon che sorride",
        [Locale.Indonesian]: "Agnes Tachyon tersenyum",
        [Locale.Czech]: "Usmívající se Agnes Tachyon",
        [Locale.Japanese]: "微笑むアグネスタキオン",
        [Locale.Korean]: "미소 짓는 아그네스 타키온",
        [Locale.ChineseCN]: "微笑的爱丽速子",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextBottom, Type.Animated],
    width: 498,
    height: 498,
    animationDuration: 1450,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umAgnesTachyonSmile.gif"
                width={498}
                height={498}
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
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
