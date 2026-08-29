import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const missingPiece: Template = {
    name: "missingPiece",
    displayName: buildLocales("Missing piece", {
        [Locale.Russian]: "Недостающий кусок",
        [Locale.Ukrainian]: "Деталь, якої не вистачає",
        [Locale.Dutch]: "Ontbrekend stukje",
        [Locale.French]: "Pièce manquante",
        [Locale.German]: "Fehlendes Puzzleteil",
        [Locale.Polish]: "Brakujący element",
        [Locale.SpanishES]: "Pieza faltante",
        [Locale.SpanishLATAM]: "Pieza faltante",
        [Locale.PortugueseBR]: "Peça faltando",
        [Locale.Turkish]: "Eksik parça",
        [Locale.Italian]: "Pezzo mancante",
        [Locale.Indonesian]: "Bagian yang hilang",
        [Locale.Czech]: "Chybějící kousek",
        [Locale.Japanese]: "足りないピース",
        [Locale.Korean]: "잃어버린 조각",
        [Locale.ChineseCN]: "缺失的一角",
    }),
    topics: [Topic.Misc],
    types: [Type.TextRight, Type.FaceImage],
    width: 783,
    height: 581,
    texts: [{ id: 0, description: "text on the puzzle", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "person who is missing puzzle" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/missingpiece.png"
                width={783}
                height={581}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 115,
                    left: 135,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: "40%",
                    width: "40%",
                    maxHeight: "60%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
