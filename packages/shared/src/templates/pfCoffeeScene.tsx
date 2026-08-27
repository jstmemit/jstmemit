import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const pfCoffeeScene: Template = {
    name: "pfCoffeeScene",
    displayName: buildLocales("Coffee scene", {
        [Locale.Russian]: "Сцена с кофе",
        [Locale.Ukrainian]: "Сцена з кавою",
        [Locale.Dutch]: "Koffiescène",
        [Locale.French]: "Scène de café",
        [Locale.German]: "Kaffee-Szene",
        [Locale.Polish]: "Scena z kawą",
        [Locale.SpanishES]: "Escena de café",
        [Locale.SpanishLATAM]: "Escena de café",
        [Locale.PortugueseBR]: "Cena do café",
        [Locale.Turkish]: "Kahve sahnesi",
        [Locale.Italian]: "Scena del caffè",
        [Locale.Indonesian]: "Adegan kopi",
        [Locale.Czech]: "Scéna s kávou",
        [Locale.Japanese]: "コーヒーのシーン",
        [Locale.Korean]: "커피 씬",
        [Locale.ChineseCN]: "咖啡场景",
    }),
    topics: [Topic.PulpFiction, Topic.Movies],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 600,
    height: 386,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Vincent's face (left)" },
        { id: 1, description: "Jules's face (right)" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/pfCoffeeScene.jpg"
                width={600}
                height={386}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "30%",
                    left: "15%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={100}
                height={100}
                style={{
                    position: "absolute",
                    top: "27%",
                    right: "17%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "22%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
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
