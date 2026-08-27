import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaLaughing: Template = {
    name: "gdoSataniaLaughing",
    displayName: buildLocales("Satania laughing", {
        [Locale.Russian]: "Сатания смеется",
        [Locale.Ukrainian]: "Сатанія сміється",
        [Locale.Dutch]: "Satania lacht",
        [Locale.French]: "Satania qui rit",
        [Locale.German]: "Satania lacht",
        [Locale.Polish]: "Satania się śmieje",
        [Locale.SpanishES]: "Satania riendo",
        [Locale.SpanishLATAM]: "Satania riendo",
        [Locale.PortugueseBR]: "Satania rindo",
        [Locale.Turkish]: "Satania gülüyor",
        [Locale.Italian]: "Satania che ride",
        [Locale.Indonesian]: "Satania tertawa",
        [Locale.Czech]: "Satania se směje",
        [Locale.Japanese]: "笑うサターニャ",
        [Locale.Korean]: "웃는 사타냐",
        [Locale.ChineseCN]: "大笑的萨塔妮亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 2100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoSataniaLaughing.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
