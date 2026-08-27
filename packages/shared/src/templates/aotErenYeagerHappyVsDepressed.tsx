import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";

export const aotErenYeagerHappyVsDepressed: Template = {
    name: "aotErenYeagerHappyVsDepressed",
    displayName: buildLocales("Eren Yeager happy vs depressed", {
        [Locale.Russian]: "Эрен Йегер счастливый и в депрессии",
        [Locale.Ukrainian]: "Ерен Єгер щасливий і в депресії",
        [Locale.Dutch]: "Eren Yeager gelukkig vs depressief",
        [Locale.French]: "Eren Yeager heureux vs déprimé",
        [Locale.German]: "Eren Yeager glücklich vs depressiv",
        [Locale.Polish]: "Eren Yeager szczęśliwy vs w depresji",
        [Locale.SpanishES]: "Eren Yeager feliz vs deprimido",
        [Locale.SpanishLATAM]: "Eren Yeager feliz vs deprimido",
        [Locale.PortugueseBR]: "Eren Yeager feliz vs deprimido",
        [Locale.Turkish]: "Eren Yeager mutlu vs depresif",
        [Locale.Italian]: "Eren Yeager felice vs depresso",
        [Locale.Indonesian]: "Eren Yeager bahagia vs depresi",
        [Locale.Czech]: "Eren Yeager šťastný vs depresivní",
        [Locale.Japanese]: "エレン・イェーガー 幸せ vs 憂鬱",
        [Locale.Korean]: "에렌 예거 행복 vs 우울",
        [Locale.ChineseCN]: "艾伦·耶格尔 快乐对比抑郁",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AttackOnTitan],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 718,
    height: 720,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/aotErenYeagerHappyVsDepressed.png"
                width={359}
                height={720}
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
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
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
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
