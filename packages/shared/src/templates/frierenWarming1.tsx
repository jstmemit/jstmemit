import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenWarming1: Template = {
    name: "frierenWarming1",
    displayName: buildLocales("Frieren warming up 1", {
        [Locale.Russian]: "Фрирен греется 1",
        [Locale.Ukrainian]: "Фрірен гріється 1",
        [Locale.Dutch]: "Frieren warmt zich op 1",
        [Locale.French]: "Frieren se réchauffe 1",
        [Locale.German]: "Frieren wärmt sich auf 1",
        [Locale.Polish]: "Frieren się ogrzewa 1",
        [Locale.SpanishES]: "Frieren calentándose 1",
        [Locale.SpanishLATAM]: "Frieren calentándose 1",
        [Locale.PortugueseBR]: "Frieren se aquecendo 1",
        [Locale.Turkish]: "Frieren ısınıyor 1",
        [Locale.Italian]: "Frieren che si scalda 1",
        [Locale.Indonesian]: "Frieren menghangatkan diri 1",
        [Locale.Czech]: "Frieren se ohřívá 1",
        [Locale.Japanese]: "暖まるフリーレン 1",
        [Locale.Korean]: "몸을 녹이는 프리렌 1",
        [Locale.ChineseCN]: "芙莉莲取暖 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextLeftWithBackground],
    width: 996,
    height: 479,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenWarming1.png"
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
                    padding: "30px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
