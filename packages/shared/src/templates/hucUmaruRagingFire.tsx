import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruRagingFire: Template = {
    name: "hucUmaruRagingFire",
    displayName: buildLocales("Umaru raging in fire", {
        [Locale.Russian]: "Разъяренная Умару в огне",
        [Locale.Ukrainian]: "Розлючена Умару у вогні",
        [Locale.Dutch]: "Woedende Umaru in het vuur",
        [Locale.French]: "Umaru enragée dans les flammes",
        [Locale.German]: "Wütende Umaru im Feuer",
        [Locale.Polish]: "Wściekła Umaru w ogniu",
        [Locale.SpanishES]: "Umaru enfurecida en llamas",
        [Locale.SpanishLATAM]: "Umaru enfurecida en llamas",
        [Locale.PortugueseBR]: "Umaru furiosa em chamas",
        [Locale.Turkish]: "Alevler içinde öfkeli Umaru",
        [Locale.Italian]: "Umaru furiosa tra le fiamme",
        [Locale.Indonesian]: "Umaru mengamuk dalam api",
        [Locale.Czech]: "Zuřící Umaru v plamenech",
        [Locale.Japanese]: "炎の中で激怒するうまる",
        [Locale.Korean]: "불타오르며 분노하는 우마루",
        [Locale.ChineseCN]: "怒火中烧的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 840,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruRagingFire.gif"
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
