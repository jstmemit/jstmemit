import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const umDaiwaAndVodkaCheekPinch: Template = {
    name: "umDaiwaAndVodkaCheekPinch",
    displayName: buildLocales("Daiwa and Vodka cheek pinch", {
        [Locale.Russian]: "Дайва и Водка щипают за щеки",
        [Locale.Ukrainian]: "Дайва та Водка щипають за щоки",
        [Locale.Dutch]: "Daiwa en Vodka knijpen in wangen",
        [Locale.French]: "Daiwa et Vodka se pincent les joues",
        [Locale.German]: "Daiwa und Vodka Wangenkneifen",
        [Locale.Polish]: "Daiwa i Vodka szczypią się w policzki",
        [Locale.SpanishES]: "Daiwa y Vodka pellizcándose las mejillas",
        [Locale.SpanishLATAM]: "Daiwa y Vodka pellizcándose las mejillas",
        [Locale.PortugueseBR]: "Daiwa e Vodka beliscando as bochechas",
        [Locale.Turkish]: "Daiwa ve Vodka yanak sıkıştırma",
        [Locale.Italian]: "Daiwa e Vodka che si pizzicano le guance",
        [Locale.Indonesian]: "Daiwa dan Vodka saling mencubit pipi",
        [Locale.Czech]: "Daiwa a Vodka štípání do tváří",
        [Locale.Japanese]: "ダイワとウオッカの頬つねり",
        [Locale.Korean]: "다이와와 보드카 볼 꼬집기",
        [Locale.ChineseCN]: "大和与伏特加捏脸颊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 2550,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/umDaiwaAndVodkaCheekPinch.gif"
                width={480}
                height={270}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
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
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
