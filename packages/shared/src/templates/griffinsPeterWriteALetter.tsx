import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const griffinsPeterWriteALetter: Template = {
    name: "griffinsPeterWriteALetter",
    displayName: buildLocales("Peter write a letter", {
        [Locale.Russian]: "Питер пишет письмо",
        [Locale.Ukrainian]: "Пітер пише листа",
        [Locale.Dutch]: "Peter schrijft een brief",
        [Locale.French]: "Peter écrit une lettre",
        [Locale.German]: "Peter schreibt einen Brief",
        [Locale.Polish]: "Peter pisze list",
        [Locale.SpanishES]: "Peter escribe una carta",
        [Locale.SpanishLATAM]: "Peter escribe una carta",
        [Locale.PortugueseBR]: "Peter escreve uma carta",
        [Locale.Turkish]: "Peter mektup yazıyor",
        [Locale.Italian]: "Peter scrive una lettera",
        [Locale.Indonesian]: "Peter menulis surat",
        [Locale.Czech]: "Peter píše dopis",
        [Locale.Japanese]: "手紙を書くピーター",
        [Locale.Korean]: "편지 쓰는 피터",
        [Locale.ChineseCN]: "彼得写信",
    }),
    topics: [Topic.Griffins, Topic.Cartoons],
    types: [Type.TextTop, Type.FaceImage],
    width: 1080,
    height: 598,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [
        { id: 0, description: "Peter`s face" },
        { id: 1, description: "Lois`s face" },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/griffinsPeterWriteALetter.png"
                width={1080}
                height={598}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: "25%",
                    left: "38%",
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
                    bottom: "24%",
                    right: "2%",
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
                    height: "20%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5))",
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
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
