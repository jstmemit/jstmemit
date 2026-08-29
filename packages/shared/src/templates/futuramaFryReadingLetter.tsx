import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const futuramaFryReadingLetter: Template = {
    name: "futuramaFryReadingLetter",
    displayName: buildLocales("Fry reading letter", {
        [Locale.Russian]: "Фрай читает письмо",
        [Locale.Ukrainian]: "Фрай читає листа",
        [Locale.Dutch]: "Fry leest een brief",
        [Locale.French]: "Fry lit une lettre",
        [Locale.German]: "Fry liest Brief",
        [Locale.Polish]: "Fry czyta list",
        [Locale.SpanishES]: "Fry leyendo una carta",
        [Locale.SpanishLATAM]: "Fry leyendo una carta",
        [Locale.PortugueseBR]: "Fry lendo carta",
        [Locale.Turkish]: "Mektup okuyan Fry",
        [Locale.Italian]: "Fry che legge una lettera",
        [Locale.Indonesian]: "Fry membaca surat",
        [Locale.Czech]: "Fry čte dopis",
        [Locale.Japanese]: "手紙を読むフライ",
        [Locale.Korean]: "편지 읽는 프라이",
        [Locale.ChineseCN]: "弗莱读信",
    }),
    topics: [Topic.Futurama, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextCenterWithBackground],
    width: 720,
    height: 1110,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 5 }],
    images: [{ id: 0, description: "Fry`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/futuramaFryReadingLetter.jpg"
                width={720}
                height={1110}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "38%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "38%",
                    top: "40%",
                    width: "30%",
                    height: "22%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(-8deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
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
