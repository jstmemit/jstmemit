import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const toradoraTaigaCreepySmile: Template = {
    name: "toradoraTaigaCreepySmile",
    displayName: buildLocales("Taiga creepy smile", {
        [Locale.Russian]: "Жуткая улыбка Тайги",
        [Locale.Ukrainian]: "Моторошна усмішка Тайги",
        [Locale.Dutch]: "Taiga enge glimlach",
        [Locale.French]: "Sourire effrayant de Taiga",
        [Locale.German]: "Taigas gruseliges Lächeln",
        [Locale.Polish]: "Przerażający uśmiech Taigi",
        [Locale.SpanishES]: "Sonrisa espeluznante de Taiga",
        [Locale.SpanishLATAM]: "Sonrisa espeluznante de Taiga",
        [Locale.PortugueseBR]: "Sorriso assustador da Taiga",
        [Locale.Turkish]: "Taiga ürpertici gülümseme",
        [Locale.Italian]: "Sorriso inquietante di Taiga",
        [Locale.Indonesian]: "Senyum menyeramkan Taiga",
        [Locale.Czech]: "Taigin děsivý úsměv",
        [Locale.Japanese]: "大河の不気味な笑顔",
        [Locale.Korean]: "타이가의 소름 돋는 미소",
        [Locale.ChineseCN]: "大河令人毛骨悚然的微笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextRightWithBackground, Type.DefaultText],
    width: 1102,
    height: 650,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/toradoraTaigaCreepySmile.png"
                width={551}
                height={650}
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
                        fontSize: 80,
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
