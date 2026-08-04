import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const quoteBottomText: Template = {
    name: "quoteBottomText",
    displayName: buildLocales("Quote bottom text", {
        [Locale.Russian]: "Нижний текст цитаты",
        [Locale.Ukrainian]: "Нижній текст цитати",
        [Locale.Dutch]: "Citaat tekst onder",
        [Locale.French]: "Texte du bas de la citation",
        [Locale.German]: "Zitat unterer Text",
        [Locale.Polish]: "Dolny tekst cytatu",
        [Locale.SpanishES]: "Texto inferior de la cita",
        [Locale.SpanishLATAM]: "Texto inferior de la cita",
        [Locale.PortugueseBR]: "Texto inferior da citação",
        [Locale.Turkish]: "Alıntı alt metni",
        [Locale.Italian]: "Testo inferiore della citazione",
        [Locale.Indonesian]: "Teks bawah kutipan",
        [Locale.Czech]: "Spodní text citátu",
        [Locale.Japanese]: "引用 下部テキスト",
        [Locale.Korean]: "인용구 하단 텍스트",
        [Locale.ChineseCN]: "引用底部文本",
    }),
    topics: [Topic.Misc],
    types: [Type.BackgroundImage, Type.TextBottomWithBackground],
    width: 800,
    height: 800,
    texts: [{ id: 0, description: "quote", minLength: 1, maxLength: 20 }],
    images: [{ id: 0, description: "background image" }],
    element: ({ texts, images }: TemplateProps) => (
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
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "flex-end",
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
                        fontFamily: "Comic Sans MS",
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
