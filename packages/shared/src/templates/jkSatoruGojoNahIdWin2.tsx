import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const jkSatoruGojoNahIdWin2: Template = {
    name: "jkSatoruGojoNahIdWin2",
    displayName: buildLocales("Satoru Gojo nah I'd win 2", {
        [Locale.Russian]: "Сатору Годжо: нет, я бы победил 2",
        [Locale.Ukrainian]: "Сатору Годжо: ні, я б переміг 2",
        [Locale.Dutch]: "Satoru Gojo nah ik zou winnen 2",
        [Locale.French]: "Satoru Gojo nah je gagnerais 2",
        [Locale.German]: "Satoru Gojo nah ich würde gewinnen 2",
        [Locale.Polish]: "Satoru Gojo nah wygrałbym 2",
        [Locale.SpanishES]: "Satoru Gojo nah, ganaría 2",
        [Locale.SpanishLATAM]: "Satoru Gojo nah, ganaría 2",
        [Locale.PortugueseBR]: "Satoru Gojo nah, eu venceria 2",
        [Locale.Turkish]: "Satoru Gojo hayır kazanırdım 2",
        [Locale.Italian]: "Satoru Gojo nah vincerei 2",
        [Locale.Indonesian]: "Satoru Gojo nah aku akan menang 2",
        [Locale.Czech]: "Satoru Gojo ne vyhrál bych 2",
        [Locale.Japanese]: "五条悟 勝つさ 2",
        [Locale.Korean]: "고죠 사토루 이겨 2",
        [Locale.ChineseCN]: "五条悟 会赢的 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground],
    width: 350,
    height: 448,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkSatoruGojoNahIdWin1.png"
                width={350}
                height={368}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
