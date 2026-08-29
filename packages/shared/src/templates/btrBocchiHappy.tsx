import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiHappy: Template = {
    name: "btrBocchiHappy",
    displayName: buildLocales("Bocchi happy", {
        [Locale.Russian]: "Бокки счастлива",
        [Locale.Ukrainian]: "Боккі щаслива",
        [Locale.Dutch]: "Bocchi blij",
        [Locale.French]: "Bocchi heureuse",
        [Locale.German]: "Bocchi glücklich",
        [Locale.Polish]: "Bocchi szczęśliwa",
        [Locale.SpanishES]: "Bocchi feliz",
        [Locale.SpanishLATAM]: "Bocchi feliz",
        [Locale.PortugueseBR]: "Bocchi feliz",
        [Locale.Turkish]: "Bocchi mutlu",
        [Locale.Italian]: "Bocchi felice",
        [Locale.Indonesian]: "Bocchi senang",
        [Locale.Czech]: "Bocchi šťastná",
        [Locale.Japanese]: "嬉しいぼっち",
        [Locale.Korean]: "행복한 봇치",
        [Locale.ChineseCN]: "波奇开心",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeftWithBackground],
    width: 1280,
    height: 576,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiHappy.png"
                width={640}
                height={576}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "25px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
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
