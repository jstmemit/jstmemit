import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiJudging: Template = {
    name: "rtnobgsMaiJudging",
    displayName: buildLocales("Mai judging", {
        [Locale.Russian]: "Осуждающая Май",
        [Locale.Ukrainian]: "Осудлива Май",
        [Locale.Dutch]: "Oordelende Mai",
        [Locale.French]: "Mai qui juge",
        [Locale.German]: "Urteilende Mai",
        [Locale.Polish]: "Oceniająca Mai",
        [Locale.SpanishES]: "Mai juzgando",
        [Locale.SpanishLATAM]: "Mai juzgando",
        [Locale.PortugueseBR]: "Mai julgando",
        [Locale.Turkish]: "Yargılayan Mai",
        [Locale.Italian]: "Mai che giudica",
        [Locale.Indonesian]: "Mai menghakimi",
        [Locale.Czech]: "Soudící Mai",
        [Locale.Japanese]: "ジト目の麻衣",
        [Locale.Korean]: "평가하는 마이",
        [Locale.ChineseCN]: "审视的麻衣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextBottom, Type.Animated],
    width: 540,
    height: 519,
    animationDuration: 1920,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsMaiJudging.gif"
                width={540}
                height={519}
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
