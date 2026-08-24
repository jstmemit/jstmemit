import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const frierenFernFrustratedFrom67: Template = {
    name: "frierenFernFrustratedFrom67",
    displayName: buildLocales("Frustrated Fern from 67", {
        [Locale.Russian]: "Разочарованная Ферн из-за 67",
        [Locale.Ukrainian]: "Розчарована Ферн через 67",
        [Locale.Dutch]: "Gefrustreerde Fern door 67",
        [Locale.French]: "Fern frustrée à cause de 67",
        [Locale.German]: "Frustrierte Fern wegen 67",
        [Locale.Polish]: "Sfrustrowana Fern przez 67",
        [Locale.SpanishES]: "Fern frustrada por 67",
        [Locale.SpanishLATAM]: "Fern frustrada por 67",
        [Locale.PortugueseBR]: "Fern frustrada por causa de 67",
        [Locale.Turkish]: "67 yüzünden hüsrana uğramış Fern",
        [Locale.Italian]: "Fern frustrata a causa di 67",
        [Locale.Indonesian]: "Fern frustrasi karena 67",
        [Locale.Czech]: "Frustrovaná Fern kvůli 67",
        [Locale.Japanese]: "67のせいで不満なフェルン",
        [Locale.Korean]: "67 때문에 불만스러운 페른",
        [Locale.ChineseCN]: "因为67而沮丧的费伦",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1622,
    height: 720,
    animationDuration: 500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 100,
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
