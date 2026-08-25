import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaGintokiDisgusted: Template = {
    name: "gintamaGintokiDisgusted",
    displayName: buildLocales("Disgusted Gintoki", {
        [Locale.Russian]: "Гинтоки с отвращением",
        [Locale.Ukrainian]: "Гінтокі з огидою",
        [Locale.Dutch]: "Walgende Gintoki",
        [Locale.French]: "Gintoki dégoûté",
        [Locale.German]: "Angeekelter Gintoki",
        [Locale.Polish]: "Zdegustowany Gintoki",
        [Locale.SpanishES]: "Gintoki asqueado",
        [Locale.SpanishLATAM]: "Gintoki asqueado",
        [Locale.PortugueseBR]: "Gintoki com nojo",
        [Locale.Turkish]: "İğrenen Gintoki",
        [Locale.Italian]: "Gintoki disgustato",
        [Locale.Indonesian]: "Gintoki jijik",
        [Locale.Czech]: "Znechucený Gintoki",
        [Locale.Japanese]: "ドン引きする銀時",
        [Locale.Korean]: "질색하는 긴토키",
        [Locale.ChineseCN]: "嫌弃的银时",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 450,
    height: 342,
    animationDuration: 2200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaGintokiDisgusted.gif"
                width={450}
                height={252}
                style={{ position: "absolute", top: 0, left: 0 }}
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
