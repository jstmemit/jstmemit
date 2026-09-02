import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const spongebobGrin: Template = {
    name: "spongebobGrin",
    displayName: buildLocales("Spongebob grin", {
        [Locale.Russian]: "Ухмылка Губки Боба",
        [Locale.Ukrainian]: "Усмішка Губки Боба",
        [Locale.Dutch]: "Spongebob grijns",
        [Locale.French]: "Sourire de Bob l'éponge",
        [Locale.German]: "Spongebob Grinsen",
        [Locale.Polish]: "Uśmieszek SpongeBoba",
        [Locale.SpanishES]: "Sonrisa de Bob Esponja",
        [Locale.SpanishLATAM]: "Sonrisa de Bob Esponja",
        [Locale.PortugueseBR]: "Sorriso do Bob Esponja",
        [Locale.Turkish]: "SüngerBob sırıtışı",
        [Locale.Italian]: "Sorriso di SpongeBob",
        [Locale.Indonesian]: "Seringai Spongebob",
        [Locale.Czech]: "Spongebobův úšklebek",
        [Locale.Japanese]: "ニヤリと笑うスポンジ・ボブ",
        [Locale.Korean]: "스폰지밥 썩소",
        [Locale.ChineseCN]: "海绵宝宝坏笑",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextTopWithBackground],
    width: 600,
    height: 750,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobGrin.jpg"
                width={600}
                height={833}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
