import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const noragamiYatoShocked: Template = {
    name: "noragamiYatoShocked",
    displayName: buildLocales("Yato shocked", {
        [Locale.Russian]: "Шокированный Ято",
        [Locale.Ukrainian]: "Шокований Ято",
        [Locale.Dutch]: "Geschokte Yato",
        [Locale.French]: "Yato choqué",
        [Locale.German]: "Geschockter Yato",
        [Locale.Polish]: "Zszokowany Yato",
        [Locale.SpanishES]: "Yato en shock",
        [Locale.SpanishLATAM]: "Yato en shock",
        [Locale.PortugueseBR]: "Yato chocado",
        [Locale.Turkish]: "Şok olmuş Yato",
        [Locale.Italian]: "Yato scioccato",
        [Locale.Indonesian]: "Yato terkejut",
        [Locale.Czech]: "Šokovaný Yato",
        [Locale.Japanese]: "ショックを受ける夜ト",
        [Locale.Korean]: "충격받은 야토",
        [Locale.ChineseCN]: "震惊的夜斗",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Noragami],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 378,
    animationDuration: 3400,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/noragamiYatoShocked.gif"
                width={500}
                height={278}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "100px",
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
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
