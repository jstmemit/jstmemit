import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const jkSukunaTransformation: Template = {
    name: "jkSukunaTransformation",
    displayName: buildLocales("Sukuna's transformation", {
        [Locale.Russian]: "Превращение Сукуны",
        [Locale.Ukrainian]: "Перетворення Сукуни",
        [Locale.Dutch]: "Sukuna's transformatie",
        [Locale.French]: "Transformation de Sukuna",
        [Locale.German]: "Sukunas Verwandlung",
        [Locale.Polish]: "Przemiana Sukuny",
        [Locale.SpanishES]: "Transformación de Sukuna",
        [Locale.SpanishLATAM]: "Transformación de Sukuna",
        [Locale.PortugueseBR]: "Transformação do Sukuna",
        [Locale.Turkish]: "Sukuna'nın dönüşümü",
        [Locale.Italian]: "Trasformazione di Sukuna",
        [Locale.Indonesian]: "Transformasi Sukuna",
        [Locale.Czech]: "Proměna Sukuny",
        [Locale.Japanese]: "宿儺の変身",
        [Locale.Korean]: "스쿠나의 변신",
        [Locale.ChineseCN]: "宿傩变身",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 480,
    height: 360,
    animationDuration: 3740,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/jkSukunaTransformation.gif"
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
