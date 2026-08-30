import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const mhaBakugoGrinning: Template = {
    name: "mhaBakugoGrinning",
    displayName: buildLocales("Bakugo grinning", {
        [Locale.Russian]: "Бакуго ухмыляется",
        [Locale.Ukrainian]: "Бакуго посміхається",
        [Locale.Dutch]: "Grijnzende Bakugo",
        [Locale.French]: "Bakugo souriant",
        [Locale.German]: "Grinsender Bakugo",
        [Locale.Polish]: "Uśmiechający się Bakugo",
        [Locale.SpanishES]: "Bakugo sonriendo",
        [Locale.SpanishLATAM]: "Bakugo sonriendo",
        [Locale.PortugueseBR]: "Bakugo sorrindo",
        [Locale.Turkish]: "Sırıtan Bakugo",
        [Locale.Italian]: "Bakugo che ghigna",
        [Locale.Indonesian]: "Bakugo menyeringai",
        [Locale.Czech]: "Usmívající se Bakugo",
        [Locale.Japanese]: "ニヤリと笑う爆豪",
        [Locale.Korean]: "씨익 웃는 바쿠고",
        [Locale.ChineseCN]: "咧嘴笑的爆豪",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.MyHeroicAcademy],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 404,
    animationDuration: 770,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/mhaBakugoGrinning.gif"
                width={540}
                height={304}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
