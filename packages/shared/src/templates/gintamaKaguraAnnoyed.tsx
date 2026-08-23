import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const gintamaKaguraAnnoyed: Template = {
    name: "gintamaKaguraAnnoyed",
    displayName: buildLocales("Annoyed Kagura", {
        [Locale.Russian]: "Раздраженная Кагура",
        [Locale.Ukrainian]: "Роздратована Кагура",
        [Locale.Dutch]: "Geërgerde Kagura",
        [Locale.French]: "Kagura agacée",
        [Locale.German]: "Genervte Kagura",
        [Locale.Polish]: "Zirytowana Kagura",
        [Locale.SpanishES]: "Kagura molesta",
        [Locale.SpanishLATAM]: "Kagura molesta",
        [Locale.PortugueseBR]: "Kagura irritada",
        [Locale.Turkish]: "Sinirli Kagura",
        [Locale.Italian]: "Kagura infastidita",
        [Locale.Indonesian]: "Kagura kesal",
        [Locale.Czech]: "Otrávená Kagura",
        [Locale.Japanese]: "不機嫌な神楽",
        [Locale.Korean]: "짜증난 카구라",
        [Locale.ChineseCN]: "烦躁的神乐",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Gintama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 465,
    animationDuration: 1470,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/gintamaKaguraAnnoyed.gif"
                width={500}
                height={375}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
                        fontSize: 30,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
