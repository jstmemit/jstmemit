import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiYatoSmile: Template = {
    name: "noragamiYatoSmile",
    displayName: buildLocales("Yato smile", {
        [Locale.Russian]: "Улыбка Ято",
        [Locale.Ukrainian]: "Посмішка Ято",
        [Locale.Dutch]: "Yato glimlach",
        [Locale.French]: "Sourire de Yato",
        [Locale.German]: "Yatos Lächeln",
        [Locale.Polish]: "Uśmiech Yato",
        [Locale.SpanishES]: "Sonrisa de Yato",
        [Locale.SpanishLATAM]: "Sonrisa de Yato",
        [Locale.PortugueseBR]: "Sorriso de Yato",
        [Locale.Turkish]: "Yato gülümsemesi",
        [Locale.Italian]: "Sorriso di Yato",
        [Locale.Indonesian]: "Senyum Yato",
        [Locale.Czech]: "Yatův úsměv",
        [Locale.Japanese]: "夜トの笑顔",
        [Locale.Korean]: "야토의 미소",
        [Locale.ChineseCN]: "夜斗的微笑",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 378,
    animationDuration: 1330,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/norogamiYatoSmile.gif"
                width={500}
                height={278}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
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
