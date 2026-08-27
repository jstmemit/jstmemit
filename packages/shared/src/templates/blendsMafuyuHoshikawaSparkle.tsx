import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMafuyuHoshikawaSparkle: Template = {
    name: "blendsMafuyuHoshikawaSparkle",
    displayName: buildLocales("Mafuyu Hoshikawa sparkle", {
        [Locale.Russian]: "Мафую Хосикава сияет",
        [Locale.Ukrainian]: "Мафую Хошікава сяє",
        [Locale.Dutch]: "Mafuyu Hoshikawa met glinstering",
        [Locale.French]: "Mafuyu Hoshikawa étincelante",
        [Locale.German]: "Mafuyu Hoshikawa funkelt",
        [Locale.Polish]: "Mafuyu Hoshikawa błyszczy",
        [Locale.SpanishES]: "Mafuyu Hoshikawa brillando",
        [Locale.SpanishLATAM]: "Mafuyu Hoshikawa brillando",
        [Locale.PortugueseBR]: "Mafuyu Hoshikawa brilhando",
        [Locale.Turkish]: "Mafuyu Hoshikawa parıldıyor",
        [Locale.Italian]: "Mafuyu Hoshikawa scintillante",
        [Locale.Indonesian]: "Mafuyu Hoshikawa berkilau",
        [Locale.Czech]: "Mafuyu Hoshikawa se třpytí",
        [Locale.Japanese]: "星川マフユのキラキラ",
        [Locale.Korean]: "호시카와 마후유 반짝임",
        [Locale.ChineseCN]: "星川真冬闪闪发光",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground],
    width: 1280,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsMafuyuHoshikawaSparkle.png"
                width={1280}
                height={720}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "180px",
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
