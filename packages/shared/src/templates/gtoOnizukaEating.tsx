import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const gtoOnizukaEating: Template = {
    name: "gtoOnizukaEating",
    displayName: buildLocales("Onizuka eating", {
        [Locale.Russian]: "Онидзука ест",
        [Locale.Ukrainian]: "Онідзука їсть",
        [Locale.Dutch]: "Etende Onizuka",
        [Locale.French]: "Onizuka qui mange",
        [Locale.German]: "Essender Onizuka",
        [Locale.Polish]: "Jedzący Onizuka",
        [Locale.SpanishES]: "Onizuka comiendo",
        [Locale.SpanishLATAM]: "Onizuka comiendo",
        [Locale.PortugueseBR]: "Onizuka comendo",
        [Locale.Turkish]: "Yemek yiyen Onizuka",
        [Locale.Italian]: "Onizuka che mangia",
        [Locale.Indonesian]: "Onizuka makan",
        [Locale.Czech]: "Jedící Onizuka",
        [Locale.Japanese]: "食べる鬼塚",
        [Locale.Korean]: "먹는 오니즈카",
        [Locale.ChineseCN]: "吃东西的鬼冢",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.GreatTeacherOnizuka],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 400,
    height: 380,
    animationDuration: 1620,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gtoOnizukaEating.gif"
                width={400}
                height={300}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "80px",
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
