import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiYatoHeartbroken1: Template = {
    name: "noragamiYatoHeartbroken1",
    displayName: buildLocales("Yato heartbroken 1", {
        [Locale.Russian]: "Ято с разбитым сердцем 1",
        [Locale.Ukrainian]: "Ято з розбитим серцем 1",
        [Locale.Dutch]: "Yato met een gebroken hart 1",
        [Locale.French]: "Yato au cœur brisé 1",
        [Locale.German]: "Yato mit gebrochenem Herzen 1",
        [Locale.Polish]: "Yato ze złamanym sercem 1",
        [Locale.SpanishES]: "Yato con el corazón roto 1",
        [Locale.SpanishLATAM]: "Yato con el corazón roto 1",
        [Locale.PortugueseBR]: "Yato com o coração partido 1",
        [Locale.Turkish]: "Kalbi kırık Yato 1",
        [Locale.Italian]: "Yato col cuore infranto 1",
        [Locale.Indonesian]: "Yato patah hati 1",
        [Locale.Czech]: "Yato se zlomeným srdcem 1",
        [Locale.Japanese]: "傷心の夜ト 1",
        [Locale.Korean]: "상심한 야토 1",
        [Locale.ChineseCN]: "心碎的夜斗 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1000,
    height: 500,
    animationDuration: 700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/norogamiYatoHeartbroken.gif"
                width={500}
                height={500}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
