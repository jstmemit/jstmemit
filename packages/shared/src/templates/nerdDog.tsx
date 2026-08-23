import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const nerdDog: Template = {
    name: "nerdDog",
    displayName: buildLocales("Nerd dog", {
        [Locale.Russian]: "Собака-ботаник",
        [Locale.Ukrainian]: "Собака-ботан",
        [Locale.Dutch]: "Nerd hond",
        [Locale.French]: "Chien nerd",
        [Locale.German]: "Nerd-Hund",
        [Locale.Polish]: "Pies kujon",
        [Locale.SpanishES]: "Perro nerd",
        [Locale.SpanishLATAM]: "Perro nerd",
        [Locale.PortugueseBR]: "Cachorro nerd",
        [Locale.Turkish]: "İnek köpek",
        [Locale.Italian]: "Cane nerd",
        [Locale.Indonesian]: "Anjing nerd",
        [Locale.Czech]: "Nerd pes",
        [Locale.Japanese]: "オタク犬",
        [Locale.Korean]: "너드 강아지",
        [Locale.ChineseCN]: "书呆子狗",
    }),
    topics: [Topic.Animals],
    types: [Type.TextTopWithBackground, Type.ObjectImage],
    width: 890,
    height: 1085,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [{ id: 0, description: "object" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/nerdDog.png"
                width={890}
                height={1085}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={250}
                height={250}
                style={{
                    position: "absolute",
                    top: 200,
                    left: 100,
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
                    height: "16%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
