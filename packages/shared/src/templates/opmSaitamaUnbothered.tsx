import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const opmSaitamaUnbothered: Template = {
    name: "opmSaitamaUnbothered",
    displayName: buildLocales("Saitama unbothered", {
        [Locale.Russian]: "Невозмутимый Сайтама",
        [Locale.Ukrainian]: "Незворушний Сайтама",
        [Locale.Dutch]: "Onverstoorbare Saitama",
        [Locale.French]: "Saitama imperturbable",
        [Locale.German]: "Unbeirrter Saitama",
        [Locale.Polish]: "Niezruszony Saitama",
        [Locale.SpanishES]: "Saitama imperturbable",
        [Locale.SpanishLATAM]: "Saitama imperturbable",
        [Locale.PortugueseBR]: "Saitama imperturbável",
        [Locale.Turkish]: "Umursamaz Saitama",
        [Locale.Italian]: "Saitama imperturbabile",
        [Locale.Indonesian]: "Saitama santai",
        [Locale.Czech]: "Nevzrušený Saitama",
        [Locale.Japanese]: "動じないサイタマ",
        [Locale.Korean]: "태연한 사이타마",
        [Locale.ChineseCN]: "淡定的埼玉",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.OnePunchMan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 403,
    animationDuration: 2400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/opmSaitamaUnbothered.gif"
                width={540}
                height={303}
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
