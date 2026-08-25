import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkSatoruGojoNahIdWin: Template = {
    name: "jkSatoruGojoNahIdWin",
    displayName: buildLocales("Satoru Gojo nah I'd win", {
        [Locale.Russian]: "Сатору Годжо: нет, я бы победил",
        [Locale.Ukrainian]: "Сатору Годжо: ні, я б переміг",
        [Locale.Dutch]: "Satoru Gojo nah ik zou winnen",
        [Locale.French]: "Satoru Gojo nah je gagnerais",
        [Locale.German]: "Satoru Gojo nah ich würde gewinnen",
        [Locale.Polish]: "Satoru Gojo nah wygrałbym",
        [Locale.SpanishES]: "Satoru Gojo nah, ganaría",
        [Locale.SpanishLATAM]: "Satoru Gojo nah, ganaría",
        [Locale.PortugueseBR]: "Satoru Gojo nah, eu venceria",
        [Locale.Turkish]: "Satoru Gojo hayır kazanırdım",
        [Locale.Italian]: "Satoru Gojo nah vincerei",
        [Locale.Indonesian]: "Satoru Gojo nah aku akan menang",
        [Locale.Czech]: "Satoru Gojo ne vyhrál bych",
        [Locale.Japanese]: "五条悟 勝つさ",
        [Locale.Korean]: "고죠 사토루 이겨",
        [Locale.ChineseCN]: "五条悟 会赢的",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.DefaultText, Type.FaceImage],
    width: 700,
    height: 368,
    texts: [],
    images: [{ id: 0, description: "Gojo's face" }],
    element: ({ images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkSatoruGojoNahIdWin.png"
                width={700}
                height={368}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
        </div>
    ),
};
