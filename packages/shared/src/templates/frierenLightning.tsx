import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenLightning: Template = {
    name: "frierenLightning",
    displayName: buildLocales("Frieren lightning", {
        [Locale.Russian]: "Молния Фрирен",
        [Locale.Ukrainian]: "Блискавка Фрірен",
        [Locale.Dutch]: "Frieren bliksem",
        [Locale.French]: "Éclair de Frieren",
        [Locale.German]: "Frierens Blitz",
        [Locale.Polish]: "Błyskawica Frieren",
        [Locale.SpanishES]: "Relámpago de Frieren",
        [Locale.SpanishLATAM]: "Relámpago de Frieren",
        [Locale.PortugueseBR]: "Relâmpago da Frieren",
        [Locale.Turkish]: "Frieren yıldırımı",
        [Locale.Italian]: "Fulmine di Frieren",
        [Locale.Indonesian]: "Petir Frieren",
        [Locale.Czech]: "Frieren blesk",
        [Locale.Japanese]: "フリーレンの雷",
        [Locale.Korean]: "프리렌의 번개",
        [Locale.ChineseCN]: "芙莉莲的闪电",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 700,
    height: 360,
    animationDuration: 4410,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/frierenLightning.webp"
                width={350}
                height={360}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
