import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaAquaBegging: Template = {
    name: "konosubaAquaBegging",
    displayName: buildLocales("Begging Aqua", {
        [Locale.Russian]: "Умоляющая Аква",
        [Locale.Ukrainian]: "Аква благає",
        [Locale.Dutch]: "Smekende Aqua",
        [Locale.French]: "Aqua qui supplie",
        [Locale.German]: "Flehende Aqua",
        [Locale.Polish]: "Błagająca Aqua",
        [Locale.SpanishES]: "Aqua suplicando",
        [Locale.SpanishLATAM]: "Aqua suplicando",
        [Locale.PortugueseBR]: "Aqua implorando",
        [Locale.Turkish]: "Yalvaran Aqua",
        [Locale.Italian]: "Aqua che supplica",
        [Locale.Indonesian]: "Aqua memohon",
        [Locale.Czech]: "Prosící Aqua",
        [Locale.Japanese]: "泣きつくアクア",
        [Locale.Korean]: "애원하는 아쿠아",
        [Locale.ChineseCN]: "哀求的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 3800,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaBegging.gif"
                width={500}
                height={281}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
