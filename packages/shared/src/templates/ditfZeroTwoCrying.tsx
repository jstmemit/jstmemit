import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ditfZeroTwoCrying: Template = {
    name: "ditfZeroTwoCrying",
    displayName: buildLocales("Zero Two crying", {
        [Locale.Russian]: "Zero Two плачет",
        [Locale.Ukrainian]: "Zero Two плаче",
        [Locale.Dutch]: "Zero Two huilt",
        [Locale.French]: "Zero Two qui pleure",
        [Locale.German]: "Zero Two weint",
        [Locale.Polish]: "Zero Two płacze",
        [Locale.SpanishES]: "Zero Two llorando",
        [Locale.SpanishLATAM]: "Zero Two llorando",
        [Locale.PortugueseBR]: "Zero Two chorando",
        [Locale.Turkish]: "Zero Two ağlıyor",
        [Locale.Italian]: "Zero Two che piange",
        [Locale.Indonesian]: "Zero Two menangis",
        [Locale.Czech]: "Zero Two pláče",
        [Locale.Japanese]: "泣くゼロツー",
        [Locale.Korean]: "우는 제로투",
        [Locale.ChineseCN]: "02哭泣",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 720,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ditfZeroTwoCrying.gif"
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
