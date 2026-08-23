import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiHeartAttack: Template = {
    name: "btrBocchiHeartAttack",
    displayName: buildLocales("Bocchi heart attack", {
        [Locale.Russian]: "У Бокки сердечный приступ",
        [Locale.Ukrainian]: "У Боккі серцевий напад",
        [Locale.Dutch]: "Bocchi hartaanval",
        [Locale.French]: "Bocchi crise cardiaque",
        [Locale.German]: "Bocchi Herzinfarkt",
        [Locale.Polish]: "Bocchi zawał serca",
        [Locale.SpanishES]: "Bocchi ataque al corazón",
        [Locale.SpanishLATAM]: "Bocchi ataque al corazón",
        [Locale.PortugueseBR]: "Bocchi ataque cardíaco",
        [Locale.Turkish]: "Bocchi kalp krizi geçiriyor",
        [Locale.Italian]: "Bocchi infarto",
        [Locale.Indonesian]: "Bocchi serangan jantung",
        [Locale.Czech]: "Bocchi infarkt",
        [Locale.Japanese]: "心臓が止まるぼっち",
        [Locale.Korean]: "심장마비 봇치",
        [Locale.ChineseCN]: "波奇心脏骤停",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/btrBocchiHeartAttack.gif"
                width={498}
                height={433}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 70,
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
