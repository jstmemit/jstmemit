import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const looksAtPaperAngry: Template = {
    name: "looksAtPaperAngry",
    displayName: buildLocales("Looks at paper angry", {
        [Locale.Russian]: "Злобно смотрит на бумагу",
        [Locale.Ukrainian]: "Злісно дивиться на папір",
        [Locale.Dutch]: "Kijkt boos naar papier",
        [Locale.French]: "Regarde le papier en colère",
        [Locale.German]: "Schaut wütend aufs Papier",
        [Locale.Polish]: "Patrzy ze złością na papier",
        [Locale.SpanishES]: "Mira el papel enojado",
        [Locale.SpanishLATAM]: "Mira el papel enojado",
        [Locale.PortugueseBR]: "Olha com raiva para o papel",
        [Locale.Turkish]: "Kâğıda sinirle bakıyor",
        [Locale.Italian]: "Guarda il foglio arrabbiato",
        [Locale.Indonesian]: "Melihat kertas dengan marah",
        [Locale.Czech]: "Naštvaně se dívá na papír",
        [Locale.Japanese]: "怒って紙を見る",
        [Locale.Korean]: "화난 채로 종이를 봄",
        [Locale.ChineseCN]: "生气地看纸",
    }),
    topics: [Topic.Reaction, Topic.Cartoons],
    types: [Type.TextBottomWithBackground, Type.FaceImage],
    width: 768,
    height: 727,
    texts: [{ id: 0, description: "what's written on the paper", minLength: 1, maxLength: 3 }],
    images: [
        { id: 0, description: "person passing the note" },
        { id: 1, description: "person reading it angrily" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/looksatpaperangry.png"
                width={768}
                height={727}
                style={{ position: "absolute", top: 0, left: 0 }}
            />

            <img
                src={images[0]}
                width={128}
                height={128}
                style={{
                    position: "absolute",
                    top: 36,
                    left: 106,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <img
                src={images[1]}
                width={128}
                height={128}
                style={{
                    position: "absolute",
                    top: 11,
                    left: 466,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />

            <img
                src={images[1]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: 340,
                    left: 50,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "48%",
                    bottom: "18%",
                    width: "25%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(27deg)",
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
