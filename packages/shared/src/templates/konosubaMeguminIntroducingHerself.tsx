import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const konosubaMeguminIntroducingHerself: Template = {
    name: "konosubaMeguminIntroducingHerself",
    displayName: buildLocales("Megumin introducing herself", {
        [Locale.Russian]: "Мегумин представляется",
        [Locale.Ukrainian]: "Меґумін представляється",
        [Locale.Dutch]: "Zichzelf voorstellende Megumin",
        [Locale.French]: "Megumin se présentant",
        [Locale.German]: "Sich vorstellende Megumin",
        [Locale.Polish]: "Przedstawiająca się Megumin",
        [Locale.SpanishES]: "Megumin presentándose",
        [Locale.SpanishLATAM]: "Megumin presentándose",
        [Locale.PortugueseBR]: "Megumin se apresentando",
        [Locale.Turkish]: "Kendini tanıtan Megumin",
        [Locale.Italian]: "Megumin che si presenta",
        [Locale.Indonesian]: "Megumin memperkenalkan diri",
        [Locale.Czech]: "Představující se Megumin",
        [Locale.Japanese]: "自己紹介するめぐみん",
        [Locale.Korean]: "자기소개하는 메구민",
        [Locale.ChineseCN]: "自我介绍的惠惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KonoSuba],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 373,
    animationDuration: 6820,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konosubaMeguminIntroducingHerself.gif"
                width={500}
                height={283}
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
