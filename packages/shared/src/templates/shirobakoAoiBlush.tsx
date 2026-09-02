import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoAoiBlush: Template = {
    name: "shirobakoAoiBlush",
    displayName: buildLocales("Aoi Miyamori blushing", {
        [Locale.Russian]: "Смущенная Аой Миямори",
        [Locale.Ukrainian]: "Збентежена Аой Міяморі",
        [Locale.Dutch]: "Blozende Aoi Miyamori",
        [Locale.French]: "Aoi Miyamori rougissante",
        [Locale.German]: "Errötende Aoi Miyamori",
        [Locale.Polish]: "Zarumieniona Aoi Miyamori",
        [Locale.SpanishES]: "Aoi Miyamori sonrojada",
        [Locale.SpanishLATAM]: "Aoi Miyamori sonrojada",
        [Locale.PortugueseBR]: "Aoi Miyamori corada",
        [Locale.Turkish]: "Kızaran Aoi Miyamori",
        [Locale.Italian]: "Aoi Miyamori arrossita",
        [Locale.Indonesian]: "Aoi Miyamori tersipu",
        [Locale.Czech]: "Červenající se Aoi Miyamori",
        [Locale.Japanese]: "赤面する宮森あおい",
        [Locale.Korean]: "얼굴을 붉히는 미야모리 아오이",
        [Locale.ChineseCN]: "脸红的宫森葵",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Shirobako],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 498,
    animationDuration: 160,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/shirobakoAoiBlush.gif"
                width={500}
                height={398}
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
