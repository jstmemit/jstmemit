import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const blendsMaikaPlusEyes: Template = {
    name: "blendsMaikaPlusEyes",
    displayName: buildLocales("Maika plus eyes", {
        [Locale.Russian]: "Майка с глазами-плюсиками",
        [Locale.Ukrainian]: "Майка з очима-плюсиками",
        [Locale.Dutch]: "Maika met plus-ogen",
        [Locale.French]: "Maika avec des yeux en croix",
        [Locale.German]: "Maika mit Plus-Augen",
        [Locale.Polish]: "Maika z oczami w kształcie plusa",
        [Locale.SpanishES]: "Maika con ojos de cruz",
        [Locale.SpanishLATAM]: "Maika con ojos de cruz",
        [Locale.PortugueseBR]: "Maika com olhos em cruz",
        [Locale.Turkish]: "Maika artı gözlerle",
        [Locale.Italian]: "Maika con occhi a croce",
        [Locale.Indonesian]: "Maika dengan mata plus",
        [Locale.Czech]: "Maika s očima ve tvaru plus",
        [Locale.Japanese]: "マイカのプラスアイ",
        [Locale.Korean]: "마이카 플러스 눈",
        [Locale.ChineseCN]: "麻衣花十字眼",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 675,
    height: 465,
    animationDuration: 1980,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaPlusEyes.webp"
                width={675}
                height={375}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
