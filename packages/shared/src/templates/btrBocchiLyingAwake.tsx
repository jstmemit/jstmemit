import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiLyingAwake: Template = {
    name: "btrBocchiLyingAwake",
    displayName: buildLocales("Bocchi lying awake", {
        [Locale.Russian]: "Бокки лежит без сна",
        [Locale.Ukrainian]: "Боккі лежить без сну",
        [Locale.Dutch]: "Bocchi ligt wakker",
        [Locale.French]: "Bocchi allongée éveillée",
        [Locale.German]: "Bocchi liegt wach",
        [Locale.Polish]: "Bocchi leży bezsennie",
        [Locale.SpanishES]: "Bocchi despierta en la cama",
        [Locale.SpanishLATAM]: "Bocchi despierta en la cama",
        [Locale.PortugueseBR]: "Bocchi deitada sem dormir",
        [Locale.Turkish]: "Bocchi uyanık yatıyor",
        [Locale.Italian]: "Bocchi sveglia a letto",
        [Locale.Indonesian]: "Bocchi terjaga di kasur",
        [Locale.Czech]: "Bocchi leží a nemůže spát",
        [Locale.Japanese]: "眠れずに横になるぼっち",
        [Locale.Korean]: "잠 못 이루는 봇치",
        [Locale.ChineseCN]: "波奇失眠躺着",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground],
    width: 1024,
    height: 706,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiLyingAwake.png"
                width={1024}
                height={576}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "white",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
