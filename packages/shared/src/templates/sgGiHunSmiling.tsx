import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sgGiHunSmiling: Template = {
    name: "sgGiHunSmiling",
    displayName: buildLocales("Gi-Hun smiling", {
        [Locale.Russian]: "Улыбающийся Ги Хун",
        [Locale.Ukrainian]: "Усміхнений Гі Хун",
        [Locale.Dutch]: "Glimlachende Gi-Hun",
        [Locale.French]: "Gi-Hun souriant",
        [Locale.German]: "Lächelnder Gi-Hun",
        [Locale.Polish]: "Uśmiechnięty Gi-Hun",
        [Locale.SpanishES]: "Gi-Hun sonriendo",
        [Locale.SpanishLATAM]: "Gi-Hun sonriendo",
        [Locale.PortugueseBR]: "Gi-Hun sorrindo",
        [Locale.Turkish]: "Gülümseyen Gi-Hun",
        [Locale.Italian]: "Gi-Hun che sorride",
        [Locale.Indonesian]: "Gi-Hun tersenyum",
        [Locale.Czech]: "Usmívající se Gi-Hun",
        [Locale.Japanese]: "微笑むギフン",
        [Locale.Korean]: "미소 짓는 기훈",
        [Locale.ChineseCN]: "微笑的基勋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SquidGame],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 554,
    animationDuration: 3000,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sgGiHunSmiling.gif"
                width={498}
                height={454}
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
