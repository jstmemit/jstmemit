import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const tqqItsukiDizzy: Template = {
    name: "tqqItsukiDizzy",
    displayName: buildLocales("Itsuki dizzy", {
        [Locale.Russian]: "Ицуки с головокружением",
        [Locale.Ukrainian]: "Іцукі із запамороченням",
        [Locale.Dutch]: "Duizelige Itsuki",
        [Locale.French]: "Itsuki étourdie",
        [Locale.German]: "Schwindelige Itsuki",
        [Locale.Polish]: "Oszołomiona Itsuki",
        [Locale.SpanishES]: "Itsuki mareada",
        [Locale.SpanishLATAM]: "Itsuki mareada",
        [Locale.PortugueseBR]: "Itsuki tonta",
        [Locale.Turkish]: "Başı dönen Itsuki",
        [Locale.Italian]: "Itsuki con le vertigini",
        [Locale.Indonesian]: "Itsuki pusing",
        [Locale.Czech]: "Omámená Itsuki",
        [Locale.Japanese]: "目を回す五月",
        [Locale.Korean]: "어지러운 이츠키",
        [Locale.ChineseCN]: "晕头转向的五月",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.TheQuintessentialQuintuplets],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 640,
    height: 490,
    animationDuration: 4200,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/tqqItsukiDizzy.gif"
                width={640}
                height={360}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "130px",
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
