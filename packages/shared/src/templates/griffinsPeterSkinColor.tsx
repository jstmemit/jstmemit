import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsPeterSkinColor: Template = {
    name: "griffinsPeterSkinColor",
    displayName: buildLocales("Peter skin color", {
        [Locale.Russian]: "Цвет кожи Питера",
        [Locale.Ukrainian]: "Колір шкіри Пітера",
        [Locale.Dutch]: "Huidskleur van Peter",
        [Locale.French]: "Couleur de peau de Peter",
        [Locale.German]: "Peters Hautfarbe",
        [Locale.Polish]: "Kolor skóry Petera",
        [Locale.SpanishES]: "Color de piel de Peter",
        [Locale.SpanishLATAM]: "Color de piel de Peter",
        [Locale.PortugueseBR]: "Cor da pele do Peter",
        [Locale.Turkish]: "Peter cilt rengi",
        [Locale.Italian]: "Colore della pelle di Peter",
        [Locale.Indonesian]: "Warna kulit Peter",
        [Locale.Czech]: "Barva pleti Petera",
        [Locale.Japanese]: "ピーターの肌の色",
        [Locale.Korean]: "피터 피부색",
        [Locale.ChineseCN]: "彼得肤色",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextLeftWithBackground, Type.FaceImage, Type.TwoOption],
    width: 1000,
    height: 539,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 2 },
        { id: 1, description: "second option", minLength: 1, maxLength: 2 },
    ],
    images: [{ id: 0, description: "Peter`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterSkinColor.png"
                width={1000}
                height={539}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={400}
                height={400}
                style={{
                    position: "absolute",
                    top: 10,
                    right: 20,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: "10%",
                    top: "2%",
                    width: "23%",
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(3deg)",
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
            <div
                style={{
                    position: "absolute",
                    left: "8%",
                    bottom: "5%",
                    width: "23%",
                    height: "42%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    transform: "rotate(3deg)",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
