import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acNagisaNotes: Template = {
    name: "acNagisaNotes",
    displayName: buildLocales("Nagisa notes", {
        [Locale.Russian]: "Нагиса записывает",
        [Locale.Ukrainian]: "Нагіса занотовує",
        [Locale.Dutch]: "Nagisa maakt notities",
        [Locale.French]: "Nagisa prend des notes",
        [Locale.German]: "Nagisa macht Notizen",
        [Locale.Polish]: "Nagisa notuje",
        [Locale.SpanishES]: "Nagisa toma notas",
        [Locale.SpanishLATAM]: "Nagisa toma notas",
        [Locale.PortugueseBR]: "Nagisa anotando",
        [Locale.Turkish]: "Nagisa not alıyor",
        [Locale.Italian]: "Nagisa prende appunti",
        [Locale.Indonesian]: "Nagisa mencatat",
        [Locale.Czech]: "Nagisa si dělá poznámky",
        [Locale.Japanese]: "渚 メモ",
        [Locale.Korean]: "나기사 메모",
        [Locale.ChineseCN]: "渚 记笔记",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AssassinationClassroom],
    types: [Type.TextTopWithBackground, Type.FaceImage, Type.Animated],
    width: 469,
    height: 588,
    animationDuration: 400,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Nagisa`s face" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/acNagisaNotes.webp"
                width={469}
                height={498}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={220}
                height={220}
                style={{
                    position: "absolute",
                    bottom: 170,
                    right: 130,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
