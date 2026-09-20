import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenCold1: Template = {
    name: "frierenCold1",
    displayName: buildLocales("Cold Frieren 1", {
        [Locale.Russian]: "Замерзшая Фрирен 1",
        [Locale.Ukrainian]: "Змерзла Фрірен 1",
        [Locale.Dutch]: "Koude Frieren 1",
        [Locale.French]: "Frieren qui a froid 1",
        [Locale.German]: "Frierende Frieren 1",
        [Locale.Polish]: "Zmarznięta Frieren 1",
        [Locale.SpanishES]: "Frieren con frío 1",
        [Locale.SpanishLATAM]: "Frieren con frío 1",
        [Locale.PortugueseBR]: "Frieren com frio 1",
        [Locale.Turkish]: "Üşüyen Frieren 1",
        [Locale.Italian]: "Frieren infreddolita 1",
        [Locale.Indonesian]: "Frieren kedinginan 1",
        [Locale.Czech]: "Zmrzlá Frieren 1",
        [Locale.Japanese]: "寒がるフリーレン 1",
        [Locale.Korean]: "추워하는 프리렌 1",
        [Locale.ChineseCN]: "受冻的芙莉莲 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextRightWithBackground],
    width: 992,
    height: 480,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 11 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenCold1.png"
                width={496}
                height={480}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
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
