import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaHappy: Template = {
    name: "kaguyasamaChikaHappy",
    displayName: buildLocales("Happy Chika", {
        [Locale.Russian]: "Счастливая Чика",
        [Locale.Ukrainian]: "Щаслива Чіка",
        [Locale.Dutch]: "Blije Chika",
        [Locale.French]: "Chika heureuse",
        [Locale.German]: "Glückliche Chika",
        [Locale.Polish]: "Szczęśliwa Chika",
        [Locale.SpanishES]: "Chika feliz",
        [Locale.SpanishLATAM]: "Chika feliz",
        [Locale.PortugueseBR]: "Chika feliz",
        [Locale.Turkish]: "Mutlu Chika",
        [Locale.Italian]: "Chika felice",
        [Locale.Indonesian]: "Chika bahagia",
        [Locale.Czech]: "Šťastná Chika",
        [Locale.Japanese]: "幸せなチカ",
        [Locale.Korean]: "행복한 치카",
        [Locale.ChineseCN]: "开心的千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 1400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaHappy.gif"
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
