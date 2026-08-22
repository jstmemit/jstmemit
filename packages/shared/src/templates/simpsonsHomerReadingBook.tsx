import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsHomerReadingBook: Template = {
    name: "simpsonsHomerReadingBook",
    displayName: buildLocales("Homer reading book", {
        [Locale.Russian]: "Гомер читает книгу",
        [Locale.Ukrainian]: "Гомер читає книгу",
        [Locale.Dutch]: "Homer leest boek",
        [Locale.French]: "Homer lisant un livre",
        [Locale.German]: "Homer liest Buch",
        [Locale.Polish]: "Homer czyta książkę",
        [Locale.SpanishES]: "Homer leyendo un libro",
        [Locale.SpanishLATAM]: "Homero leyendo un libro",
        [Locale.PortugueseBR]: "Homer lendo livro",
        [Locale.Turkish]: "Homer kitap okuyor",
        [Locale.Italian]: "Homer che legge un libro",
        [Locale.Indonesian]: "Homer membaca buku",
        [Locale.Czech]: "Homer čte knihu",
        [Locale.Japanese]: "本を読むホーマー",
        [Locale.Korean]: "책 읽는 호머",
        [Locale.ChineseCN]: "霍默看书",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons],
    types: [Type.FaceImage, Type.TextTopWithBackground, Type.DefaultText],
    width: 400,
    height: 500,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 6 }],
    images: [{ id: 0, description: "face of disabled man" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsHomerReadingBook.jpg"
                width={400}
                height={400}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={75}
                height={75}
                style={{
                    position: "absolute",
                    bottom: 90,
                    right: 90,
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
                        fontFamily: "Comic Sans MS",
                        fontSize: 35,
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
