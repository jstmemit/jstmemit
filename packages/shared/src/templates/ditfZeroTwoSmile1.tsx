import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ditfZeroTwoSmile1: Template = {
    name: "ditfZeroTwoSmile1",
    displayName: buildLocales("Zero Two smiling 1", {
        [Locale.Russian]: "Zero Two улыбается 1",
        [Locale.Ukrainian]: "Zero Two посміхається 1",
        [Locale.Dutch]: "Zero Two glimlacht 1",
        [Locale.French]: "Zero Two qui sourit 1",
        [Locale.German]: "Zero Two lächelt 1",
        [Locale.Polish]: "Zero Two się uśmiecha 1",
        [Locale.SpanishES]: "Zero Two sonriendo 1",
        [Locale.SpanishLATAM]: "Zero Two sonriendo 1",
        [Locale.PortugueseBR]: "Zero Two sorrindo 1",
        [Locale.Turkish]: "Zero Two gülümsüyor 1",
        [Locale.Italian]: "Zero Two che sorride 1",
        [Locale.Indonesian]: "Zero Two tersenyum 1",
        [Locale.Czech]: "Zero Two se usmívá 1",
        [Locale.Japanese]: "微笑むゼロツー 1",
        [Locale.Korean]: "미소 짓는 제로투 1",
        [Locale.ChineseCN]: "02微笑 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.TextTopWithBackground],
    width: 540,
    height: 404,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoSmile1.png"
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
                    height: "100px",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
