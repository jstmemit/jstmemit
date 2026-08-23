import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const quoteTopText: Template = {
    name: "quoteTopText",
    displayName: buildLocales("Quote top text", {
        [Locale.Russian]: "Верхний текст цитаты",
        [Locale.Ukrainian]: "Верхній текст цитати",
        [Locale.Dutch]: "Citaat tekst boven",
        [Locale.French]: "Texte du haut de la citation",
        [Locale.German]: "Zitat oberer Text",
        [Locale.Polish]: "Górny tekst cytatu",
        [Locale.SpanishES]: "Texto superior de la cita",
        [Locale.SpanishLATAM]: "Texto superior de la cita",
        [Locale.PortugueseBR]: "Texto superior da citação",
        [Locale.Turkish]: "Alıntı üst metni",
        [Locale.Italian]: "Testo superiore della citazione",
        [Locale.Indonesian]: "Teks atas kutipan",
        [Locale.Czech]: "Horní text citátu",
        [Locale.Japanese]: "引用 上部テキスト",
        [Locale.Korean]: "인용구 상단 텍스트",
        [Locale.ChineseCN]: "引用顶部文本",
    }),
    topics: [Topic.Quote],
    types: [Type.BackgroundImage, Type.TextTopWithBackground],
    width: 800,
    height: 800,
    texts: [{ id: 0, description: "quote", minLength: 1, maxLength: 20 }],
    images: [{ id: 0, description: "background image" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src={images[0]}
                width={800}
                height={800}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "30px",
                    backgroundColor: "rgba(0,0,0,0.5)",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 44,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {`"${texts[0]}"`}
                </div>
            </div>
        </div>
    ),
};
