import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const tqqNinoAndMikuLookingAtYou: Template = {
    name: "tqqNinoAndMikuLookingAtYou",
    displayName: buildLocales("Nino and Miku looking at you", {
        [Locale.Russian]: "Нино и Мику смотрят на тебя",
        [Locale.Ukrainian]: "Ніно та Міку дивляться на тебе",
        [Locale.Dutch]: "Nino en Miku kijken naar jou",
        [Locale.French]: "Nino et Miku te regardent",
        [Locale.German]: "Nino und Miku schauen dich an",
        [Locale.Polish]: "Nino i Miku patrzą na ciebie",
        [Locale.SpanishES]: "Nino y Miku mirándote",
        [Locale.SpanishLATAM]: "Nino y Miku mirándote",
        [Locale.PortugueseBR]: "Nino e Miku olhando para você",
        [Locale.Turkish]: "Sana bakan Nino ve Miku",
        [Locale.Italian]: "Nino e Miku che ti guardano",
        [Locale.Indonesian]: "Nino dan Miku menatapmu",
        [Locale.Czech]: "Nino a Miku se na tebe dívají",
        [Locale.Japanese]: "あなたを見つめる二乃と三玖",
        [Locale.Korean]: "너를 바라보는 니노와 미쿠",
        [Locale.ChineseCN]: "二乃和三玖看着你",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground],
    width: 640,
    height: 428,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/tqqNinoAndMikuLookingAtYou.png"
                width={640}
                height={358}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
