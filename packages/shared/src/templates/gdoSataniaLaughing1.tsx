import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gdoSataniaLaughing1: Template = {
    name: "gdoSataniaLaughing1",
    displayName: buildLocales("Satania laughing 1", {
        [Locale.Russian]: "Сатания смеется 1",
        [Locale.Ukrainian]: "Сатанія сміється 1",
        [Locale.Dutch]: "Satania lacht 1",
        [Locale.French]: "Satania qui rit 1",
        [Locale.German]: "Satania lacht 1",
        [Locale.Polish]: "Satania się śmieje 1",
        [Locale.SpanishES]: "Satania riendo 1",
        [Locale.SpanishLATAM]: "Satania riendo 1",
        [Locale.PortugueseBR]: "Satania rindo 1",
        [Locale.Turkish]: "Satania gülüyo 1r",
        [Locale.Italian]: "Satania che ride 1",
        [Locale.Indonesian]: "Satania tertawa 1",
        [Locale.Czech]: "Satania se směje 1",
        [Locale.Japanese]: "笑うサターニャ 1",
        [Locale.Korean]: "웃는 사타냐 1",
        [Locale.ChineseCN]: "大笑的萨塔妮亚 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GabrielDropOut],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 384,
    animationDuration: 2250,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gdoSataniaLaughing1.gif"
                width={500}
                height={284}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
