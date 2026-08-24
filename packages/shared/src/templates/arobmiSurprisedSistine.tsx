import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const arobmiSurprisedSistine: Template = {
    name: "arobmiSurprisedSistine",
    displayName: buildLocales("Surprised Sistine", {
        [Locale.Russian]: "Удивленная Систина",
        [Locale.Ukrainian]: "Здивована Сістіна",
        [Locale.Dutch]: "Verraste Sistine",
        [Locale.French]: "Sistine surprise",
        [Locale.German]: "Überraschte Sistine",
        [Locale.Polish]: "Zaskoczona Sistine",
        [Locale.SpanishES]: "Sistine sorprendida",
        [Locale.SpanishLATAM]: "Sistine sorprendida",
        [Locale.PortugueseBR]: "Sistine surpresa",
        [Locale.Turkish]: "Şaşırmış Sistine",
        [Locale.Italian]: "Sistine sorpresa",
        [Locale.Indonesian]: "Sistine terkejut",
        [Locale.Czech]: "Překvapená Sistine",
        [Locale.Japanese]: "驚くシスティーナ",
        [Locale.Korean]: "놀란 시스티나",
        [Locale.ChineseCN]: "惊讶的希丝缇娜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextBottomWithBackground],
    width: 537,
    height: 638,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiSurprisedSistine.png"
                width={537}
                height={538}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
                        fontFamily: font,
                        fontSize: 35,
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
