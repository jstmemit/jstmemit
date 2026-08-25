import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const ditfZeroTwoSmile: Template = {
    name: "ditfZeroTwoSmile",
    displayName: buildLocales("Zero Two smiling", {
        [Locale.Russian]: "Zero Two улыбается",
        [Locale.Ukrainian]: "Zero Two посміхається",
        [Locale.Dutch]: "Zero Two glimlacht",
        [Locale.French]: "Zero Two qui sourit",
        [Locale.German]: "Zero Two lächelt",
        [Locale.Polish]: "Zero Two się uśmiecha",
        [Locale.SpanishES]: "Zero Two sonriendo",
        [Locale.SpanishLATAM]: "Zero Two sonriendo",
        [Locale.PortugueseBR]: "Zero Two sorrindo",
        [Locale.Turkish]: "Zero Two gülümsüyor",
        [Locale.Italian]: "Zero Two che sorride",
        [Locale.Indonesian]: "Zero Two tersenyum",
        [Locale.Czech]: "Zero Two se usmívá",
        [Locale.Japanese]: "微笑むゼロツー",
        [Locale.Korean]: "미소 짓는 제로투",
        [Locale.ChineseCN]: "02微笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 3180,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/ditfZeroTwoSmile.gif"
                width={540}
                height={304}
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
                    padding: "10px",
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
