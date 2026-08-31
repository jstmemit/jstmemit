import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const selLainHologram: Template = {
    name: "selLainHologram",
    displayName: buildLocales("Lain hologram", {
        [Locale.Russian]: "Голограмма Лэйн",
        [Locale.Ukrainian]: "Голограма Лейн",
        [Locale.Dutch]: "Lain hologram",
        [Locale.French]: "Hologramme de Lain",
        [Locale.German]: "Lain Hologramm",
        [Locale.Polish]: "Hologram Lain",
        [Locale.SpanishES]: "Holograma de Lain",
        [Locale.SpanishLATAM]: "Holograma de Lain",
        [Locale.PortugueseBR]: "Holograma de Lain",
        [Locale.Turkish]: "Lain hologramı",
        [Locale.Italian]: "Ologramma di Lain",
        [Locale.Indonesian]: "Hologram Lain",
        [Locale.Czech]: "Hologram Lain",
        [Locale.Japanese]: "玲音のホログラム",
        [Locale.Korean]: "레인 홀로그램",
        [Locale.ChineseCN]: "玲音全息图",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SerialExperimentsLain],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 455,
    animationDuration: 480,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/selLainHologram.gif"
                width={500}
                height={355}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
