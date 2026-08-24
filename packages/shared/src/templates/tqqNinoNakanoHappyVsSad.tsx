import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const tqqNinoNakanoHappyVsSad: Template = {
    name: "tqqNinoNakanoHappyVsSad",
    displayName: buildLocales("Nino Nakano happy vs sad", {
        [Locale.Russian]: "Нино Накано счастливая против грустной",
        [Locale.Ukrainian]: "Ніно Накано щаслива проти сумної",
        [Locale.Dutch]: "Nino Nakano blij vs verdrietig",
        [Locale.French]: "Nino Nakano heureuse vs triste",
        [Locale.German]: "Nino Nakano glücklich vs traurig",
        [Locale.Polish]: "Nino Nakano szczęśliwa vs smutna",
        [Locale.SpanishES]: "Nino Nakano feliz vs triste",
        [Locale.SpanishLATAM]: "Nino Nakano feliz vs triste",
        [Locale.PortugueseBR]: "Nino Nakano feliz vs triste",
        [Locale.Turkish]: "Nino Nakano mutlu vs üzgün",
        [Locale.Italian]: "Nino Nakano felice vs triste",
        [Locale.Indonesian]: "Nino Nakano bahagia vs sedih",
        [Locale.Czech]: "Nino Nakano šťastná vs smutná",
        [Locale.Japanese]: "中野二乃 喜び vs 悲しみ",
        [Locale.Korean]: "나카노 니노 행복 vs 슬픔",
        [Locale.ChineseCN]: "中野二乃 高兴对比悲伤",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.TheQuintessentialQuintuplets],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 1082,
    height: 1080,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 12 },
    ],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/tqqNinoNakanoHappyVsSad.png"
                width={542}
                height={1080}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
