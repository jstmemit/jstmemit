import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoGabrielCozy: Template = {
    name: "gdoGabrielCozy",
    displayName: buildLocales("Cozy Gabriel", {
        [Locale.Russian]: "Уютная Габриэль",
        [Locale.Ukrainian]: "Затишна Габріель",
        [Locale.Dutch]: "Knusse Gabriel",
        [Locale.French]: "Gabriel douillette",
        [Locale.German]: "Gemütliche Gabriel",
        [Locale.Polish]: "Przytulna Gabriel",
        [Locale.SpanishES]: "Gabriel cómoda",
        [Locale.SpanishLATAM]: "Gabriel cómoda",
        [Locale.PortugueseBR]: "Gabriel confortável",
        [Locale.Turkish]: "Rahat Gabriel",
        [Locale.Italian]: "Gabriel comoda",
        [Locale.Indonesian]: "Gabriel yang nyaman",
        [Locale.Czech]: "Pohodlná Gabriel",
        [Locale.Japanese]: "くつろぐガヴリール",
        [Locale.Korean]: "편안한 가브릴",
        [Locale.ChineseCN]: "惬意的珈百璃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 960,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoGabrielCozy.gif"
                width={498}
                height={280}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
