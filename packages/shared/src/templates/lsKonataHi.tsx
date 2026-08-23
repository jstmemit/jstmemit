import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lsKonataHi: Template = {
    name: "lsKonataHi",
    displayName: buildLocales("Konata greeting", {
        [Locale.Russian]: "Коната здоровается",
        [Locale.Ukrainian]: "Коната вітається",
        [Locale.Dutch]: "Begroetende Konata",
        [Locale.French]: "Konata saluant",
        [Locale.German]: "Grüßende Konata",
        [Locale.Polish]: "Witająca się Konata",
        [Locale.SpanishES]: "Konata saludando",
        [Locale.SpanishLATAM]: "Konata saludando",
        [Locale.PortugueseBR]: "Konata cumprimentando",
        [Locale.Turkish]: "Selam veren Konata",
        [Locale.Italian]: "Konata che saluta",
        [Locale.Indonesian]: "Konata menyapa",
        [Locale.Czech]: "Zdravící Konata",
        [Locale.Japanese]: "挨拶するこなた",
        [Locale.Korean]: "인사하는 코나타",
        [Locale.ChineseCN]: "打招呼的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 1100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataHi.gif"
                width={500}
                height={281}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
