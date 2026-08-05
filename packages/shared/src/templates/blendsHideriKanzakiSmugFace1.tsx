import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsHideriKanzakiSmugFace1: Template = {
    name: "blendsHideriKanzakiSmugFace1",
    displayName: buildLocales("Hideri Kanzaki smug face 1", {
        [Locale.Russian]: "Хидери Канзаки с самодовольным лицом 1",
        [Locale.Ukrainian]: "Хідері Канзакі з самовдоволеним обличчям 1",
        [Locale.Dutch]: "Hideri Kanzaki met zelfvoldane blik 1",
        [Locale.French]: "Hideri Kanzaki avec un air satisfait 1",
        [Locale.German]: "Hideri Kanzaki mit selbstgefälligem Gesicht 1",
        [Locale.Polish]: "Hideri Kanzaki z zadowoloną z siebie miną 1",
        [Locale.SpanishES]: "Hideri Kanzaki con cara de suficiencia 1",
        [Locale.SpanishLATAM]: "Hideri Kanzaki con cara de suficiencia 1",
        [Locale.PortugueseBR]: "Hideri Kanzaki com cara convencida 1",
        [Locale.Turkish]: "Hideri Kanzaki kendini beğenmiş yüz ifadesiyle 1",
        [Locale.Italian]: "Hideri Kanzaki con faccia compiaciuta 1",
        [Locale.Indonesian]: "Hideri Kanzaki dengan wajah sombong 1",
        [Locale.Czech]: "Hideri Kanzaki se samolibým výrazem 1",
        [Locale.Japanese]: "神崎ヒデリのドヤ顔 1",
        [Locale.Korean]: "칸자키 히데리 우쭐한 표정 1",
        [Locale.ChineseCN]: "神崎绯多莉得意的表情 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1000,
    height: 562,
    animationDuration: 4700,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsHideriKanzakiSmugFace1.gif"
                width={500}
                height={562}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 60,
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
