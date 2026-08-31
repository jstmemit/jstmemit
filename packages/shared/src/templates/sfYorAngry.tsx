import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfYorAngry: Template = {
    name: "sfYorAngry",
    displayName: buildLocales("Yor angry", {
        [Locale.Russian]: "Злая Йор",
        [Locale.Ukrainian]: "Зла Йор",
        [Locale.Dutch]: "Boze Yor",
        [Locale.French]: "Yor en colère",
        [Locale.German]: "Wütende Yor",
        [Locale.Polish]: "Zła Yor",
        [Locale.SpanishES]: "Yor enfadada",
        [Locale.SpanishLATAM]: "Yor enojada",
        [Locale.PortugueseBR]: "Yor brava",
        [Locale.Turkish]: "Kızgın Yor",
        [Locale.Italian]: "Yor arrabbiata",
        [Locale.Indonesian]: "Yor marah",
        [Locale.Czech]: "Naštvaná Yor",
        [Locale.Japanese]: "怒るヨル",
        [Locale.Korean]: "화난 요르",
        [Locale.ChineseCN]: "生气的约尔",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 666,
    height: 466,
    animationDuration: 1020,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfYorAngry.webp"
                width={666}
                height={336}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
