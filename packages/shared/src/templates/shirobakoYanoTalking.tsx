import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoYanoTalking: Template = {
    name: "shirobakoYanoTalking",
    displayName: buildLocales("Erika Yano talking", {
        [Locale.Russian]: "Эрика Яно говорит",
        [Locale.Ukrainian]: "Еріка Яно говорить",
        [Locale.Dutch]: "Pratende Erika Yano",
        [Locale.French]: "Erika Yano qui parle",
        [Locale.German]: "Sprechende Erika Yano",
        [Locale.Polish]: "Mówiąca Erika Yano",
        [Locale.SpanishES]: "Erika Yano hablando",
        [Locale.SpanishLATAM]: "Erika Yano hablando",
        [Locale.PortugueseBR]: "Erika Yano falando",
        [Locale.Turkish]: "Konuşan Erika Yano",
        [Locale.Italian]: "Erika Yano che parla",
        [Locale.Indonesian]: "Erika Yano berbicara",
        [Locale.Czech]: "Mluvící Erika Yano",
        [Locale.Japanese]: "話す矢野エリカ",
        [Locale.Korean]: "말하는 야노 에리카",
        [Locale.ChineseCN]: "说话的矢野艾莉卡",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 2800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoYanoTalking.gif"
                width={500}
                height={281}
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
