import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dnNearListening: Template = {
    name: "dnNearListening",
    displayName: buildLocales("Near listening", {
        [Locale.Russian]: "Ниа слушает",
        [Locale.Ukrainian]: "Ніа слухає",
        [Locale.Dutch]: "Near luistert",
        [Locale.French]: "Near qui écoute",
        [Locale.German]: "Near hört zu",
        [Locale.Polish]: "Near słucha",
        [Locale.SpanishES]: "Near escuchando",
        [Locale.SpanishLATAM]: "Near escuchando",
        [Locale.PortugueseBR]: "Near ouvindo",
        [Locale.Turkish]: "Near dinliyor",
        [Locale.Italian]: "Near che ascolta",
        [Locale.Indonesian]: "Near mendengarkan",
        [Locale.Czech]: "Near poslouchá",
        [Locale.Japanese]: "話を聞くニア",
        [Locale.Korean]: "듣고 있는 니아",
        [Locale.ChineseCN]: "尼亚倾听",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DeathNote],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 367,
    animationDuration: 1200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dnNearListening.gif"
                width={500}
                height={277}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
