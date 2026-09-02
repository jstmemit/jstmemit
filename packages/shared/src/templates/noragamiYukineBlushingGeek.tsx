import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiYukineBlushingGeek: Template = {
    name: "noragamiYukineBlushingGeek",
    displayName: buildLocales("Yukine blushing geek", {
        [Locale.Russian]: "Смущенный Юкине-гик",
        [Locale.Ukrainian]: "Збентежений Юкіне-гік",
        [Locale.Dutch]: "Blozende nerd Yukine",
        [Locale.French]: "Yukine geek rougissant",
        [Locale.German]: "Errötender Geek Yukine",
        [Locale.Polish]: "Zarumieniony nerd Yukine",
        [Locale.SpanishES]: "Yukine geek sonrojado",
        [Locale.SpanishLATAM]: "Yukine geek sonrojado",
        [Locale.PortugueseBR]: "Yukine geek corado",
        [Locale.Turkish]: "Kızaran geek Yukine",
        [Locale.Italian]: "Yukine geek arrossito",
        [Locale.Indonesian]: "Yukine geek tersipu",
        [Locale.Czech]: "Červenající se geek Yukine",
        [Locale.Japanese]: "赤面するオタクの雪音",
        [Locale.Korean]: "얼굴을 붉히는 너드 유키네",
        [Locale.ChineseCN]: "脸红的极客雪音",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 378,
    animationDuration: 1850,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/noragamiYukineBlushingGeek.webp"
                width={500}
                height={278}
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
