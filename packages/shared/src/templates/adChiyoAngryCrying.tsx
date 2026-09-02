import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adChiyoAngryCrying: Template = {
    name: "adChiyoAngryCrying",
    displayName: buildLocales("Chiyo angry crying", {
        [Locale.Russian]: "Чиё плачет от злости",
        [Locale.Ukrainian]: "Чійо плаче від злості",
        [Locale.Dutch]: "Chiyo huilt boos",
        [Locale.French]: "Chiyo pleurant de colère",
        [Locale.German]: "Chiyo weint wütend",
        [Locale.Polish]: "Chiyo płacze ze złości",
        [Locale.SpanishES]: "Chiyo llorando enojada",
        [Locale.SpanishLATAM]: "Chiyo llorando enojada",
        [Locale.PortugueseBR]: "Chiyo chorando de raiva",
        [Locale.Turkish]: "Chiyo sinirle ağlıyor",
        [Locale.Italian]: "Chiyo piange di rabbia",
        [Locale.Indonesian]: "Chiyo menangis marah",
        [Locale.Czech]: "Chiyo pláče vzteky",
        [Locale.Japanese]: "ちよ 怒り泣き",
        [Locale.Korean]: "화나서 우는 치요",
        [Locale.ChineseCN]: "千代气哭",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 514,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adChiyoAngryCrying.gif"
                width={540}
                height={404}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
