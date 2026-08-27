import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const bbLetsCook: Template = {
    name: "bbLetsCook",
    displayName: buildLocales("Lets cook", {
        [Locale.Russian]: "Давай готовить",
        [Locale.Ukrainian]: "Давай готувати",
        [Locale.Dutch]: "Laten we koken",
        [Locale.French]: "Cuisinons",
        [Locale.German]: "Lass uns kochen",
        [Locale.Polish]: "Ugotujmy coś",
        [Locale.SpanishES]: "A cocinar",
        [Locale.SpanishLATAM]: "A cocinar",
        [Locale.PortugueseBR]: "Vamos cozinhar",
        [Locale.Turkish]: "Hadi yemek pişirelim",
        [Locale.Italian]: "Cuciniamo",
        [Locale.Indonesian]: "Ayo memasak",
        [Locale.Czech]: "Pojďme vařit",
        [Locale.Japanese]: "料理しよう",
        [Locale.Korean]: "요리하자",
        [Locale.ChineseCN]: "开始做饭",
    }),
    topics: [Topic.BreakingBad, Topic.Movies],
    types: [Type.TextTopWithBackground, Type.DefaultText, Type.FaceImage],
    width: 498,
    height: 370,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Jesse`s face" },
        { id: 1, description: "Walter`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/bbLetsCook.png"
                width={498}
                height={350}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: "32%",
                    left: 135,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={80}
                height={80}
                style={{
                    position: "absolute",
                    top: "29%",
                    right: 140,
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
                    height: "90px",
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
