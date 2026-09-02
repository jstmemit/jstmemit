import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umSpecialWeekSprinting: Template = {
    name: "umSpecialWeekSprinting",
    displayName: buildLocales("Special Week sprinting", {
        [Locale.Russian]: "Бегущая Спешел Уик",
        [Locale.Ukrainian]: "Спешл Вік, що біжить",
        [Locale.Dutch]: "Sprintende Special Week",
        [Locale.French]: "Special Week qui sprinte",
        [Locale.German]: "Sprintende Special Week",
        [Locale.Polish]: "Sprintująca Special Week",
        [Locale.SpanishES]: "Special Week esprintando",
        [Locale.SpanishLATAM]: "Special Week corriendo",
        [Locale.PortugueseBR]: "Special Week correndo",
        [Locale.Turkish]: "Koşan Special Week",
        [Locale.Italian]: "Special Week che corre",
        [Locale.Indonesian]: "Special Week berlari",
        [Locale.Czech]: "Sprintující Special Week",
        [Locale.Japanese]: "全力疾走するスペシャルウィーク",
        [Locale.Korean]: "전력 질주하는 스페셜 위크",
        [Locale.ChineseCN]: "冲刺的特别周",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umSpecialWeekSprinting.gif"
                width={500}
                height={280}
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
