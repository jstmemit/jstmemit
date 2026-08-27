import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaShiroganeScared: Template = {
    name: "kaguyasamaShiroganeScared",
    displayName: buildLocales("Scared Shirogane", {
        [Locale.Russian]: "Напуганный Сироганэ",
        [Locale.Ukrainian]: "Наляканий Шірогане",
        [Locale.Dutch]: "Bange Shirogane",
        [Locale.French]: "Shirogane effrayé",
        [Locale.German]: "Verängstigter Shirogane",
        [Locale.Polish]: "Przestraszony Shirogane",
        [Locale.SpanishES]: "Shirogane asustado",
        [Locale.SpanishLATAM]: "Shirogane asustado",
        [Locale.PortugueseBR]: "Shirogane assustado",
        [Locale.Turkish]: "Korkmuş Shirogane",
        [Locale.Italian]: "Shirogane spaventato",
        [Locale.Indonesian]: "Shirogane ketakutan",
        [Locale.Czech]: "Vyděšený Shirogane",
        [Locale.Japanese]: "怯える白銀",
        [Locale.Korean]: "겁먹은 시로가네",
        [Locale.ChineseCN]: "害怕的白银",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 640,
    height: 450,
    animationDuration: 1170,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaShiroganeScared.gif"
                width={640}
                height={360}
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
                        fontSize: fontSize(texts[0]),
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
