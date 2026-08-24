import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiDizzy: Template = {
    name: "btrBocchiDizzy",
    displayName: buildLocales("Bocchi dizzy", {
        [Locale.Russian]: "Бокки в головокружении",
        [Locale.Ukrainian]: "Боккі в запамороченні",
        [Locale.Dutch]: "Bocchi duizelig",
        [Locale.French]: "Bocchi étourdie",
        [Locale.German]: "Bocchi schwindelig",
        [Locale.Polish]: "Bocchi oszołomiona",
        [Locale.SpanishES]: "Bocchi mareada",
        [Locale.SpanishLATAM]: "Bocchi mareada",
        [Locale.PortugueseBR]: "Bocchi tonta",
        [Locale.Turkish]: "Bocchi baş dönmesi içinde",
        [Locale.Italian]: "Bocchi stordita",
        [Locale.Indonesian]: "Bocchi pusing",
        [Locale.Czech]: "Bocchi se točí hlava",
        [Locale.Japanese]: "めまいのぼっち",
        [Locale.Korean]: "어지러운 봇치",
        [Locale.ChineseCN]: "波奇晕眩",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 2250,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiDizzy.gif"
                width={498}
                height={280}
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
