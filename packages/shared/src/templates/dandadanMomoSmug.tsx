import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanMomoSmug: Template = {
    name: "dandadanMomoSmug",
    displayName: buildLocales("Smug Momo", {
        [Locale.Russian]: "Самодовольная Момо",
        [Locale.Ukrainian]: "Самозадоволена Момо",
        [Locale.Dutch]: "Zelfvoldane Momo",
        [Locale.French]: "Momo d'un air suffisant",
        [Locale.German]: "Selbstgefällige Momo",
        [Locale.Polish]: "Zadowolona z siebie Momo",
        [Locale.SpanishES]: "Momo presumida",
        [Locale.SpanishLATAM]: "Momo presumida",
        [Locale.PortugueseBR]: "Momo presunçosa",
        [Locale.Turkish]: "Kendini beğenmiş Momo",
        [Locale.Italian]: "Momo compiaciuta",
        [Locale.Indonesian]: "Momo tersenyum puas",
        [Locale.Czech]: "Samolibá Momo",
        [Locale.Japanese]: "ドヤ顔のモモ",
        [Locale.Korean]: "의기양양한 모모",
        [Locale.ChineseCN]: "得意的小桃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 414,
    animationDuration: 820,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dandadanMomoSmug.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
        </div>
    ),
};
