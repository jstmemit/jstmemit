import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkSatoruGojoNahIdWin1: Template = {
    name: "jkSatoruGojoNahIdWin1",
    displayName: buildLocales("Satoru Gojo nah I'd win 1", {
        [Locale.Russian]: "Сатору Годжо: нет, я бы победил 1",
        [Locale.Ukrainian]: "Сатору Годжо: ні, я б переміг 1",
        [Locale.Dutch]: "Satoru Gojo nah ik zou winnen 1",
        [Locale.French]: "Satoru Gojo nah je gagnerais 1",
        [Locale.German]: "Satoru Gojo nah ich würde gewinnen 1",
        [Locale.Polish]: "Satoru Gojo nah wygrałbym 1",
        [Locale.SpanishES]: "Satoru Gojo nah, ganaría 1",
        [Locale.SpanishLATAM]: "Satoru Gojo nah, ganaría 1",
        [Locale.PortugueseBR]: "Satoru Gojo nah, eu venceria 1",
        [Locale.Turkish]: "Satoru Gojo hayır kazanırdım 1",
        [Locale.Italian]: "Satoru Gojo nah vincerei 1",
        [Locale.Indonesian]: "Satoru Gojo nah aku akan menang 1",
        [Locale.Czech]: "Satoru Gojo ne vyhrál bych 1",
        [Locale.Japanese]: "五条悟 勝つさ 1",
        [Locale.Korean]: "고죠 사토루 이겨 1",
        [Locale.ChineseCN]: "五条悟 会赢的 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextRightWithBackground, Type.FaceImage],
    width: 700,
    height: 368,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
    images: [{ id: 0, description: "Gojo's face" }],
    element: ({ texts, images }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkSatoruGojoNahIdWin1.png"
                width={350}
                height={368}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: 130,
                    left: 95,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {`"${texts[0]}"`}
                </div>
            </div>
        </div>
    ),
};
