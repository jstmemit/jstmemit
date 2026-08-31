import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const nichijouSakamotoStruggling: Template = {
    name: "nichijouSakamotoStruggling",
    displayName: buildLocales("Sakamoto struggling", {
        [Locale.Russian]: "Вырывающийся Сакамото",
        [Locale.Ukrainian]: "Сакамото, що пручається",
        [Locale.Dutch]: "Tegenstribbelende Sakamoto",
        [Locale.French]: "Sakamoto se débattant",
        [Locale.German]: "Zappelnder Sakamoto",
        [Locale.Polish]: "Szamoczący się Sakamoto",
        [Locale.SpanishES]: "Sakamoto forcejeando",
        [Locale.SpanishLATAM]: "Sakamoto forcejeando",
        [Locale.PortugueseBR]: "Sakamoto se debatendo",
        [Locale.Turkish]: "Çabalayan Sakamoto",
        [Locale.Italian]: "Sakamoto che si dimena",
        [Locale.Indonesian]: "Sakamoto meronta",
        [Locale.Czech]: "Zpouzející se Sakamoto",
        [Locale.Japanese]: "もがく阪本",
        [Locale.Korean]: "발버둥치는 사카모토",
        [Locale.ChineseCN]: "挣扎的阪本",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Nichijou],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 385,
    animationDuration: 1040,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/nichijouSakamotoStruggling.gif"
                width={500}
                height={285}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
