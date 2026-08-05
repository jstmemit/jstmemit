import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dsTanjiroHappyChibi: Template = {
    name: "dsTanjiroHappyChibi",
    displayName: buildLocales("Tanjiro happy chibi", {
        [Locale.Russian]: "Чиби Тандзиро счастлив",
        [Locale.Ukrainian]: "Чібі Тандзіро щасливий",
        [Locale.Dutch]: "Chibi Tanjiro blij",
        [Locale.French]: "Chibi Tanjiro heureux",
        [Locale.German]: "Chibi Tanjiro glücklich",
        [Locale.Polish]: "Chibi Tanjiro szczęśliwy",
        [Locale.SpanishES]: "Chibi Tanjiro feliz",
        [Locale.SpanishLATAM]: "Chibi Tanjiro feliz",
        [Locale.PortugueseBR]: "Chibi Tanjiro feliz",
        [Locale.Turkish]: "Chibi Tanjiro mutlu",
        [Locale.Italian]: "Chibi Tanjiro felice",
        [Locale.Indonesian]: "Chibi Tanjiro senang",
        [Locale.Czech]: "Chibi Tanjiro šťastný",
        [Locale.Japanese]: "嬉しいチビ炭治郎",
        [Locale.Korean]: "행복한 치비 탄지로",
        [Locale.ChineseCN]: "Q版炭治郎开心",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsTanjiroHappyChibi.png"
                width={500}
                height={281}
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
                    padding: "15px",
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
