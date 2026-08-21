import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruFactory: Template = {
    name: "hucUmaruFactory",
    displayName: buildLocales("Umaru factory", {
        [Locale.Russian]: "Фабрика Умару",
        [Locale.Ukrainian]: "Фабрика Умару",
        [Locale.Dutch]: "Umaru-fabriek",
        [Locale.French]: "Usine d'Umaru",
        [Locale.German]: "Umaru-Fabrik",
        [Locale.Polish]: "Fabryka Umaru",
        [Locale.SpanishES]: "Fábrica de Umaru",
        [Locale.SpanishLATAM]: "Fábrica de Umaru",
        [Locale.PortugueseBR]: "Fábrica da Umaru",
        [Locale.Turkish]: "Umaru Fabrikası",
        [Locale.Italian]: "Fabbrica di Umaru",
        [Locale.Indonesian]: "Pabrik Umaru",
        [Locale.Czech]: "Továrna na Umaru",
        [Locale.Japanese]: "うまる工場",
        [Locale.Korean]: "우마루 공장",
        [Locale.ChineseCN]: "小埋工厂",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 720,
    height: 554,
    animationDuration: 1340,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruFactory.gif"
                width={720}
                height={404}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "150px",
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
                        fontSize: 50,
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
