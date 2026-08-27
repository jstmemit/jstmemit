import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const willSmith: Template = {
    name: "willSmith",
    displayName: buildLocales("Will Smith", {
        [Locale.Russian]: "Уилл Смит",
        [Locale.Ukrainian]: "Вілл Сміт",
        [Locale.Dutch]: "Will Smith",
        [Locale.French]: "Will Smith",
        [Locale.German]: "Will Smith",
        [Locale.Polish]: "Will Smith",
        [Locale.SpanishES]: "Will Smith",
        [Locale.SpanishLATAM]: "Will Smith",
        [Locale.PortugueseBR]: "Will Smith",
        [Locale.Turkish]: "Will Smith",
        [Locale.Italian]: "Will Smith",
        [Locale.Indonesian]: "Will Smith",
        [Locale.Czech]: "Will Smith",
        [Locale.Japanese]: "ウィル・スミス",
        [Locale.Korean]: "윌 스미스",
        [Locale.ChineseCN]: "威尔·史密斯",
    }),
    topics: [Topic.Movies, Topic.Reaction],
    types: [Type.FaceImage, Type.TextRight],
    width: 891,
    height: 891,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 20 }],
    images: [{ id: 0, description: "person`s face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/willSmith.jpg"
                width={891}
                height={891}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={200}
                height={200}
                style={{
                    position: "absolute",
                    top: 150,
                    left: 100,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "45%",
                    height: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 13,
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
