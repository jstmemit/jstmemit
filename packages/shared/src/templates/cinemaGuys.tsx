import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const cinemaGuys: Template = {
    name: "cinemaGuys",
    displayName: buildLocales("Cinema guys", {
        [Locale.Russian]: "Парни в кино",
        [Locale.Ukrainian]: "Хлопці в кіно",
        [Locale.Dutch]: "Jongens in de bioscoop",
        [Locale.French]: "Gars au cinéma",
        [Locale.German]: "Jungs im Kino",
        [Locale.Polish]: "Chłopaki w kinie",
        [Locale.SpanishES]: "Chicos en el cine",
        [Locale.SpanishLATAM]: "Chicos en el cine",
        [Locale.PortugueseBR]: "Caras no cinema",
        [Locale.Turkish]: "Sinemadaki adamlar",
        [Locale.Italian]: "Ragazzi al cinema",
        [Locale.Indonesian]: "Cowok-cowok di bioskop",
        [Locale.Czech]: "Kluci v kině",
        [Locale.Japanese]: "映画館の男たち",
        [Locale.Korean]: "영화관 남자들",
        [Locale.ChineseCN]: "电影院的家伙们",
    }),
    topics: [Topic.Reaction, Topic.Movies],
    types: [Type.TextLeftWithBackground, Type.TwoOption],
    width: 1280,
    height: 947,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 20 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 20 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/cinemaGuys.png"
                width={1280}
                height={947}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>

            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
