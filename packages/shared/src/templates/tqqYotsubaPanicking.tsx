import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqYotsubaPanicking: Template = {
    name: "tqqYotsubaPanicking",
    displayName: buildLocales("Yotsuba panicking", {
        [Locale.Russian]: "Паникующая Йоцуба",
        [Locale.Ukrainian]: "Панікуюча Йоцуба",
        [Locale.Dutch]: "Panikerende Yotsuba",
        [Locale.French]: "Yotsuba paniquée",
        [Locale.German]: "Panische Yotsuba",
        [Locale.Polish]: "Panikująca Yotsuba",
        [Locale.SpanishES]: "Yotsuba en pánico",
        [Locale.SpanishLATAM]: "Yotsuba en pánico",
        [Locale.PortugueseBR]: "Yotsuba em pânico",
        [Locale.Turkish]: "Panikleyen Yotsuba",
        [Locale.Italian]: "Yotsuba nel panico",
        [Locale.Indonesian]: "Yotsuba panik",
        [Locale.Czech]: "Panikařící Yotsuba",
        [Locale.Japanese]: "パニックになる四葉",
        [Locale.Korean]: "패닉에 빠진 요츠바",
        [Locale.ChineseCN]: "恐慌的四叶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 498,
    height: 380,
    animationDuration: 1550,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqYotsubaPanicking.gif"
                width={498}
                height={280}
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
