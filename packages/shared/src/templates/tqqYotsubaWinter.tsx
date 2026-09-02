import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqYotsubaWinter: Template = {
    name: "tqqYotsubaWinter",
    displayName: buildLocales("Yotsuba winter", {
        [Locale.Russian]: "Зимняя Йоцуба",
        [Locale.Ukrainian]: "Зимова Йоцуба",
        [Locale.Dutch]: "Winterse Yotsuba",
        [Locale.French]: "Yotsuba en hiver",
        [Locale.German]: "Winter-Yotsuba",
        [Locale.Polish]: "Zimowa Yotsuba",
        [Locale.SpanishES]: "Yotsuba en invierno",
        [Locale.SpanishLATAM]: "Yotsuba en invierno",
        [Locale.PortugueseBR]: "Yotsuba no inverno",
        [Locale.Turkish]: "Kışlık Yotsuba",
        [Locale.Italian]: "Yotsuba in inverno",
        [Locale.Indonesian]: "Yotsuba musim dingin",
        [Locale.Czech]: "Zimní Yotsuba",
        [Locale.Japanese]: "冬の四葉",
        [Locale.Korean]: "겨울의 요츠바",
        [Locale.ChineseCN]: "冬天的四叶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 3300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqYotsubaWinter.gif"
                width={498}
                height={280}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
