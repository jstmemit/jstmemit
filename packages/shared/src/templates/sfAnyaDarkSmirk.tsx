import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaDarkSmirk: Template = {
    name: "sfAnyaDarkSmirk",
    displayName: buildLocales("Anya crossing arms", {
        [Locale.Russian]: "Аня скрещивает руки",
        [Locale.Ukrainian]: "Аня схрещує руки",
        [Locale.Dutch]: "Anya met gekruiste armen",
        [Locale.French]: "Anya croisant les bras",
        [Locale.German]: "Anya mit verschränkten Armen",
        [Locale.Polish]: "Anya ze skrzyżowanymi rękami",
        [Locale.SpanishES]: "Anya cruzando los brazos",
        [Locale.SpanishLATAM]: "Anya cruzando los brazos",
        [Locale.PortugueseBR]: "Anya cruzando os braços",
        [Locale.Turkish]: "Kollarını kavuşturan Anya",
        [Locale.Italian]: "Anya con le braccia conserte",
        [Locale.Indonesian]: "Anya menyilangkan lengan",
        [Locale.Czech]: "Anya se zkříženýma rukama",
        [Locale.Japanese]: "腕を組むアーニャ",
        [Locale.Korean]: "팔짱 낀 아냐",
        [Locale.ChineseCN]: "交叉双臂的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground, Type.DefaultText, Type.Animated],
    width: 498,
    height: 398,
    animationDuration: 1400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaDarkSmirk.gif"
                width={498}
                height={298}
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
