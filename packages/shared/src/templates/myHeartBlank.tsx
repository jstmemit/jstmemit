import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const myHeartBlank: Template = {
    name: "myHeartBlank",
    displayName: buildLocales("My heart blank", {
        [Locale.Russian]: "В моем сердце пустота",
        [Locale.Ukrainian]: "У моєму серці порожнеча",
        [Locale.Dutch]: "Mijn hart leeg",
        [Locale.French]: "Mon cœur vide",
        [Locale.German]: "Mein Herz leer",
        [Locale.Polish]: "Moje serce puste",
        [Locale.SpanishES]: "Mi corazón en blanco",
        [Locale.SpanishLATAM]: "Mi corazón en blanco",
        [Locale.PortugueseBR]: "Meu coração vazio",
        [Locale.Turkish]: "Kalbim boş",
        [Locale.Italian]: "Il mio cuore vuoto",
        [Locale.Indonesian]: "Hatiku kosong",
        [Locale.Czech]: "Mé srdce prázdné",
        [Locale.Japanese]: "私の心は空っぽ",
        [Locale.Korean]: "내 마음 공백",
        [Locale.ChineseCN]: "我的心空空的",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.ThreeOption, Type.DefaultText],
    width: 680,
    height: 602,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 6 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 6 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 5 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/myHeartBlank.jpg"
                width={680}
                height={602}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "57%",
                    width: "51%",
                    height: "29%",
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
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "27%",
                    width: "51%",
                    height: "30%",
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
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "51%",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
