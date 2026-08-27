import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiExhaustedFace: Template = {
    name: "btrBocchiExhaustedFace",
    displayName: buildLocales("Bocchi exhausted face", {
        [Locale.Russian]: "Измождённое лицо Бокки",
        [Locale.Ukrainian]: "Виснажене обличчя Боккі",
        [Locale.Dutch]: "Bocchi uitgeput gezicht",
        [Locale.French]: "Bocchi visage épuisé",
        [Locale.German]: "Bocchi erschöpftes Gesicht",
        [Locale.Polish]: "Bocchi wyczerpana twarz",
        [Locale.SpanishES]: "Bocchi cara de agotamiento",
        [Locale.SpanishLATAM]: "Bocchi cara de agotamiento",
        [Locale.PortugueseBR]: "Bocchi rosto exausto",
        [Locale.Turkish]: "Bocchi bitkin yüz ifadesi",
        [Locale.Italian]: "Bocchi faccia esausta",
        [Locale.Indonesian]: "Bocchi wajah kelelahan",
        [Locale.Czech]: "Bocchi vyčerpaný výraz",
        [Locale.Japanese]: "疲れ果てたぼっちの顔",
        [Locale.Korean]: "지친 봇치 얼굴",
        [Locale.ChineseCN]: "波奇疲惫的表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottom],
    width: 400,
    height: 500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiExhaustedFace.png"
                width={400}
                height={500}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
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
