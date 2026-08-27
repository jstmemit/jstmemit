import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiExcited: Template = {
    name: "btrBocchiExcited",
    displayName: buildLocales("Bocchi excited", {
        [Locale.Russian]: "Бокки в восторге",
        [Locale.Ukrainian]: "Боккі в захваті",
        [Locale.Dutch]: "Bocchi enthousiast",
        [Locale.French]: "Bocchi excitée",
        [Locale.German]: "Bocchi begeistert",
        [Locale.Polish]: "Bocchi podekscytowana",
        [Locale.SpanishES]: "Bocchi emocionada",
        [Locale.SpanishLATAM]: "Bocchi emocionada",
        [Locale.PortugueseBR]: "Bocchi animada",
        [Locale.Turkish]: "Bocchi heyecanlı",
        [Locale.Italian]: "Bocchi entusiasta",
        [Locale.Indonesian]: "Bocchi bersemangat",
        [Locale.Czech]: "Bocchi nadšená",
        [Locale.Japanese]: "はしゃぐぼっち",
        [Locale.Korean]: "신난 봇치",
        [Locale.ChineseCN]: "波奇兴奋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 433,
    animationDuration: 1450,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiExcited.gif"
                width={498}
                height={343}
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
