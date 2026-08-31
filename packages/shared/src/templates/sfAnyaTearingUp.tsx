import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaTearingUp: Template = {
    name: "sfAnyaTearingUp",
    displayName: buildLocales("Anya tearing up", {
        [Locale.Russian]: "Аня со слезами на глазах",
        [Locale.Ukrainian]: "Аня зі сльозами на очах",
        [Locale.Dutch]: "Anya in tranen",
        [Locale.French]: "Anya en larmes",
        [Locale.German]: "Anya in Tränen",
        [Locale.Polish]: "Anya ze łzami w oczach",
        [Locale.SpanishES]: "Anya con lágrimas",
        [Locale.SpanishLATAM]: "Anya con lágrimas",
        [Locale.PortugueseBR]: "Anya com lágrimas",
        [Locale.Turkish]: "Gözleri dolan Anya",
        [Locale.Italian]: "Anya in lacrime",
        [Locale.Indonesian]: "Anya berkaca-kaca",
        [Locale.Czech]: "Anya se slzami v očích",
        [Locale.Japanese]: "涙ぐむアーニャ",
        [Locale.Korean]: "눈물 글썽이는 아냐",
        [Locale.ChineseCN]: "眼泪汪汪的阿尼亚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 540,
    height: 510,
    animationDuration: 1100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaTearingUp.gif"
                width={540}
                height={410}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
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
