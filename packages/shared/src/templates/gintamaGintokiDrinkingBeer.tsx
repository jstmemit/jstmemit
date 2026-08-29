import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gintamaGintokiDrinkingBeer: Template = {
    name: "gintamaGintokiDrinkingBeer",
    displayName: buildLocales("Gintoki drinking beer", {
        [Locale.Russian]: "Гинтоки пьет пиво",
        [Locale.Ukrainian]: "Гінтокі п'є пиво",
        [Locale.Dutch]: "Gintoki drinkt bier",
        [Locale.French]: "Gintoki boit de la bière",
        [Locale.German]: "Gintoki trinkt Bier",
        [Locale.Polish]: "Gintoki pije piwo",
        [Locale.SpanishES]: "Gintoki bebiendo cerveza",
        [Locale.SpanishLATAM]: "Gintoki bebiendo cerveza",
        [Locale.PortugueseBR]: "Gintoki bebendo cerveja",
        [Locale.Turkish]: "Gintoki bira içiyor",
        [Locale.Italian]: "Gintoki che beve birra",
        [Locale.Indonesian]: "Gintoki minum bir",
        [Locale.Czech]: "Gintoki pije pivo",
        [Locale.Japanese]: "ビールを飲む銀時",
        [Locale.Korean]: "맥주 마시는 긴토키",
        [Locale.ChineseCN]: "银时喝啤酒",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextBottom],
    width: 1000,
    height: 1000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gintamaGintokiDrinkingBeer.png"
                width={1000}
                height={1000}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
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
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
