import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqMikuPoutingOnFire: Template = {
    name: "tqqMikuPoutingOnFire",
    displayName: buildLocales("Miku pouting on fire", {
        [Locale.Russian]: "Мику дуется в огне",
        [Locale.Ukrainian]: "Міку дується у вогні",
        [Locale.Dutch]: "Pruilende Miku in vuur en vlam",
        [Locale.French]: "Miku en feu qui boude",
        [Locale.German]: "Schmollende Miku in Flammen",
        [Locale.Polish]: "Dąsająca się Miku w ogniu",
        [Locale.SpanishES]: "Miku haciendo pucheros en llamas",
        [Locale.SpanishLATAM]: "Miku haciendo pucheros en llamas",
        [Locale.PortugueseBR]: "Miku fazendo beicinho em chamas",
        [Locale.Turkish]: "Alevler içinde somurtan Miku",
        [Locale.Italian]: "Miku imbronciata in fiamme",
        [Locale.Indonesian]: "Miku cemberut dalam api",
        [Locale.Czech]: "Špulící Miku v plamenech",
        [Locale.Japanese]: "炎を上げてふくれる三玖",
        [Locale.Korean]: "불타오르며 뾰루퉁한 미쿠",
        [Locale.ChineseCN]: "冒火嘟嘴的三玖",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 3200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqMikuPoutingOnFire.gif"
                width={498}
                height={280}
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
