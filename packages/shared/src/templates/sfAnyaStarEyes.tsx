import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaStarEyes: Template = {
    name: "sfAnyaStarEyes",
    displayName: buildLocales("Anya star eyes", {
        [Locale.Russian]: "Аня с глазами-звездами",
        [Locale.Ukrainian]: "Аня з очима-зірками",
        [Locale.Dutch]: "Anya met sterrenogen",
        [Locale.French]: "Anya avec des étoiles dans les yeux",
        [Locale.German]: "Anya mit Sternenaugen",
        [Locale.Polish]: "Anya z gwiazdami w oczach",
        [Locale.SpanishES]: "Anya con estrellas en los ojos",
        [Locale.SpanishLATAM]: "Anya con estrellas en los ojos",
        [Locale.PortugueseBR]: "Anya com estrelas nos olhos",
        [Locale.Turkish]: "Yıldız gözlü Anya",
        [Locale.Italian]: "Anya con gli occhi a stella",
        [Locale.Indonesian]: "Anya dengan mata bintang",
        [Locale.Czech]: "Anya s hvězdičkami v očích",
        [Locale.Japanese]: "星目のアーニャ",
        [Locale.Korean]: "별눈 아냐",
        [Locale.ChineseCN]: "星星眼的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 425,
    animationDuration: 650,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaStarEyes.gif"
                width={498}
                height={325}
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
