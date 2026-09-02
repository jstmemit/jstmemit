import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiHiyoriLooking: Template = {
    name: "noragamiHiyoriLooking",
    displayName: buildLocales("Hiyori looking", {
        [Locale.Russian]: "Хиёри смотрит",
        [Locale.Ukrainian]: "Хійорі дивиться",
        [Locale.Dutch]: "Kijkende Hiyori",
        [Locale.French]: "Hiyori regardant",
        [Locale.German]: "Schauende Hiyori",
        [Locale.Polish]: "Patrząca Hiyori",
        [Locale.SpanishES]: "Hiyori mirando",
        [Locale.SpanishLATAM]: "Hiyori mirando",
        [Locale.PortugueseBR]: "Hiyori olhando",
        [Locale.Turkish]: "Bakan Hiyori",
        [Locale.Italian]: "Hiyori che guarda",
        [Locale.Indonesian]: "Hiyori melihat",
        [Locale.Czech]: "Dívající se Hiyori",
        [Locale.Japanese]: "見つめるひより",
        [Locale.Korean]: "바라보는 히요리",
        [Locale.ChineseCN]: "看着的日和",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 498,
    animationDuration: 1350,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/noragamiHiyoriLooking.gif"
                width={498}
                height={498}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
