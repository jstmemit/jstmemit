import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruPouting1: Template = {
    name: "hucUmaruPouting1",
    displayName: buildLocales("Pouting Umaru 1", {
        [Locale.Russian]: "Надутая Умару 1",
        [Locale.Ukrainian]: "Надута Умару 1",
        [Locale.Dutch]: "Pruilende Umaru 1",
        [Locale.French]: "Umaru qui boude 1",
        [Locale.German]: "Schmollende Umaru 1",
        [Locale.Polish]: "Nadąsana Umaru 1",
        [Locale.SpanishES]: "Umaru haciendo puchero 1",
        [Locale.SpanishLATAM]: "Umaru haciendo puchero 1",
        [Locale.PortugueseBR]: "Umaru fazendo bico 1",
        [Locale.Turkish]: "Dudak büken Umaru 1",
        [Locale.Italian]: "Umaru imbronciata 1",
        [Locale.Indonesian]: "Umaru cemberut 1",
        [Locale.Czech]: "Trucující Umaru 1",
        [Locale.Japanese]: "拗ねるうまる 1",
        [Locale.Korean]: "뾰로통한 우마루 1",
        [Locale.ChineseCN]: "嘟嘴的小埋 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruPouting1.png"
                width={500}
                height={281}
                style={{ position: "absolute", top: 0, left: 0 }}
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
