import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiCrying: Template = {
    name: "btrBocchiCrying",
    displayName: buildLocales("Bocchi crying", {
        [Locale.Russian]: "Бокки плачет",
        [Locale.Ukrainian]: "Боккі плаче",
        [Locale.Dutch]: "Bocchi huilend",
        [Locale.French]: "Bocchi qui pleure",
        [Locale.German]: "Bocchi weint",
        [Locale.Polish]: "Bocchi płacze",
        [Locale.SpanishES]: "Bocchi llorando",
        [Locale.SpanishLATAM]: "Bocchi llorando",
        [Locale.PortugueseBR]: "Bocchi chorando",
        [Locale.Turkish]: "Bocchi ağlıyor",
        [Locale.Italian]: "Bocchi che piange",
        [Locale.Indonesian]: "Bocchi menangis",
        [Locale.Czech]: "Bocchi pláče",
        [Locale.Japanese]: "泣くぼっち",
        [Locale.Korean]: "우는 봇치",
        [Locale.ChineseCN]: "波奇哭泣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 996,
    height: 498,
    animationDuration: 3150,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiCrying.gif"
                width={498}
                height={498}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 70,
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
