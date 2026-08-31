import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsMaiJudging1: Template = {
    name: "rtnobgsMaiJudging1",
    displayName: buildLocales("Mai judging 1", {
        [Locale.Russian]: "Осуждающая Май 1",
        [Locale.Ukrainian]: "Осудлива Май 1",
        [Locale.Dutch]: "Oordelende Mai 1",
        [Locale.French]: "Mai qui juge 1",
        [Locale.German]: "Urteilende Mai 1",
        [Locale.Polish]: "Oceniająca Mai 1",
        [Locale.SpanishES]: "Mai juzgando 1",
        [Locale.SpanishLATAM]: "Mai juzgando 1",
        [Locale.PortugueseBR]: "Mai julgando 1",
        [Locale.Turkish]: "Yargılayan Mai 1",
        [Locale.Italian]: "Mai che giudica 1",
        [Locale.Indonesian]: "Mai menghakimi 1",
        [Locale.Czech]: "Soudící Mai 1",
        [Locale.Japanese]: "ジト目の麻衣 1",
        [Locale.Korean]: "평가하는 마이 1",
        [Locale.ChineseCN]: "审视的麻衣 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 619,
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
