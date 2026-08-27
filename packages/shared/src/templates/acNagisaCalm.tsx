import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const acNagisaCalm: Template = {
    name: "acNagisaCalm",
    displayName: buildLocales("Nagisa calm", {
        [Locale.Russian]: "Нагиса спокоен",
        [Locale.Ukrainian]: "Нагіса спокійний",
        [Locale.Dutch]: "Nagisa kalm",
        [Locale.French]: "Nagisa calme",
        [Locale.German]: "Nagisa ruhig",
        [Locale.Polish]: "Nagisa spokojny",
        [Locale.SpanishES]: "Nagisa tranquilo",
        [Locale.SpanishLATAM]: "Nagisa tranquilo",
        [Locale.PortugueseBR]: "Nagisa calmo",
        [Locale.Turkish]: "Nagisa sakin",
        [Locale.Italian]: "Nagisa calmo",
        [Locale.Indonesian]: "Nagisa tenang",
        [Locale.Czech]: "Nagisa klidný",
        [Locale.Japanese]: "渚 冷静",
        [Locale.Korean]: "나기사 차분함",
        [Locale.ChineseCN]: "渚 冷静",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AssassinationClassroom],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 388,
    animationDuration: 6200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/acNagisaCalm.gif"
                width={498}
                height={298}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
