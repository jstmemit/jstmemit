import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const simpsonsWhyYouLittle: Template = {
    name: "simpsonsWhyYouLittle",
    displayName: buildLocales("Why you little", {
        [Locale.Russian]: "Ах ты мелкий",
        [Locale.Ukrainian]: "Ах ти ж дрібний",
        [Locale.Dutch]: "Jij kleine etter",
        [Locale.French]: "Espèce de petit garnement",
        [Locale.German]: "Na warte, du kleiner",
        [Locale.Polish]: "Ty mały gnojku",
        [Locale.SpanishES]: "¡Serás mocoso!",
        [Locale.SpanishLATAM]: "Pequeño demonio",
        [Locale.PortugueseBR]: "Seu pestinha",
        [Locale.Turkish]: "Seni velet",
        [Locale.Italian]: "Brutto moccioso",
        [Locale.Indonesian]: "Dasar anak nakal",
        [Locale.Czech]: "Ty malej spratku",
        [Locale.Japanese]: "このガキ",
        [Locale.Korean]: "이 꼬마 녀석아",
        [Locale.ChineseCN]: "你这个小鬼",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextBottomWithBackground, Type.FaceImage],
    width: 498,
    height: 424,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [
        { id: 0, description: "Homer`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsWhyYouLittle.png"
                width={498}
                height={324}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={180}
                height={180}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "12%",
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <img
                src={images[1]}
                width={160}
                height={160}
                style={{
                    position: "absolute",
                    top: "20%",
                    right: "20%",
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
