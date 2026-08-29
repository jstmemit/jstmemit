import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiSistineBlush1: Template = {
    name: "arobmiSistineBlush1",
    displayName: buildLocales("Sistine blush 1", {
        [Locale.Russian]: "Систина краснеет 1",
        [Locale.Ukrainian]: "Сістіна червоніє 1",
        [Locale.Dutch]: "Sistine bloost 1",
        [Locale.French]: "Sistine rougit 1",
        [Locale.German]: "Sistine errötet 1",
        [Locale.Polish]: "Sistine się rumieni 1",
        [Locale.SpanishES]: "Sistine sonrojada 1",
        [Locale.SpanishLATAM]: "Sistine sonrojada 1",
        [Locale.PortugueseBR]: "Sistine corada 1",
        [Locale.Turkish]: "Sistine kızarıyor 1",
        [Locale.Italian]: "Sistine arrossisce 1",
        [Locale.Indonesian]: "Sistine tersipu 1",
        [Locale.Czech]: "Sistine se červená 1",
        [Locale.Japanese]: "システィーナ 照れ 1",
        [Locale.Korean]: "시스티나 얼굴 붉힘 1",
        [Locale.ChineseCN]: "希丝缇娜脸红 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 380,
    animationDuration: 2000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/arobmiSistineBlush1.gif"
                width={500}
                height={280}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
