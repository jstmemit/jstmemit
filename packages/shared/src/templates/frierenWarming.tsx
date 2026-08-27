import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenWarming: Template = {
    name: "frierenWarming",
    displayName: buildLocales("Frieren warming up", {
        [Locale.Russian]: "Фрирен греется",
        [Locale.Ukrainian]: "Фрірен гріється",
        [Locale.Dutch]: "Frieren warmt zich op",
        [Locale.French]: "Frieren se réchauffe",
        [Locale.German]: "Frieren wärmt sich auf",
        [Locale.Polish]: "Frieren się ogrzewa",
        [Locale.SpanishES]: "Frieren calentándose",
        [Locale.SpanishLATAM]: "Frieren calentándose",
        [Locale.PortugueseBR]: "Frieren se aquecendo",
        [Locale.Turkish]: "Frieren ısınıyor",
        [Locale.Italian]: "Frieren che si scalda",
        [Locale.Indonesian]: "Frieren menghangatkan diri",
        [Locale.Czech]: "Frieren se ohřívá",
        [Locale.Japanese]: "暖まるフリーレン",
        [Locale.Korean]: "몸을 녹이는 프리렌",
        [Locale.ChineseCN]: "芙莉莲取暖",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 996,
    height: 479,
    animationDuration: 1960,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/frierenWarming.gif"
                width={498}
                height={479}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
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
