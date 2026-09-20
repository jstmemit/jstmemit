import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruRagingFire1: Template = {
    name: "hucUmaruRagingFire1",
    displayName: buildLocales("Umaru raging in fire 1", {
        [Locale.Russian]: "Разъяренная Умару в огне 1",
        [Locale.Ukrainian]: "Розлючена Умару у вогні 1",
        [Locale.Dutch]: "Woedende Umaru in het vuur 1",
        [Locale.French]: "Umaru enragée dans les flammes 1",
        [Locale.German]: "Wütende Umaru im Feuer 1",
        [Locale.Polish]: "Wściekła Umaru w ogniu 1",
        [Locale.SpanishES]: "Umaru enfurecida en llamas 1",
        [Locale.SpanishLATAM]: "Umaru enfurecida en llamas 1",
        [Locale.PortugueseBR]: "Umaru furiosa em chamas 1",
        [Locale.Turkish]: "Alevler içinde öfkeli Umaru 1",
        [Locale.Italian]: "Umaru furiosa tra le fiamme 1",
        [Locale.Indonesian]: "Umaru mengamuk dalam api 1",
        [Locale.Czech]: "Zuřící Umaru v plamenech 1",
        [Locale.Japanese]: "炎の中で激怒するうまる 1",
        [Locale.Korean]: "불타오르며 분노하는 우마루 1",
        [Locale.ChineseCN]: "怒火中烧的小埋 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruRagingFire1.png"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
