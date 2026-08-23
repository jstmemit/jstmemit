import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaBakaguya: Template = {
    name: "kaguyasamaBakaguya",
    displayName: buildLocales("Bakaguya", {
        [Locale.Russian]: "Бакагуя",
        [Locale.Ukrainian]: "Бакагуя",
        [Locale.Dutch]: "Bakaguya",
        [Locale.French]: "Bakaguya",
        [Locale.German]: "Bakaguya",
        [Locale.Polish]: "Bakaguya",
        [Locale.SpanishES]: "Bakaguya",
        [Locale.SpanishLATAM]: "Bakaguya",
        [Locale.PortugueseBR]: "Bakaguya",
        [Locale.Turkish]: "Bakaguya",
        [Locale.Italian]: "Bakaguya",
        [Locale.Indonesian]: "Bakaguya",
        [Locale.Czech]: "Bakaguya",
        [Locale.Japanese]: "バカぐや",
        [Locale.Korean]: "바카구야",
        [Locale.ChineseCN]: "笨蛋辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.DefaultText],
    width: 750,
    height: 552,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/kaguyasamaBakaguya.png"
                width={750}
                height={402}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: 50,
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
