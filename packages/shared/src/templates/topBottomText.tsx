import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const topBottomText: Template = {
    name: "topBottomText",
    displayName: buildLocales("Top bottom text", {
        [Locale.Russian]: "Верхний и нижний текст",
        [Locale.Ukrainian]: "Верхній та нижній текст",
        [Locale.Dutch]: "Boven onder tekst",
        [Locale.French]: "Texte haut bas",
        [Locale.German]: "Oben Unten Text",
        [Locale.Polish]: "Górny i dolny tekst",
        [Locale.SpanishES]: "Texto superior e inferior",
        [Locale.SpanishLATAM]: "Texto superior e inferior",
        [Locale.PortugueseBR]: "Texto superior e inferior",
        [Locale.Turkish]: "Üst ve alt metin",
        [Locale.Italian]: "Testo superiore e inferiore",
        [Locale.Indonesian]: "Teks atas dan bawah",
        [Locale.Czech]: "Horní a dolní text",
        [Locale.Japanese]: "上と下のテキスト",
        [Locale.Korean]: "상단 및 하단 텍스트",
        [Locale.ChineseCN]: "顶部和底部文字",
    }),
    topics: [Topic.Misc],
    types: [Type.BackgroundImage, Type.TextTopWithBackground, Type.TextBottomWithBackground],
    width: 800,
    height: 800,
    texts: [
        { id: 0, description: "top text", minLength: 1, maxLength: 8 },
        { id: 1, description: "bottom text", minLength: 1, maxLength: 8 },
    ],
    images: [{ id: 0, description: "background" }],
    element: ({ texts, images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: font,
                backgroundColor: "#000",
            }}
        >
            <img
                src={images[0]}
                width={800}
                height={600}
                style={{ position: "absolute", top: 100, left: 0, opacity: 0.6 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
