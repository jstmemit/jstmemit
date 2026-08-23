import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobHappy: Template = {
    name: "spongebobHappy",
    displayName: buildLocales("Spongebob happy", {
        [Locale.Russian]: "Счастливый Губка Боб",
        [Locale.Ukrainian]: "Щасливий Губка Боб",
        [Locale.Dutch]: "Spongebob blij",
        [Locale.French]: "Bob l'éponge heureux",
        [Locale.German]: "Spongebob glücklich",
        [Locale.Polish]: "Szczęśliwy SpongeBob",
        [Locale.SpanishES]: "Bob Esponja feliz",
        [Locale.SpanishLATAM]: "Bob Esponja feliz",
        [Locale.PortugueseBR]: "Bob Esponja feliz",
        [Locale.Turkish]: "Mutlu SüngerBob",
        [Locale.Italian]: "SpongeBob felice",
        [Locale.Indonesian]: "Spongebob bahagia",
        [Locale.Czech]: "Šťastný Spongebob",
        [Locale.Japanese]: "喜ぶスポンジ・ボブ",
        [Locale.Korean]: "행복한 스폰지밥",
        [Locale.ChineseCN]: "快乐的海绵宝宝",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.FaceImage, Type.TextBottom],
    width: 1199,
    height: 918,
    texts: [{ id: 0, description: "bottom text", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Squidward's face" }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongebobhappy.png"
                width={1199}
                height={918}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={260}
                height={260}
                style={{
                    position: "absolute",
                    top: 140,
                    left: 150,
                    objectFit: "cover",
                    borderRadius: "100%",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
