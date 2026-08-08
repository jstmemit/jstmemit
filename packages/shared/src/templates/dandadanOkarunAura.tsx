import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dandadanOkarunAura: Template = {
    name: "dandadanOkarunAura",
    displayName: buildLocales("Okarun's aura", {
        [Locale.Russian]: "Аура Окаруна",
        [Locale.Ukrainian]: "Аура Окаруна",
        [Locale.Dutch]: "Okarun's aura",
        [Locale.French]: "Aura d'Okarun",
        [Locale.German]: "Okaruns Aura",
        [Locale.Polish]: "Aura Okaruna",
        [Locale.SpanishES]: "Aura de Okarun",
        [Locale.SpanishLATAM]: "Aura de Okarun",
        [Locale.PortugueseBR]: "Aura do Okarun",
        [Locale.Turkish]: "Okarun'un aurası",
        [Locale.Italian]: "Aura di Okarun",
        [Locale.Indonesian]: "Aura Okarun",
        [Locale.Czech]: "Okarunova aura",
        [Locale.Japanese]: "オカルンのオーラ",
        [Locale.Korean]: "오카룬의 오라",
        [Locale.ChineseCN]: "厄卡伦的气场",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Dandadan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 520,
    animationDuration: 2100,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dandadanOkarunAura.gif"
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
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
