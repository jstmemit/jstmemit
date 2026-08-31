import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaCrossingArms1: Template = {
    name: "sfAnyaCrossingArms1",
    displayName: buildLocales("Anya crossing arms 1", {
        [Locale.Russian]: "Аня скрещивает руки 1",
        [Locale.Ukrainian]: "Аня схрещує руки 1",
        [Locale.Dutch]: "Anya met gekruiste armen 1",
        [Locale.French]: "Anya croisant les bras 1",
        [Locale.German]: "Anya mit verschränkten Armen 1",
        [Locale.Polish]: "Anya ze skrzyżowanymi rękami 1",
        [Locale.SpanishES]: "Anya cruzando los brazos 1",
        [Locale.SpanishLATAM]: "Anya cruzando los brazos 1",
        [Locale.PortugueseBR]: "Anya cruzando os braços 1",
        [Locale.Turkish]: "Kollarını kavuşturan Anya 1",
        [Locale.Italian]: "Anya con le braccia conserte 1",
        [Locale.Indonesian]: "Anya menyilangkan lengan 1",
        [Locale.Czech]: "Anya se zkříženýma rukama 1",
        [Locale.Japanese]: "腕を組むアーニャ 1",
        [Locale.Korean]: "팔짱 낀 아냐 1",
        [Locale.ChineseCN]: "交叉双臂的阿尼亚 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 606,
    height: 498,
    animationDuration: 4550,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 20 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaCrossingArms1.gif"
                width={303}
                height={498}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 12,
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
