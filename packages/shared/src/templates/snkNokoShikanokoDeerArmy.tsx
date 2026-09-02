import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const snkNokoShikanokoDeerArmy: Template = {
    name: "snkNokoShikanokoDeerArmy",
    displayName: buildLocales("Noko Shikanoko deer army", {
        [Locale.Russian]: "Армия оленей Ноко Сиканоко",
        [Locale.Ukrainian]: "Армія оленів Ноко Шіканоко",
        [Locale.Dutch]: "Noko Shikanoko hertenleger",
        [Locale.French]: "Armée de cerfs de Noko Shikanoko",
        [Locale.German]: "Noko Shikanoko Hirsch-Armee",
        [Locale.Polish]: "Armia jeleni Noko Shikanoko",
        [Locale.SpanishES]: "Ejército de ciervos de Noko Shikanoko",
        [Locale.SpanishLATAM]: "Ejército de ciervos de Noko Shikanoko",
        [Locale.PortugueseBR]: "Exército de cervos de Noko Shikanoko",
        [Locale.Turkish]: "Noko Shikanoko geyik ordusu",
        [Locale.Italian]: "Esercito di cervi di Noko Shikanoko",
        [Locale.Indonesian]: "Pasukan rusa Noko Shikanoko",
        [Locale.Czech]: "Jelení armáda Noko Shikanoko",
        [Locale.Japanese]: "鹿乃子の鹿軍団",
        [Locale.Korean]: "노코 시카노코의 사슴 군단",
        [Locale.ChineseCN]: "鹿乃子的鹿大军",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ShikanokoNokonokoKoshitantan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 381,
    animationDuration: 1510,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/snkNokoShikanokoDeerArmy.gif"
                width={498}
                height={281}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
