import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lsKonataApologizing: Template = {
    name: "lsKonataApologizing",
    displayName: buildLocales("Konata apologizing", {
        [Locale.Russian]: "Извиняющаяся Коната",
        [Locale.Ukrainian]: "Коната вибачається",
        [Locale.Dutch]: "Zich verontschuldigende Konata",
        [Locale.French]: "Konata qui s'excuse",
        [Locale.German]: "Sich entschuldigende Konata",
        [Locale.Polish]: "Przepraszająca Konata",
        [Locale.SpanishES]: "Konata disculpándose",
        [Locale.SpanishLATAM]: "Konata disculpándose",
        [Locale.PortugueseBR]: "Konata se desculpando",
        [Locale.Turkish]: "Özür dileyen Konata",
        [Locale.Italian]: "Konata che si scusa",
        [Locale.Indonesian]: "Konata meminta maaf",
        [Locale.Czech]: "Omlouvající se Konata",
        [Locale.Japanese]: "謝るこなた",
        [Locale.Korean]: "사과하는 코나타",
        [Locale.ChineseCN]: "道歉的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 442,
    animationDuration: 600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataApologizing.gif"
                width={500}
                height={352}
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
