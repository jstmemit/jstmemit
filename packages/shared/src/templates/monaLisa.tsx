import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const monaLisa: Template = {
    name: "monaLisa",
    displayName: buildLocales("Mona Lisa", {
        [Locale.Russian]: "Мона Лиза",
        [Locale.Ukrainian]: "Мона Ліза",
        [Locale.Dutch]: "Mona Lisa",
        [Locale.French]: "Mona Lisa",
        [Locale.German]: "Mona Lisa",
        [Locale.Polish]: "Mona Lisa",
        [Locale.SpanishES]: "Mona Lisa",
        [Locale.SpanishLATAM]: "Mona Lisa",
        [Locale.PortugueseBR]: "Mona Lisa",
        [Locale.Turkish]: "Mona Lisa",
        [Locale.Italian]: "Gioconda",
        [Locale.Indonesian]: "Mona Lisa",
        [Locale.Czech]: "Mona Lisa",
        [Locale.Japanese]: "モナ・リザ",
        [Locale.Korean]: "모나리자",
        [Locale.ChineseCN]: "蒙娜丽莎",
    }),
    topics: [Topic.Art],
    types: [Type.TextBottom, Type.FaceImage],
    width: 960,
    height: 1431,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 30 }],
    images: [{ id: 0, description: "Mona Lisa`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/monaLisa.png"
                width={960}
                height={1431}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    top: "15%",
                    left: "30%",
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
                    height: "40%",
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
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
