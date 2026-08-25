import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const barakamonNaruSlap: Template = {
    name: "barakamonNaruSlap",
    displayName: buildLocales("Naru slap", {
        [Locale.Russian]: "Пощечина Нару",
        [Locale.Ukrainian]: "Ляпас Нару",
        [Locale.Dutch]: "Klap van Naru",
        [Locale.French]: "Gifle de Naru",
        [Locale.German]: "Narus Ohrfeige",
        [Locale.Polish]: "Plaskacz Naru",
        [Locale.SpanishES]: "Bofetada de Naru",
        [Locale.SpanishLATAM]: "Cachetada de Naru",
        [Locale.PortugueseBR]: "Tapa da Naru",
        [Locale.Turkish]: "Naru tokadı",
        [Locale.Italian]: "Schiaffo di Naru",
        [Locale.Indonesian]: "Tamparan Naru",
        [Locale.Czech]: "Facka od Naru",
        [Locale.Japanese]: "なるのビンタ",
        [Locale.Korean]: "나루의 따귀",
        [Locale.ChineseCN]: "奈瑠的一巴掌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Barakamon],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 394,
    animationDuration: 3080,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/barakamonNaruSlap.gif"
                width={540}
                height={304}
                style={{ position: "absolute", bottom: 0, left: 0 }}
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
