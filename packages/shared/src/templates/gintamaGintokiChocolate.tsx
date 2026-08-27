import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiChocolate: Template = {
    name: "gintamaGintokiChocolate",
    displayName: buildLocales("Gintoki says chocolate", {
        [Locale.Russian]: "Гинтоки говорит шоколад",
        [Locale.Ukrainian]: "Гінтокі каже шоколад",
        [Locale.Dutch]: "Gintoki zegt chocolade",
        [Locale.French]: "Gintoki dit chocolat",
        [Locale.German]: "Gintoki sagt Schokolade",
        [Locale.Polish]: "Gintoki mówi czekolada",
        [Locale.SpanishES]: "Gintoki dice chocolate",
        [Locale.SpanishLATAM]: "Gintoki dice chocolate",
        [Locale.PortugueseBR]: "Gintoki diz chocolate",
        [Locale.Turkish]: "Gintoki çikolata diyor",
        [Locale.Italian]: "Gintoki dice cioccolato",
        [Locale.Indonesian]: "Gintoki bilang cokelat",
        [Locale.Czech]: "Gintoki říká čokoláda",
        [Locale.Japanese]: "銀時が「チョコレート」と言う",
        [Locale.Korean]: "긴토키가 초콜릿이라고 말함",
        [Locale.ChineseCN]: "银时说巧克力",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 368,
    animationDuration: 2600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiChocolate.gif"
                width={498}
                height={278}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
