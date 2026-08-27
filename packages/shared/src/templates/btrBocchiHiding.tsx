import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiHiding: Template = {
    name: "btrBocchiHiding",
    displayName: buildLocales("Bocchi hiding", {
        [Locale.Russian]: "Бокки прячется",
        [Locale.Ukrainian]: "Боккі ховається",
        [Locale.Dutch]: "Bocchi verstopt zich",
        [Locale.French]: "Bocchi se cache",
        [Locale.German]: "Bocchi versteckt sich",
        [Locale.Polish]: "Bocchi się chowa",
        [Locale.SpanishES]: "Bocchi escondiéndose",
        [Locale.SpanishLATAM]: "Bocchi escondiéndose",
        [Locale.PortugueseBR]: "Bocchi se escondendo",
        [Locale.Turkish]: "Bocchi saklanıyor",
        [Locale.Italian]: "Bocchi che si nasconde",
        [Locale.Indonesian]: "Bocchi bersembunyi",
        [Locale.Czech]: "Bocchi se schovává",
        [Locale.Japanese]: "隠れるぼっち",
        [Locale.Korean]: "숨는 봇치",
        [Locale.ChineseCN]: "波奇躲藏",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 3350,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiHiding.gif"
                width={498}
                height={280}
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
                        fontFamily: font,
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
