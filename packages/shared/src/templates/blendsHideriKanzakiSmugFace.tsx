import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsHideriKanzakiSmugFace: Template = {
    name: "blendsHideriKanzakiSmugFace",
    displayName: buildLocales("Hideri Kanzaki smug face", {
        [Locale.Russian]: "Хидери Канзаки с самодовольным лицом",
        [Locale.Ukrainian]: "Хідері Канзакі з самовдоволеним обличчям",
        [Locale.Dutch]: "Hideri Kanzaki met zelfvoldane blik",
        [Locale.French]: "Hideri Kanzaki avec un air satisfait",
        [Locale.German]: "Hideri Kanzaki mit selbstgefälligem Gesicht",
        [Locale.Polish]: "Hideri Kanzaki z zadowoloną z siebie miną",
        [Locale.SpanishES]: "Hideri Kanzaki con cara de suficiencia",
        [Locale.SpanishLATAM]: "Hideri Kanzaki con cara de suficiencia",
        [Locale.PortugueseBR]: "Hideri Kanzaki com cara convencida",
        [Locale.Turkish]: "Hideri Kanzaki kendini beğenmiş yüz ifadesiyle",
        [Locale.Italian]: "Hideri Kanzaki con faccia compiaciuta",
        [Locale.Indonesian]: "Hideri Kanzaki dengan wajah sombong",
        [Locale.Czech]: "Hideri Kanzaki se samolibým výrazem",
        [Locale.Japanese]: "神崎ヒデリのドヤ顔",
        [Locale.Korean]: "칸자키 히데리 우쭐한 표정",
        [Locale.ChineseCN]: "神崎绯多莉得意的表情",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextLeftWithBackground],
    width: 1440,
    height: 646,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsHideriKanzakiSmugFace.png"
                width={720}
                height={646}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
