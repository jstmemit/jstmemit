import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataYawning: Template = {
    name: "lsKonataYawning",
    displayName: buildLocales("Konata yawning", {
        [Locale.Russian]: "Коната зевает",
        [Locale.Ukrainian]: "Коната позіхає",
        [Locale.Dutch]: "Geeuwende Konata",
        [Locale.French]: "Konata bâillant",
        [Locale.German]: "Gähnende Konata",
        [Locale.Polish]: "Ziewająca Konata",
        [Locale.SpanishES]: "Konata bostezando",
        [Locale.SpanishLATAM]: "Konata bostezando",
        [Locale.PortugueseBR]: "Konata bocejando",
        [Locale.Turkish]: "Esneyen Konata",
        [Locale.Italian]: "Konata che sbadiglia",
        [Locale.Indonesian]: "Konata menguap",
        [Locale.Czech]: "Zívající Konata",
        [Locale.Japanese]: "あくびをするこなた",
        [Locale.Korean]: "하품하는 코나타",
        [Locale.ChineseCN]: "打哈欠的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 381,
    animationDuration: 2640,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataYawning.gif"
                width={500}
                height={281}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
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
