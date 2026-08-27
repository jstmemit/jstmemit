import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenFernFrustratedFrom671: Template = {
    name: "frierenFernFrustratedFrom671",
    displayName: buildLocales("Frustrated Fern from 67 1", {
        [Locale.Russian]: "Разочарованная Ферн из-за 67 1",
        [Locale.Ukrainian]: "Розчарована Ферн через 67 1",
        [Locale.Dutch]: "Gefrustreerde Fern door 67 1",
        [Locale.French]: "Fern frustrée à cause de 67 1",
        [Locale.German]: "Frustrierte Fern wegen 67 1",
        [Locale.Polish]: "Sfrustrowana Fern przez 67 1",
        [Locale.SpanishES]: "Fern frustrada por 67 1",
        [Locale.SpanishLATAM]: "Fern frustrada por 67 1",
        [Locale.PortugueseBR]: "Fern frustrada por causa de 67 1",
        [Locale.Turkish]: "67 yüzünden hüsrana uğramış Fern 1",
        [Locale.Italian]: "Fern frustrata a causa di 67 1",
        [Locale.Indonesian]: "Fern frustrasi karena 67 1",
        [Locale.Czech]: "Frustrovaná Fern kvůli 67 1",
        [Locale.Japanese]: "67のせいで不満なフェルン 1",
        [Locale.Korean]: "67 때문에 불만스러운 페른 1",
        [Locale.ChineseCN]: "因为67而沮丧的费伦 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 811,
    height: 920,
    animationDuration: 500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/frierenFernFrustratedFrom67.gif"
                width={811}
                height={720}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "200px",
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
