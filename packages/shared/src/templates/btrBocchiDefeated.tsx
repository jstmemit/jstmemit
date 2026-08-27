import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiDefeated: Template = {
    name: "btrBocchiDefeated",
    displayName: buildLocales("Bocchi defeated", {
        [Locale.Russian]: "Бокки повержена",
        [Locale.Ukrainian]: "Боккі переможена",
        [Locale.Dutch]: "Bocchi verslagen",
        [Locale.French]: "Bocchi vaincue",
        [Locale.German]: "Bocchi geschlagen",
        [Locale.Polish]: "Bocchi pokonana",
        [Locale.SpanishES]: "Bocchi derrotada",
        [Locale.SpanishLATAM]: "Bocchi derrotada",
        [Locale.PortugueseBR]: "Bocchi derrotada",
        [Locale.Turkish]: "Bocchi yenilmiş",
        [Locale.Italian]: "Bocchi sconfitta",
        [Locale.Indonesian]: "Bocchi kalah",
        [Locale.Czech]: "Bocchi poražená",
        [Locale.Japanese]: "打ちひしがれるぼっち",
        [Locale.Korean]: "패배한 봇치",
        [Locale.ChineseCN]: "波奇被击垮",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 3600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiDefeated.gif"
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
                        fontSize: fontSize(texts[0]),
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
