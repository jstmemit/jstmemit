import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dnNearShocked: Template = {
    name: "dnNearShocked",
    displayName: buildLocales("Shocked Near", {
        [Locale.Russian]: "Шокированный Ниа",
        [Locale.Ukrainian]: "Шокований Ніа",
        [Locale.Dutch]: "Geschokte Near",
        [Locale.French]: "Near choqué",
        [Locale.German]: "Schockierter Near",
        [Locale.Polish]: "Zszokowany Near",
        [Locale.SpanishES]: "Near en shock",
        [Locale.SpanishLATAM]: "Near en shock",
        [Locale.PortugueseBR]: "Near chocado",
        [Locale.Turkish]: "Şoke olmuş Near",
        [Locale.Italian]: "Near scioccato",
        [Locale.Indonesian]: "Near terkejut",
        [Locale.Czech]: "Šokovaný Near",
        [Locale.Japanese]: "ショックを受けたニア",
        [Locale.Korean]: "충격받은 니아",
        [Locale.ChineseCN]: "震惊的尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DeathNote],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 402,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dnNearShocked.gif"
                width={500}
                height={312}
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
