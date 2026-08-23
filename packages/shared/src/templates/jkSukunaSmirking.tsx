import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkSukunaSmirking: Template = {
    name: "jkSukunaSmirking",
    displayName: buildLocales("Sukuna smirking", {
        [Locale.Russian]: "Сукуна ухмыляется",
        [Locale.Ukrainian]: "Ухмилка Сукуни",
        [Locale.Dutch]: "Grijnzende Sukuna",
        [Locale.French]: "Sourire narquois de Sukuna",
        [Locale.German]: "Grinsender Sukuna",
        [Locale.Polish]: "Uśmiechający się złośliwie Sukuna",
        [Locale.SpanishES]: "Sukuna con sonrisa burlona",
        [Locale.SpanishLATAM]: "Sukuna con sonrisa burlona",
        [Locale.PortugueseBR]: "Sukuna com sorriso sarcástico",
        [Locale.Turkish]: "Sırıtan Sukuna",
        [Locale.Italian]: "Sukuna con un sorrisetto",
        [Locale.Indonesian]: "Sukuna menyeringai",
        [Locale.Czech]: "Ušklíbající se Sukuna",
        [Locale.Japanese]: "ニヤリと笑う宿儺",
        [Locale.Korean]: "썩소 짓는 스쿠나",
        [Locale.ChineseCN]: "坏笑的宿傩",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 370,
    animationDuration: 1300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/jkSukunaSmirking.gif"
                width={498}
                height={280}
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
