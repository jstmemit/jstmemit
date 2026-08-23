import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiAnxietyWave: Template = {
    name: "btrBocchiAnxietyWave",
    displayName: buildLocales("Bocchi anxiety wave", {
        [Locale.Russian]: "Волна тревоги у Бокки",
        [Locale.Ukrainian]: "Хвиля тривоги у Боккі",
        [Locale.Dutch]: "Bocchi angstgolf",
        [Locale.French]: "Bocchi vague d'angoisse",
        [Locale.German]: "Bocchi Angstwelle",
        [Locale.Polish]: "Bocchi fala lęku",
        [Locale.SpanishES]: "Bocchi ola de ansiedad",
        [Locale.SpanishLATAM]: "Bocchi ola de ansiedad",
        [Locale.PortugueseBR]: "Bocchi onda de ansiedade",
        [Locale.Turkish]: "Bocchi kaygı dalgası",
        [Locale.Italian]: "Bocchi ondata d'ansia",
        [Locale.Indonesian]: "Bocchi gelombang cemas",
        [Locale.Czech]: "Bocchi vlna úzkosti",
        [Locale.Japanese]: "ぼっちの不安の波",
        [Locale.Korean]: "봇치 불안의 파도",
        [Locale.ChineseCN]: "波奇焦虑波动",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 686,
    height: 476,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiAnxietyWave.png"
                width={686}
                height={386}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
