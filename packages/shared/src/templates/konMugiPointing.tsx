import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konMugiPointing: Template = {
    name: "konMugiPointing",
    displayName: buildLocales("Mugi pointing", {
        [Locale.Russian]: "Муги указывает пальцем",
        [Locale.Ukrainian]: "Мугі вказує пальцем",
        [Locale.Dutch]: "Wijzende Mugi",
        [Locale.French]: "Mugi qui pointe du doigt",
        [Locale.German]: "Zeigende Mugi",
        [Locale.Polish]: "Mugi wskazująca palcem",
        [Locale.SpanishES]: "Mugi señalando",
        [Locale.SpanishLATAM]: "Mugi señalando",
        [Locale.PortugueseBR]: "Mugi apontando",
        [Locale.Turkish]: "İşaret eden Mugi",
        [Locale.Italian]: "Mugi che indica",
        [Locale.Indonesian]: "Mugi menunjuk",
        [Locale.Czech]: "Mugi ukazující prstem",
        [Locale.Japanese]: "指差すムギ",
        [Locale.Korean]: "가리키는 무기",
        [Locale.ChineseCN]: "指人的䌷",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1000,
    height: 541,
    animationDuration: 680,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konMugiPointing.gif"
                width={500}
                height={541}
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
