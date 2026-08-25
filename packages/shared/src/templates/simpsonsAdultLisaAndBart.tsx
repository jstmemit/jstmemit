import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsAdultLisaAndBart: Template = {
    name: "simpsonsAdultLisaAndBart",
    displayName: buildLocales("Adult Lisa and Bart", {
        [Locale.Russian]: "Взрослые Лиза и Барт",
        [Locale.Ukrainian]: "Дорослі Ліза та Барт",
        [Locale.Dutch]: "Volwassen Lisa en Bart",
        [Locale.French]: "Lisa et Bart adultes",
        [Locale.German]: "Erwachsene Lisa und Bart",
        [Locale.Polish]: "Dorośli Lisa i Bart",
        [Locale.SpanishES]: "Lisa y Bart adultos",
        [Locale.SpanishLATAM]: "Lisa y Bart adultos",
        [Locale.PortugueseBR]: "Lisa e Bart adultos",
        [Locale.Turkish]: "Yetişkin Lisa ve Bart",
        [Locale.Italian]: "Lisa e Bart adulti",
        [Locale.Indonesian]: "Lisa dan Bart dewasa",
        [Locale.Czech]: "Dospělí Lisa a Bart",
        [Locale.Japanese]: "大人のリサとバート",
        [Locale.Korean]: "어른이 된 리사와 바트",
        [Locale.ChineseCN]: "成年的丽莎和巴特",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextBottomWithBackground],
    width: 736,
    height: 653,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Lisa`s face" },
        { id: 1, description: "Bart`s face" },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsAdultLisaAndBart.jpg"
                width={736}
                height={553}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 150,
                    left: 60,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={150}
                height={150}
                style={{
                    position: "absolute",
                    top: 150,
                    right: 120,
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
                    height: "100px",
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
                        fontFamily: font,
                        fontSize: 40,
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
