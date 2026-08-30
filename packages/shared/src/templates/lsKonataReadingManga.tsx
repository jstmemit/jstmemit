import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const lsKonataReadingManga: Template = {
    name: "lsKonataReadingManga",
    displayName: buildLocales("Konata reading manga", {
        [Locale.Russian]: "Коната читает мангу",
        [Locale.Ukrainian]: "Коната читає мангу",
        [Locale.Dutch]: "Manga lezende Konata",
        [Locale.French]: "Konata lisant un manga",
        [Locale.German]: "Manga lesende Konata",
        [Locale.Polish]: "Konata czytająca mangę",
        [Locale.SpanishES]: "Konata leyendo manga",
        [Locale.SpanishLATAM]: "Konata leyendo manga",
        [Locale.PortugueseBR]: "Konata lendo mangá",
        [Locale.Turkish]: "Manga okuyan Konata",
        [Locale.Italian]: "Konata che legge un manga",
        [Locale.Indonesian]: "Konata membaca manga",
        [Locale.Czech]: "Konata čtoucí mangu",
        [Locale.Japanese]: "マンガを読むこなた",
        [Locale.Korean]: "만화를 읽는 코나타",
        [Locale.ChineseCN]: "看漫画的此方",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.LuckyStar],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 370,
    animationDuration: 900,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/lsKonataReadingManga.gif"
                width={500}
                height={270}
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
