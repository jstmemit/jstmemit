import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const bbCooking: Template = {
    name: "bbCooking",
    displayName: buildLocales("Cooking", {
        [Locale.Russian]: "Готовка",
        [Locale.Ukrainian]: "Готування",
        [Locale.Dutch]: "Koken",
        [Locale.French]: "Cuisine",
        [Locale.German]: "Kochen",
        [Locale.Polish]: "Gotowanie",
        [Locale.SpanishES]: "Cocinando",
        [Locale.SpanishLATAM]: "Cocinando",
        [Locale.PortugueseBR]: "Cozinhando",
        [Locale.Turkish]: "Yemek pişirme",
        [Locale.Italian]: "Cucinare",
        [Locale.Indonesian]: "Memasak",
        [Locale.Czech]: "Vaření",
        [Locale.Japanese]: "料理",
        [Locale.Korean]: "요리",
        [Locale.ChineseCN]: "做饭",
    }),
    topics: [Topic.BreakingBad, Topic.Movies],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 710,
    height: 500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Walter`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bbCooking.jpg"
                width={710}
                height={477}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={300}
                height={300}
                style={{
                    position: "absolute",
                    bottom: "28%",
                    left: 210,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
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
