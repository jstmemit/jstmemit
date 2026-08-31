import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiYatoHeartbroken: Template = {
    name: "noragamiYatoHeartbroken",
    displayName: buildLocales("Yato heartbroken", {
        [Locale.Russian]: "Ято с разбитым сердцем",
        [Locale.Ukrainian]: "Ято з розбитим серцем",
        [Locale.Dutch]: "Yato met een gebroken hart",
        [Locale.French]: "Yato au cœur brisé",
        [Locale.German]: "Yato mit gebrochenem Herzen",
        [Locale.Polish]: "Yato ze złamanym sercem",
        [Locale.SpanishES]: "Yato con el corazón roto",
        [Locale.SpanishLATAM]: "Yato con el corazón roto",
        [Locale.PortugueseBR]: "Yato com o coração partido",
        [Locale.Turkish]: "Kalbi kırık Yato",
        [Locale.Italian]: "Yato col cuore infranto",
        [Locale.Indonesian]: "Yato patah hati",
        [Locale.Czech]: "Yato se zlomeným srdcem",
        [Locale.Japanese]: "傷心の夜ト",
        [Locale.Korean]: "상심한 야토",
        [Locale.ChineseCN]: "心碎的夜斗",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextBottom, Type.Animated],
    width: 500,
    height: 500,
    animationDuration: 700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/norogamiYatoHeartbroken.gif"
                width={500}
                height={500}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
