import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lookAtThis: Template = {
    name: "lookAtThis",
    displayName: buildLocales("Look at this", {
        [Locale.Russian]: "Посмотри на это",
        [Locale.Ukrainian]: "Подивись на це",
        [Locale.Dutch]: "Kijk hiernaar",
        [Locale.French]: "Regarde ça",
        [Locale.German]: "Sieh dir das an",
        [Locale.Polish]: "Spójrz na to",
        [Locale.SpanishES]: "Mira esto",
        [Locale.SpanishLATAM]: "Mira esto",
        [Locale.PortugueseBR]: "Olhe para isso",
        [Locale.Turkish]: "Şuna bak",
        [Locale.Italian]: "Guarda questo",
        [Locale.Indonesian]: "Lihat ini",
        [Locale.Czech]: "Podívej se na to",
        [Locale.Japanese]: "これを見て",
        [Locale.Korean]: "이것 좀 봐",
        [Locale.ChineseCN]: "看这个",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextBottom, Type.ObjectImage],
    width: 480,
    height: 380,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "object of interest" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/lookAtThis.jpg"
                width={480}
                height={380}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "31%",
                    bottom: 0,
                    width: "45%",
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
