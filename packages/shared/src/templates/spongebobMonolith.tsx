import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const spongebobMonolith: Template = {
    name: "spongebobMonolith",
    displayName: buildLocales("Spongebob monolith", {
        [Locale.Russian]: "Монолит Губки Боба",
        [Locale.Ukrainian]: "Моноліт Губки Боба",
        [Locale.Dutch]: "Spongebob monoliet",
        [Locale.French]: "Monolithe Bob l'éponge",
        [Locale.German]: "Spongebob Monolith",
        [Locale.Polish]: "Monolit SpongeBoba",
        [Locale.SpanishES]: "Monolito de Bob Esponja",
        [Locale.SpanishLATAM]: "Monolito de Bob Esponja",
        [Locale.PortugueseBR]: "Monólito do Bob Esponja",
        [Locale.Turkish]: "SüngerBob dikilitaşı",
        [Locale.Italian]: "Monolito di SpongeBob",
        [Locale.Indonesian]: "Monolit Spongebob",
        [Locale.Czech]: "Spongebob monolit",
        [Locale.Japanese]: "スポンジ・ボブのモノリス",
        [Locale.Korean]: "스폰지밥 모놀리스",
        [Locale.ChineseCN]: "海绵宝宝巨石碑",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 1080,
    height: 1080,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Monolith`s face" },
        { id: 1, description: "SpongeBob`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobMonolith.png"
                width={1080}
                height={1080}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 250,
                    left: 250,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 250,
                    right: 250,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "150px",
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
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
