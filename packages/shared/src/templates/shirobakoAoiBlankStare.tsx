import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiBlankStare: Template = {
    name: "shirobakoAoiBlankStare",
    displayName: buildLocales("Aoi Miyamori blank stare", {
        [Locale.Russian]: "Пустой взгляд Аой Миямори",
        [Locale.Ukrainian]: "Порожній погляд Аой Міяморі",
        [Locale.Dutch]: "Lege blik van Aoi Miyamori",
        [Locale.French]: "Regard vide d'Aoi Miyamori",
        [Locale.German]: "Aoi Miyamoris leerer Blick",
        [Locale.Polish]: "Puste spojrzenie Aoi Miyamori",
        [Locale.SpanishES]: "Mirada vacía de Aoi Miyamori",
        [Locale.SpanishLATAM]: "Mirada vacía de Aoi Miyamori",
        [Locale.PortugueseBR]: "Olhar vazio de Aoi Miyamori",
        [Locale.Turkish]: "Aoi Miyamori'nin boş bakışı",
        [Locale.Italian]: "Sguardo vuoto di Aoi Miyamori",
        [Locale.Indonesian]: "Tatapan kosong Aoi Miyamori",
        [Locale.Czech]: "Prázdný pohled Aoi Miyamori",
        [Locale.Japanese]: "宮森あおいの虚ろな目",
        [Locale.Korean]: "미야모리 아오이의 멍한 시선",
        [Locale.ChineseCN]: "宫森葵空洞的眼神",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 2100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiBlankStare.gif"
                width={500}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
