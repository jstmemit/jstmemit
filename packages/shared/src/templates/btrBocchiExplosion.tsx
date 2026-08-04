import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiExplosion: Template = {
    name: "btrBocchiExplosion",
    displayName: buildLocales("Bocchi explosion", {
        [Locale.Russian]: "Бокки - взрыв",
        [Locale.Ukrainian]: "Боккі - вибух",
        [Locale.Dutch]: "Bocchi explosie",
        [Locale.French]: "Bocchi explosion",
        [Locale.German]: "Bocchi Explosion",
        [Locale.Polish]: "Bocchi eksplozja",
        [Locale.SpanishES]: "Bocchi explosión",
        [Locale.SpanishLATAM]: "Bocchi explosión",
        [Locale.PortugueseBR]: "Bocchi explosão",
        [Locale.Turkish]: "Bocchi patlama",
        [Locale.Italian]: "Bocchi esplosione",
        [Locale.Indonesian]: "Bocchi meledak",
        [Locale.Czech]: "Bocchi exploze",
        [Locale.Japanese]: "ぼっちの爆発",
        [Locale.Korean]: "봇치 폭발",
        [Locale.ChineseCN]: "波奇爆炸",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 600,
    height: 428,
    animationDuration: 6010,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiExplosion.gif"
                width={600}
                height={338}
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
