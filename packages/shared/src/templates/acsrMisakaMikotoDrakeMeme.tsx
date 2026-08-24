import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const acsrMisakaMikotoDrakeMeme: Template = {
    name: "acsrMisakaMikotoDrakeMeme",
    displayName: buildLocales("Misaka Mikoto drake meme", {
        [Locale.Russian]: "Мем Дрейка с Мисакой Микото",
        [Locale.Ukrainian]: "Мем Дрейка з Місакою Мікото",
        [Locale.Dutch]: "Misaka Mikoto Drake-meme",
        [Locale.French]: "Mème Drake avec Misaka Mikoto",
        [Locale.German]: "Misaka Mikoto Drake-Meme",
        [Locale.Polish]: "Mem Drake'a z Misaką Mikoto",
        [Locale.SpanishES]: "Meme de Drake con Misaka Mikoto",
        [Locale.SpanishLATAM]: "Meme de Drake con Misaka Mikoto",
        [Locale.PortugueseBR]: "Meme do Drake com Misaka Mikoto",
        [Locale.Turkish]: "Misaka Mikoto Drake capsi",
        [Locale.Italian]: "Meme di Drake con Misaka Mikoto",
        [Locale.Indonesian]: "Meme Drake Misaka Mikoto",
        [Locale.Czech]: "Misaka Mikoto Drake meme",
        [Locale.Japanese]: "御坂美琴 ドレイクミーム",
        [Locale.Korean]: "미사카 미코토 드레이크 밈",
        [Locale.ChineseCN]: "御坂美琴德雷克梗图",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.ACertainScientificRailgun],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 964,
    height: 960,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 12 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/acsrMisakaMikotoDrakeMeme.png"
                width={482}
                height={960}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "3px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "3px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
