import type { Template } from "#/models/Template.ts";
import type { TemplateProps } from "#/models/TemplateProps.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const iInterviewedAnimals: Template = {
    name: "iInterviewedAnimals",
    displayName: buildLocales("I interviewed animals", {
        [Locale.Russian]: "Я взял интервью у животных",
        [Locale.Ukrainian]: "Я взяв інтерв'ю у тварин",
        [Locale.Dutch]: "Ik interviewde dieren",
        [Locale.French]: "J'ai interviewé des animaux",
        [Locale.German]: "Ich habe Tiere interviewt",
        [Locale.Polish]: "Przeprowadziłem wywiad ze zwierzętami",
        [Locale.SpanishES]: "Entrevisté a animales",
        [Locale.SpanishLATAM]: "Entrevisté a animales",
        [Locale.PortugueseBR]: "Eu entrevistei animais",
        [Locale.Turkish]: "Hayvanlarla röportaj yaptım",
        [Locale.Italian]: "Ho intervistato degli animali",
        [Locale.Indonesian]: "Saya mewawancarai hewan",
        [Locale.Czech]: "Udělal jsem rozhovor se zvířaty",
        [Locale.Japanese]: "動物にインタビューしました",
        [Locale.Korean]: "동물들과 인터뷰했습니다",
        [Locale.ChineseCN]: "我采访了动物",
    }),
    topics: [Topic.YouTube, Topic.Animals],
    types: [Type.DefaultText, Type.ObjectImage, Type.TextRight],
    width: 621,
    height: 426,
    texts: [{ id: 0, description: "what the animal says", minLength: 1, maxLength: 2 }],
    images: [{ id: 0, description: "the thumbnail subject" }],
    element: ({ texts, images, font }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
            }}
        >
            <img
                src={images[0]}
                width={621}
                height={340}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
            />
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/iInterviewedAnimals.png"
                width={621}
                height={426}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 50,
                    bottom: 150,
                    width: "25%",
                    height: "33%",
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: font,
                    fontSize: 40,
                    lineHeight: 1.05,
                    paddingBottom: "0.2em",
                    color: "#ffffff",
                    wordBreak: "break-word",
                    textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                }}
            >
                "{texts[0]}"
            </div>
        </div>
    ),
};
