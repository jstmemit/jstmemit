import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { Locale } from "discord.js";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";

export const arobmiAngrySistineFibel: Template = {
    name: "arobmiAngrySistineFibel",
    displayName: buildLocales("Angry Sistine Fibel", {
        [Locale.Russian]: "Злая Систина Фибель",
        [Locale.Ukrainian]: "Зла Сістіна Фібель",
        [Locale.Dutch]: "Boze Sistine Fibel",
        [Locale.French]: "Sistine Fibel en colère",
        [Locale.German]: "Wütende Sistine Fibel",
        [Locale.Polish]: "Zła Sistine Fibel",
        [Locale.SpanishES]: "Sistine Fibel enojada",
        [Locale.SpanishLATAM]: "Sistine Fibel enojada",
        [Locale.PortugueseBR]: "Sistine Fibel irritada",
        [Locale.Turkish]: "Sinirli Sistine Fibel",
        [Locale.Italian]: "Sistine Fibel arrabbiata",
        [Locale.Indonesian]: "Sistine Fibel marah",
        [Locale.Czech]: "Naštvaná Sistine Fibel",
        [Locale.Japanese]: "怒るシスティーナ・フィーベル",
        [Locale.Korean]: "화난 시스티나 피벨",
        [Locale.ChineseCN]: "生气的希丝缇娜·斐伊贝尔",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground],
    width: 658,
    height: 496,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiAngrySistineFibel.png"
                width={658}
                height={386}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        fontSize: 40,
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
