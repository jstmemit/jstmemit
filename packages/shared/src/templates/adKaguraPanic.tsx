import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adKaguraPanic: Template = {
    name: "adKaguraPanic",
    displayName: buildLocales("Kagura panic", {
        [Locale.Russian]: "Кагура в панике",
        [Locale.Ukrainian]: "Кагура в паніці",
        [Locale.Dutch]: "Kagura in paniek",
        [Locale.French]: "Kagura en panique",
        [Locale.German]: "Kagura in Panik",
        [Locale.Polish]: "Kagura w panice",
        [Locale.SpanishES]: "Kagura en pánico",
        [Locale.SpanishLATAM]: "Kagura en pánico",
        [Locale.PortugueseBR]: "Kagura em pânico",
        [Locale.Turkish]: "Kagura panikte",
        [Locale.Italian]: "Kagura nel panico",
        [Locale.Indonesian]: "Kagura panik",
        [Locale.Czech]: "Kagura v panice",
        [Locale.Japanese]: "神楽 パニック",
        [Locale.Korean]: "카구라 패닉",
        [Locale.ChineseCN]: "神乐慌乱",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 494,
    animationDuration: 3450,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adKaguraPanic.gif"
                width={540}
                height={404}
                style={{ position: "absolute", top: 0, left: 0 }}
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
                        fontSize: 30,
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
