import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const snkNokoShikanokoDeerArmy1: Template = {
    name: "snkNokoShikanokoDeerArmy1",
    displayName: buildLocales("Noko Shikanoko deer army 1", {
        [Locale.Russian]: "Армия оленей Ноко Сиканоко 1",
        [Locale.Ukrainian]: "Армія оленів Ноко Шіканоко 1",
        [Locale.Dutch]: "Noko Shikanoko hertenleger 1",
        [Locale.French]: "Armée de cerfs de Noko Shikanoko 1",
        [Locale.German]: "Noko Shikanoko Hirsch-Armee 1",
        [Locale.Polish]: "Armia jeleni Noko Shikanoko 1",
        [Locale.SpanishES]: "Ejército de ciervos de Noko Shikanoko 1",
        [Locale.SpanishLATAM]: "Ejército de ciervos de Noko Shikanoko 1",
        [Locale.PortugueseBR]: "Exército de cervos de Noko Shikanoko 1",
        [Locale.Turkish]: "Noko Shikanoko geyik ordusu 1",
        [Locale.Italian]: "Esercito di cervi di Noko Shikanoko 1",
        [Locale.Indonesian]: "Pasukan rusa Noko Shikanoko 1",
        [Locale.Czech]: "Jelení armáda Noko Shikanoko 1",
        [Locale.Japanese]: "鹿乃子の鹿軍団 1",
        [Locale.Korean]: "노코 시카노코의 사슴 군단 1",
        [Locale.ChineseCN]: "鹿乃子的鹿大军 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ShikanokoNokonokoKoshitantan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 381,
    animationDuration: 710,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/snkNokotanDeerArmy1.gif"
                width={498}
                height={281}
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
