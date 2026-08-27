import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const adWhyAreYouSpeakingInEnglish: Template = {
    name: "adWhyAreYouSpeakingInEnglish",
    displayName: buildLocales("Why are you speaking in English", {
        [Locale.Russian]: "Почему ты говоришь по-английски",
        [Locale.Ukrainian]: "Чому ти говориш англійською",
        [Locale.Dutch]: "Waarom spreek je Engels",
        [Locale.French]: "Pourquoi parles-tu anglais",
        [Locale.German]: "Warum sprichst du Englisch",
        [Locale.Polish]: "Dlaczego mówisz po angielsku",
        [Locale.SpanishES]: "Por qué hablas en inglés",
        [Locale.SpanishLATAM]: "Por qué hablas en inglés",
        [Locale.PortugueseBR]: "Por que você está falando em inglês",
        [Locale.Turkish]: "Neden İngilizce konuşuyorsun",
        [Locale.Italian]: "Perché parli in inglese",
        [Locale.Indonesian]: "Mengapa kamu berbicara dalam bahasa Inggris",
        [Locale.Czech]: "Proč mluvíš anglicky",
        [Locale.Japanese]: "なぜ英語で話しているの",
        [Locale.Korean]: "왜 영어로 말하는 거야",
        [Locale.ChineseCN]: "你为什么说英语",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.DefaultText],
    width: 480,
    height: 450,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
    images: [],
    element: ({ texts, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/adWhyAreYouSpeakingInEnglish.png"
                width={480}
                height={360}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
