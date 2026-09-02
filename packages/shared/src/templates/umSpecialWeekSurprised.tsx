import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umSpecialWeekSurprised: Template = {
    name: "umSpecialWeekSurprised",
    displayName: buildLocales("Special Week surprised", {
        [Locale.Russian]: "Удивленная Спешел Уик",
        [Locale.Ukrainian]: "Здивована Спешл Вік",
        [Locale.Dutch]: "Verraste Special Week",
        [Locale.French]: "Special Week surprise",
        [Locale.German]: "Überraschte Special Week",
        [Locale.Polish]: "Zaskoczona Special Week",
        [Locale.SpanishES]: "Special Week sorprendida",
        [Locale.SpanishLATAM]: "Special Week sorprendida",
        [Locale.PortugueseBR]: "Special Week surpresa",
        [Locale.Turkish]: "Şaşırmış Special Week",
        [Locale.Italian]: "Special Week sorpresa",
        [Locale.Indonesian]: "Special Week terkejut",
        [Locale.Czech]: "Překvapená Special Week",
        [Locale.Japanese]: "驚くスペシャルウィーク",
        [Locale.Korean]: "놀란 스페셜 위크",
        [Locale.ChineseCN]: "惊讶的特别周",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 3790,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umSpecialWeekSurprised.gif"
                width={480}
                height={270}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
