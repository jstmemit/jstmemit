import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umSpecialWeekRunningWithCarrot: Template = {
    name: "umSpecialWeekRunningWithCarrot",
    displayName: buildLocales("Special Week running with carrot", {
        [Locale.Russian]: "Спешел Уик бежит с морковкой",
        [Locale.Ukrainian]: "Спешл Вік біжить з морквою",
        [Locale.Dutch]: "Special Week rennend met wortel",
        [Locale.French]: "Special Week courant avec une carotte",
        [Locale.German]: "Special Week rennt mit Karotte",
        [Locale.Polish]: "Special Week biegnąca z marchewką",
        [Locale.SpanishES]: "Special Week corriendo con una zanahoria",
        [Locale.SpanishLATAM]: "Special Week corriendo con una zanahoria",
        [Locale.PortugueseBR]: "Special Week correndo com uma cenoura",
        [Locale.Turkish]: "Havuçla koşan Special Week",
        [Locale.Italian]: "Special Week che corre con una carota",
        [Locale.Indonesian]: "Special Week berlari dengan wortel",
        [Locale.Czech]: "Special Week běžící s mrkví",
        [Locale.Japanese]: "ニンジンを持って走るスペシャルウィーク",
        [Locale.Korean]: "당근을 들고 달리는 스페셜 위크",
        [Locale.ChineseCN]: "拿着胡萝卜奔跑的特别周",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 400,
    animationDuration: 1440,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umSpecialWeekRunningWithCarrot.webp"
                width={540}
                height={300}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
