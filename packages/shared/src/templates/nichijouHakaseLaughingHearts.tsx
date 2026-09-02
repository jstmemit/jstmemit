import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouHakaseLaughingHearts: Template = {
    name: "nichijouHakaseLaughingHearts",
    displayName: buildLocales("Hakase laughing hearts", {
        [Locale.Russian]: "Хакасэ смеется с сердечками",
        [Locale.Ukrainian]: "Хакасе сміється з сердечками",
        [Locale.Dutch]: "Lachende Hakase met hartjes",
        [Locale.French]: "Hakase riant avec des cœurs",
        [Locale.German]: "Lachende Hakase mit Herzen",
        [Locale.Polish]: "Śmiejąca się Hakase z serduszkami",
        [Locale.SpanishES]: "Hakase riendo con corazones",
        [Locale.SpanishLATAM]: "Hakase riendo con corazones",
        [Locale.PortugueseBR]: "Hakase rindo com corações",
        [Locale.Turkish]: "Kalplerle gülen Hakase",
        [Locale.Italian]: "Hakase che ride con i cuori",
        [Locale.Indonesian]: "Hakase tertawa dengan hati",
        [Locale.Czech]: "Smějící se Hakase se srdíčky",
        [Locale.Japanese]: "ハートを浮かべて笑うはかせ",
        [Locale.Korean]: "하트와 함께 웃는 하카세",
        [Locale.ChineseCN]: "伴着爱心大笑的博士",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 2190,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouHakaseLaughingHearts.gif"
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
                    height: "90px",
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
