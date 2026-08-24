import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const explainingWhiteboard: Template = {
    name: "explainingWhiteboard",
    displayName: buildLocales("Explaining whiteboard", {
        [Locale.Russian]: "Объяснение у доски",
        [Locale.Ukrainian]: "Пояснення біля дошки",
        [Locale.Dutch]: "Uitleg op whiteboard",
        [Locale.French]: "Explication au tableau blanc",
        [Locale.German]: "Erklärung am Whiteboard",
        [Locale.Polish]: "Wyjaśnianie na tablicy",
        [Locale.SpanishES]: "Explicando en la pizarra",
        [Locale.SpanishLATAM]: "Explicando en la pizarra",
        [Locale.PortugueseBR]: "Explicando no quadro branco",
        [Locale.Turkish]: "Beyaz tahtada anlatım",
        [Locale.Italian]: "Spiegazione alla lavagna",
        [Locale.Indonesian]: "Menjelaskan di papan tulis",
        [Locale.Czech]: "Vysvětlování na tabuli",
        [Locale.Japanese]: "ホワイトボードで説明",
        [Locale.Korean]: "화이트보드로 설명",
        [Locale.ChineseCN]: "白板讲解",
    }),
    topics: [Topic.Reaction],
    types: [Type.FaceImage, Type.TextTopWithBackground],
    width: 1280,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "person face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/explainingWhiteboard.jpg"
                width={1280}
                height={900}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={270}
                height={270}
                style={{
                    position: "absolute",
                    top: 200,
                    left: 415,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 70,
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
