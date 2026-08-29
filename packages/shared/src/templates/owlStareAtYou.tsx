import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const owlStareAtYou: Template = {
    name: "owlStareAtYou",
    displayName: buildLocales("Owl stare at you", {
        [Locale.Russian]: "Сова смотрит на тебя",
        [Locale.Ukrainian]: "Сова дивиться на тебе",
        [Locale.Dutch]: "Uil staart naar je",
        [Locale.French]: "Hibou qui te fixe",
        [Locale.German]: "Eule starrt dich an",
        [Locale.Polish]: "Sowa gapi się na ciebie",
        [Locale.SpanishES]: "Búho mirándote fijamente",
        [Locale.SpanishLATAM]: "Búho mirándote fijamente",
        [Locale.PortugueseBR]: "Coruja encarando você",
        [Locale.Turkish]: "Sana dik dik bakan baykuş",
        [Locale.Italian]: "Gufo che ti fissa",
        [Locale.Indonesian]: "Burung hantu menatapmu",
        [Locale.Czech]: "Sova na tebe zírá",
        [Locale.Japanese]: "じっと見つめるフクロウ",
        [Locale.Korean]: "빤히 쳐다보는 올빼미",
        [Locale.ChineseCN]: "猫头鹰盯着你",
    }),
    topics: [Topic.Animals],
    types: [Type.TextTopWithBackground],
    width: 1600,
    height: 1400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/owlStareAtYou.png"
                width={1600}
                height={1600}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "320px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "30px",
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
