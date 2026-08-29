import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const parrotBarber: Template = {
    name: "parrotBarber",
    displayName: buildLocales("Parrot barber", {
        [Locale.Russian]: "Попугай-парикмахер",
        [Locale.Ukrainian]: "Папуга-перукар",
        [Locale.Dutch]: "Papegaai kapper",
        [Locale.French]: "Perroquet barbier",
        [Locale.German]: "Papagei Barbier",
        [Locale.Polish]: "Papuga fryzjer",
        [Locale.SpanishES]: "Loro barbero",
        [Locale.SpanishLATAM]: "Loro barbero",
        [Locale.PortugueseBR]: "Papagaio barbeiro",
        [Locale.Turkish]: "Papağan berber",
        [Locale.Italian]: "Pappagallo barbiere",
        [Locale.Indonesian]: "Burung beo tukang cukur",
        [Locale.Czech]: "Papoušek holič",
        [Locale.Japanese]: "オウムの床屋",
        [Locale.Korean]: "앵무새 이발사",
        [Locale.ChineseCN]: "鹦鹉理发师",
    }),
    topics: [Topic.Animals],
    types: [Type.TextBottom, Type.FaceImage],
    width: 663,
    height: 1094,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/parrotBarber.jpg"
                width={663}
                height={1094}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: "35%",
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
                    height: "20%",
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
