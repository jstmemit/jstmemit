import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adOsakaPool: Template = {
    name: "adOsakaPool",
    displayName: buildLocales("Osaka pool", {
        [Locale.Russian]: "Осака в бассейне",
        [Locale.Ukrainian]: "Осака в басейні",
        [Locale.Dutch]: "Osaka in het zwembad",
        [Locale.French]: "Osaka à la piscine",
        [Locale.German]: "Osaka im Pool",
        [Locale.Polish]: "Osaka na basenie",
        [Locale.SpanishES]: "Osaka en la piscina",
        [Locale.SpanishLATAM]: "Osaka en la piscina",
        [Locale.PortugueseBR]: "Osaka na piscina",
        [Locale.Turkish]: "Osaka havuzda",
        [Locale.Italian]: "Osaka in piscina",
        [Locale.Indonesian]: "Osaka di kolam renang",
        [Locale.Czech]: "Osaka v bazénu",
        [Locale.Japanese]: "大阪 プール",
        [Locale.Korean]: "오사카 수영장",
        [Locale.ChineseCN]: "大阪游泳池",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 494,
    animationDuration: 3500,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adOsakaPool.gif"
                width={540}
                height={404}
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
                    padding: "15px",
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
