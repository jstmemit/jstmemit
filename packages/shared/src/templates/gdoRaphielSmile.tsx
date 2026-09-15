import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoRaphielSmile: Template = {
    name: "gdoRaphielSmile",
    displayName: buildLocales("Raphiel smiling", {
        [Locale.Russian]: "Рафиэль улыбается",
        [Locale.Ukrainian]: "Рафіель посміхається",
        [Locale.Dutch]: "Raphiel glimlacht",
        [Locale.French]: "Raphiel qui sourit",
        [Locale.German]: "Raphiel lächelt",
        [Locale.Polish]: "Raphiel się uśmiecha",
        [Locale.SpanishES]: "Raphiel sonriendo",
        [Locale.SpanishLATAM]: "Raphiel sonriendo",
        [Locale.PortugueseBR]: "Raphiel sorrindo",
        [Locale.Turkish]: "Raphiel gülümsüyor",
        [Locale.Italian]: "Raphiel che sorride",
        [Locale.Indonesian]: "Raphiel tersenyum",
        [Locale.Czech]: "Raphiel se usmívá",
        [Locale.Japanese]: "微笑むラフィエル",
        [Locale.Korean]: "미소 짓는 라피엘",
        [Locale.ChineseCN]: "拉斐尔微笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gdoRaphielSmile.png"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
