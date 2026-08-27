import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const toradoraTaigaAngryCrying: Template = {
    name: "toradoraTaigaAngryCrying",
    displayName: buildLocales("Taiga crying angrily", {
        [Locale.Russian]: "Тайга злобно плачет",
        [Locale.Ukrainian]: "Тайга злісно плаче",
        [Locale.Dutch]: "Taiga huilt boos",
        [Locale.French]: "Taiga qui pleure de colère",
        [Locale.German]: "Taiga weint wütend",
        [Locale.Polish]: "Taiga płacze ze złości",
        [Locale.SpanishES]: "Taiga llorando de enfado",
        [Locale.SpanishLATAM]: "Taiga llorando de enojo",
        [Locale.PortugueseBR]: "Taiga chorando de raiva",
        [Locale.Turkish]: "Taiga öfkeyle ağlıyor",
        [Locale.Italian]: "Taiga che piange arrabbiata",
        [Locale.Indonesian]: "Taiga menangis dengan marah",
        [Locale.Czech]: "Taiga naštvaně pláče",
        [Locale.Japanese]: "怒り泣きする大河",
        [Locale.Korean]: "화내며 우는 타이가",
        [Locale.ChineseCN]: "大河气哭",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Toradora],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 2300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/toradoraTaigaAngryCrying.gif"
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
