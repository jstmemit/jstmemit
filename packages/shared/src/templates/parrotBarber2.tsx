import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const parrotBarber2: Template = {
    name: "parrotBarber2",
    displayName: buildLocales("Parrot barber 2", {
        [Locale.Russian]: "Попугай-парикмахер 2",
        [Locale.Ukrainian]: "Папуга-перукар 2",
        [Locale.Dutch]: "Papegaai kapper 2",
        [Locale.French]: "Perroquet barbier 2",
        [Locale.German]: "Papagei Barbier 2",
        [Locale.Polish]: "Papuga fryzjer 2",
        [Locale.SpanishES]: "Loro barbero 2",
        [Locale.SpanishLATAM]: "Loro barbero 2",
        [Locale.PortugueseBR]: "Papagaio barbeiro 2",
        [Locale.Turkish]: "Papağan berber 2",
        [Locale.Italian]: "Pappagallo barbiere 2",
        [Locale.Indonesian]: "Burung beo tukang cukur 2",
        [Locale.Czech]: "Papoušek holič 2",
        [Locale.Japanese]: "オウムの床屋 2",
        [Locale.Korean]: "앵무새 이발사 2",
        [Locale.ChineseCN]: "鹦鹉理发师 2",
    }),
    topics: [Topic.Animals],
    types: [Type.TextBottom, Type.FaceImage],
    width: 672,
    height: 921,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Parrot face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/parrotBarber2.jpg"
                width={672}
                height={921}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={280}
                height={280}
                style={{
                    position: "absolute",
                    top: "28%",
                    left: "26%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "30%",
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
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
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
