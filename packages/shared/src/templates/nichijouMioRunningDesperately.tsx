import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouMioRunningDesperately: Template = {
    name: "nichijouMioRunningDesperately",
    displayName: buildLocales("Mio running desperately", {
        [Locale.Russian]: "Отчаянно бегущая Мио",
        [Locale.Ukrainian]: "Міо відчайдушно біжить",
        [Locale.Dutch]: "Wanhopig rennende Mio",
        [Locale.French]: "Mio courant désespérément",
        [Locale.German]: "Verzweifelt rennende Mio",
        [Locale.Polish]: "Desperacko biegnąca Mio",
        [Locale.SpanishES]: "Mio corriendo desesperadamente",
        [Locale.SpanishLATAM]: "Mio corriendo desesperadamente",
        [Locale.PortugueseBR]: "Mio correndo desesperadamente",
        [Locale.Turkish]: "Çaresizce koşan Mio",
        [Locale.Italian]: "Mio che corre disperata",
        [Locale.Indonesian]: "Mio berlari mati-matian",
        [Locale.Czech]: "Zoufale běžící Mio",
        [Locale.Japanese]: "必死に走るみお",
        [Locale.Korean]: "필사적으로 달리는 미오",
        [Locale.ChineseCN]: "拼命奔跑的美绪",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 840,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouMioRunningDesperately.gif"
                width={500}
                height={281}
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
