import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lhShiroeGlassesPush: Template = {
    name: "lhShiroeGlassesPush",
    displayName: buildLocales("Shiroe pushing up his glasses", {
        [Locale.Russian]: "Сироэ поправляет очки",
        [Locale.Ukrainian]: "Сірое поправляє окуляри",
        [Locale.Dutch]: "Shiroe duwt zijn bril omhoog",
        [Locale.French]: "Shiroe remontant ses lunettes",
        [Locale.German]: "Shiroe rückt seine Brille zurecht",
        [Locale.Polish]: "Shiroe poprawiający okulary",
        [Locale.SpanishES]: "Shiroe ajustándose las gafas",
        [Locale.SpanishLATAM]: "Shiroe ajustándose los lentes",
        [Locale.PortugueseBR]: "Shiroe ajeitando os óculos",
        [Locale.Turkish]: "Gözlüğünü düzelten Shiroe",
        [Locale.Italian]: "Shiroe che si sistema gli occhiali",
        [Locale.Indonesian]: "Shiroe membetulkan kacamatanya",
        [Locale.Czech]: "Shiroe si upravuje brýle",
        [Locale.Japanese]: "メガネを押し上げるシロエ",
        [Locale.Korean]: "안경을 치켜올리는 시로에",
        [Locale.ChineseCN]: "推眼镜的城惠",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LogHorizon],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 640,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lhShiroeGlassesPush.gif"
                width={480}
                height={270}
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
