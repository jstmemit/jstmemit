import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaKaguyaPanicking: Template = {
    name: "kaguyasamaKaguyaPanicking",
    displayName: buildLocales("Panicking Kaguya", {
        [Locale.Russian]: "Кагуя в панике",
        [Locale.Ukrainian]: "Каґуя в паніці",
        [Locale.Dutch]: "Panikerende Kaguya",
        [Locale.French]: "Kaguya paniquée",
        [Locale.German]: "Panische Kaguya",
        [Locale.Polish]: "Panikująca Kaguya",
        [Locale.SpanishES]: "Kaguya en pánico",
        [Locale.SpanishLATAM]: "Kaguya en pánico",
        [Locale.PortugueseBR]: "Kaguya em pânico",
        [Locale.Turkish]: "Panikleyen Kaguya",
        [Locale.Italian]: "Kaguya nel panico",
        [Locale.Indonesian]: "Kaguya panik",
        [Locale.Czech]: "Panikařící Kaguya",
        [Locale.Japanese]: "パニックになるかぐや",
        [Locale.Korean]: "패닉에 빠진 카구야",
        [Locale.ChineseCN]: "慌乱的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 992,
    height: 498,
    animationDuration: 1150,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaPanicking.gif"
                width={496}
                height={498}
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
                    padding: "10px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
