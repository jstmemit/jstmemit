import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acNagisaNotes1: Template = {
    name: "acNagisaNotes1",
    displayName: buildLocales("Nagisa notes 1", {
        [Locale.Russian]: "Нагиса записывает 1",
        [Locale.Ukrainian]: "Нагіса занотовує 1",
        [Locale.Dutch]: "Nagisa maakt notities 1",
        [Locale.French]: "Nagisa prend des notes 1",
        [Locale.German]: "Nagisa macht Notizen 1",
        [Locale.Polish]: "Nagisa notuje 1",
        [Locale.SpanishES]: "Nagisa toma notas 1",
        [Locale.SpanishLATAM]: "Nagisa toma notas 1",
        [Locale.PortugueseBR]: "Nagisa anotando 1",
        [Locale.Turkish]: "Nagisa not alıyor 1",
        [Locale.Italian]: "Nagisa prende appunti 1",
        [Locale.Indonesian]: "Nagisa mencatat 1",
        [Locale.Czech]: "Nagisa si dělá poznámky 1",
        [Locale.Japanese]: "渚 メモ 1",
        [Locale.Korean]: "나기사 메모 1",
        [Locale.ChineseCN]: "渚 记笔记 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AssassinationClassroom],
    types: [Type.TextLeftWithBackground, Type.FaceImage, Type.Animated],
    width: 938,
    height: 498,
    animationDuration: 400,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
