import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataPhonePanic: Template = {
    name: "lsKonataPhonePanic",
    displayName: buildLocales("Konata phone panic", {
        [Locale.Russian]: "Телефонная паника Конаты",
        [Locale.Ukrainian]: "Телефонна паніка Конати",
        [Locale.Dutch]: "Konata's telefoonpaniek",
        [Locale.French]: "Panique téléphonique de Konata",
        [Locale.German]: "Konatas Telefonpanik",
        [Locale.Polish]: "Telefoniczna panika Konaty",
        [Locale.SpanishES]: "Pánico telefónico de Konata",
        [Locale.SpanishLATAM]: "Pánico telefónico de Konata",
        [Locale.PortugueseBR]: "Pânico telefônico da Konata",
        [Locale.Turkish]: "Konata'nın telefon paniği",
        [Locale.Italian]: "Panico da telefono di Konata",
        [Locale.Indonesian]: "Kepanikan telepon Konata",
        [Locale.Czech]: "Konatina telefonní panika",
        [Locale.Japanese]: "こなたの電話パニック",
        [Locale.Korean]: "코나타의 전화 패닉",
        [Locale.ChineseCN]: "此方的电话恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataPhonePanic.webp"
                width={480}
                height={270}
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
