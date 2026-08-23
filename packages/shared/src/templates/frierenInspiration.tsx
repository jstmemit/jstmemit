import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenInspiration: Template = {
    name: "frierenInspiration",
    displayName: buildLocales("Frieren inspiration", {
        [Locale.Russian]: "Вдохновение Фрирен",
        [Locale.Ukrainian]: "Натхнення Фрірен",
        [Locale.Dutch]: "Frieren inspiratie",
        [Locale.French]: "Inspiration de Frieren",
        [Locale.German]: "Frieren Inspiration",
        [Locale.Polish]: "Inspiracja Frieren",
        [Locale.SpanishES]: "Inspiración de Frieren",
        [Locale.SpanishLATAM]: "Inspiración de Frieren",
        [Locale.PortugueseBR]: "Inspiração da Frieren",
        [Locale.Turkish]: "Frieren ilhamı",
        [Locale.Italian]: "Ispirazione di Frieren",
        [Locale.Indonesian]: "Inspirasi Frieren",
        [Locale.Czech]: "Inspirace Frieren",
        [Locale.Japanese]: "フリーレンのひらめき",
        [Locale.Korean]: "프리렌의 영감",
        [Locale.ChineseCN]: "芙莉莲的灵感",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextRightWithBackground, Type.FaceImage],
    width: 786,
    height: 508,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "Frierens's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenInspiration.png"
                width={393}
                height={508}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 160,
                    left: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
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
