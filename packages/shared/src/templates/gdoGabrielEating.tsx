import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gdoGabrielEating: Template = {
    name: "gdbGabrielEating",
    displayName: buildLocales("Gabriel eating", {
        [Locale.Russian]: "Габриэль ест",
        [Locale.Ukrainian]: "Габріель їсть",
        [Locale.Dutch]: "Gabriel eet",
        [Locale.French]: "Gabriel qui mange",
        [Locale.German]: "Gabriel isst",
        [Locale.Polish]: "Gabriel je",
        [Locale.SpanishES]: "Gabriel comiendo",
        [Locale.SpanishLATAM]: "Gabriel comiendo",
        [Locale.PortugueseBR]: "Gabriel comendo",
        [Locale.Turkish]: "Gabriel yemek yiyor",
        [Locale.Italian]: "Gabriel che mangia",
        [Locale.Indonesian]: "Gabriel makan",
        [Locale.Czech]: "Gabriel jí",
        [Locale.Japanese]: "食べるガヴリール",
        [Locale.Korean]: "먹는 가브릴",
        [Locale.ChineseCN]: "吃东西的珈百璃",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1080,
    height: 540,
    animationDuration: 560,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoGabrielEating.gif"
                width={540}
                height={540}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 80,
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
