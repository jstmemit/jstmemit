import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dandadanOkarunAura1: Template = {
    name: "dandadanOkarunAura1",
    displayName: buildLocales("Okarun's aura 1", {
        [Locale.Russian]: "Аура Окаруна 1",
        [Locale.Ukrainian]: "Аура Окаруна 1",
        [Locale.Dutch]: "Okarun's aura 1",
        [Locale.French]: "Aura d'Okarun 1",
        [Locale.German]: "Okaruns Aura 1",
        [Locale.Polish]: "Aura Okaruna 1",
        [Locale.SpanishES]: "Aura de Okarun 1",
        [Locale.SpanishLATAM]: "Aura de Okarun 1",
        [Locale.PortugueseBR]: "Aura do Okarun 1",
        [Locale.Turkish]: "Okarun'un aurası 1",
        [Locale.Italian]: "Aura di Okarun 1",
        [Locale.Indonesian]: "Aura Okarun 1",
        [Locale.Czech]: "Okarunova aura 1",
        [Locale.Japanese]: "オカルンのオーラ 1",
        [Locale.Korean]: "오카룬의 오라 1",
        [Locale.ChineseCN]: "厄卡伦的气场 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground],
    width: 540,
    height: 540,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dandadanOkarunAura1.png"
                width={540}
                height={430}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "110px",
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
