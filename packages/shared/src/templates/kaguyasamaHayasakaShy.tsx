import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaHayasakaShy: Template = {
    name: "kaguyasamaHayasakaShy",
    displayName: buildLocales("Shy Hayasaka", {
        [Locale.Russian]: "Смущенная Хаясака",
        [Locale.Ukrainian]: "Збентежена Хаясака",
        [Locale.Dutch]: "Verlegen Hayasaka",
        [Locale.French]: "Hayasaka timide",
        [Locale.German]: "Schüchterne Hayasaka",
        [Locale.Polish]: "Nieśmiała Hayasaka",
        [Locale.SpanishES]: "Hayasaka tímida",
        [Locale.SpanishLATAM]: "Hayasaka tímida",
        [Locale.PortugueseBR]: "Hayasaka tímida",
        [Locale.Turkish]: "Utangaç Hayasaka",
        [Locale.Italian]: "Hayasaka timida",
        [Locale.Indonesian]: "Hayasaka pemalu",
        [Locale.Czech]: "Stydlivá Hayasaka",
        [Locale.Japanese]: "照れる早坂",
        [Locale.Korean]: "부끄러워하는 하야사카",
        [Locale.ChineseCN]: "害羞的早坂",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 504,
    animationDuration: 1930,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaHayasakaShy.webp"
                width={540}
                height={414}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
