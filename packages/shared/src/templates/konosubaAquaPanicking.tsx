import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konosubaAquaPanicking: Template = {
    name: "konosubaAquaPanicking",
    displayName: buildLocales("Panicking Aqua", {
        [Locale.Russian]: "Аква в панике",
        [Locale.Ukrainian]: "Аква в паніці",
        [Locale.Dutch]: "Panikerende Aqua",
        [Locale.French]: "Aqua paniquée",
        [Locale.German]: "Panische Aqua",
        [Locale.Polish]: "Panikująca Aqua",
        [Locale.SpanishES]: "Aqua en pánico",
        [Locale.SpanishLATAM]: "Aqua en pánico",
        [Locale.PortugueseBR]: "Aqua em pânico",
        [Locale.Turkish]: "Panikleyen Aqua",
        [Locale.Italian]: "Aqua nel panico",
        [Locale.Indonesian]: "Aqua panik",
        [Locale.Czech]: "Panikařící Aqua",
        [Locale.Japanese]: "パニックになるアクア",
        [Locale.Korean]: "패닉에 빠진 아쿠아",
        [Locale.ChineseCN]: "慌乱的阿库娅",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 390,
    animationDuration: 700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaAquaPanicking.gif"
                width={540}
                height={300}
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
                        fontSize: 30,
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
