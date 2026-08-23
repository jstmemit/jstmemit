import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const arobmiSistineBlush: Template = {
    name: "arobmiSistineBlush",
    displayName: buildLocales("Sistine blush", {
        [Locale.Russian]: "Систина краснеет",
        [Locale.Ukrainian]: "Сістіна червоніє",
        [Locale.Dutch]: "Sistine bloost",
        [Locale.French]: "Sistine rougit",
        [Locale.German]: "Sistine errötet",
        [Locale.Polish]: "Sistine się rumieni",
        [Locale.SpanishES]: "Sistine sonrojada",
        [Locale.SpanishLATAM]: "Sistine sonrojada",
        [Locale.PortugueseBR]: "Sistine corada",
        [Locale.Turkish]: "Sistine kızarıyor",
        [Locale.Italian]: "Sistine arrossisce",
        [Locale.Indonesian]: "Sistine tersipu",
        [Locale.Czech]: "Sistine se červená",
        [Locale.Japanese]: "システィーナ 照れ",
        [Locale.Korean]: "시스티나 얼굴 붉힘",
        [Locale.ChineseCN]: "希丝缇娜脸红",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 1080,
    height: 483,
    animationDuration: 220,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/arobmiSistineBlush.gif"
                width={540}
                height={483}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
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
