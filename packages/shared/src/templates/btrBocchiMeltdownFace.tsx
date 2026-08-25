import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiMeltdownFace: Template = {
    name: "btrBocchiMeltdownFace",
    displayName: buildLocales("Bocchi meltdown face", {
        [Locale.Russian]: "Лицо нервного срыва Бокки",
        [Locale.Ukrainian]: "Обличчя нервового зриву Боккі",
        [Locale.Dutch]: "Bocchi meltdown gezicht",
        [Locale.French]: "Visage de crise de Bocchi",
        [Locale.German]: "Bocchis Nervenzusammenbruch-Gesicht",
        [Locale.Polish]: "Twarz załamania nerwowego Bocchi",
        [Locale.SpanishES]: "Cara de colapso de Bocchi",
        [Locale.SpanishLATAM]: "Cara de colapso de Bocchi",
        [Locale.PortugueseBR]: "Rosto de colapso da Bocchi",
        [Locale.Turkish]: "Bocchi sinir krizi yüzü",
        [Locale.Italian]: "Faccia da crisi di Bocchi",
        [Locale.Indonesian]: "Wajah breakdown Bocchi",
        [Locale.Czech]: "Bocchi obličej zhroucení",
        [Locale.Japanese]: "ぼっちのメンタル崩壊顔",
        [Locale.Korean]: "봇치 멘탈 붕괴 얼굴",
        [Locale.ChineseCN]: "波奇精神崩溃脸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 640,
    height: 467,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiTheRockMeltdownFace.png"
                width={640}
                height={357}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
