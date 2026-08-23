import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiCool: Template = {
    name: "gintamaGintokiCool",
    displayName: buildLocales("Cool Gintoki", {
        [Locale.Russian]: "Крутой Гинтоки",
        [Locale.Ukrainian]: "Крутий Гінтокі",
        [Locale.Dutch]: "Coole Gintoki",
        [Locale.French]: "Gintoki cool",
        [Locale.German]: "Cooler Gintoki",
        [Locale.Polish]: "Fajny Gintoki",
        [Locale.SpanishES]: "Gintoki genial",
        [Locale.SpanishLATAM]: "Gintoki genial",
        [Locale.PortugueseBR]: "Gintoki legal",
        [Locale.Turkish]: "Havalı Gintoki",
        [Locale.Italian]: "Gintoki figo",
        [Locale.Indonesian]: "Gintoki keren",
        [Locale.Czech]: "Skvělý Gintoki",
        [Locale.Japanese]: "かっこいい銀時",
        [Locale.Korean]: "멋진 긴토키",
        [Locale.ChineseCN]: "帅气的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 1890,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiCool.gif"
                width={500}
                height={281}
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
