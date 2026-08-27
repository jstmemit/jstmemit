import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sadMan: Template = {
    name: "sadMan",
    displayName: buildLocales("Sad man", {
        [Locale.Russian]: "Грустный человек",
        [Locale.Ukrainian]: "Сумний чоловік",
        [Locale.Dutch]: "Verdrietige man",
        [Locale.French]: "Homme triste",
        [Locale.German]: "Trauriger Mann",
        [Locale.Polish]: "Smutny mężczyzna",
        [Locale.SpanishES]: "Hombre triste",
        [Locale.SpanishLATAM]: "Hombre triste",
        [Locale.PortugueseBR]: "Homem triste",
        [Locale.Turkish]: "Üzgün adam",
        [Locale.Italian]: "Uomo triste",
        [Locale.Indonesian]: "Pria sedih",
        [Locale.Czech]: "Smutný muž",
        [Locale.Japanese]: "悲しい男",
        [Locale.Korean]: "슬픈 남자",
        [Locale.ChineseCN]: "悲伤的男人",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextTopWithBackground],
    width: 1600,
    height: 1600,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sadMan.png"
                width={1600}
                height={1600}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "27%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
