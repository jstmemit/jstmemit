import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const btrBocchiAnxiousSmiling: Template = {
    name: "btrBocchiAnxiousSmiling",
    displayName: buildLocales("Bocchi anxious smiling", {
        [Locale.Russian]: "Бокки тревожно улыбается",
        [Locale.Ukrainian]: "Боккі тривожно посміхається",
        [Locale.Dutch]: "Bocchi angstig glimlachend",
        [Locale.French]: "Bocchi souriant avec angoisse",
        [Locale.German]: "Bocchi ängstlich lächelnd",
        [Locale.Polish]: "Bocchi uśmiecha się z lękiem",
        [Locale.SpanishES]: "Bocchi sonriendo con ansiedad",
        [Locale.SpanishLATAM]: "Bocchi sonriendo con ansiedad",
        [Locale.PortugueseBR]: "Bocchi sorrindo ansiosa",
        [Locale.Turkish]: "Bocchi kaygıyla gülümsüyor",
        [Locale.Italian]: "Bocchi che sorride ansiosa",
        [Locale.Indonesian]: "Bocchi tersenyum cemas",
        [Locale.Czech]: "Bocchi úzkostně se usmívá",
        [Locale.Japanese]: "ぼっちの不安げな笑み",
        [Locale.Korean]: "봇치 불안한 미소",
        [Locale.ChineseCN]: "波奇焦虑地微笑",
    }),
    topics: [Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextTopWithBackground, Type.DefaultText, Type.FaceImage],
    width: 1020,
    height: 1211,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [{ id: 0, description: "Bocchi`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiAnxiousSmiling.png"
                width={1020}
                height={1061}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={420}
                height={420}
                style={{
                    position: "absolute",
                    top: 350,
                    left: 300,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
