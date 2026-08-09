import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dfragRokaDarkness: Template = {
    name: "dfragRokaDarkness",
    displayName: buildLocales("Roka's darkness", {
        [Locale.Russian]: "Тьма Роки",
        [Locale.Ukrainian]: "Темрява Роки",
        [Locale.Dutch]: "Roka's duisternis",
        [Locale.French]: "Les ténèbres de Roka",
        [Locale.German]: "Rokas Dunkelheit",
        [Locale.Polish]: "Ciemność Roki",
        [Locale.SpanishES]: "Oscuridad de Roka",
        [Locale.SpanishLATAM]: "Oscuridad de Roka",
        [Locale.PortugueseBR]: "Escuridão da Roka",
        [Locale.Turkish]: "Roka'nın karanlığı",
        [Locale.Italian]: "L'oscurità di Roka",
        [Locale.Indonesian]: "Kegelapan Roka",
        [Locale.Czech]: "Rokina temnota",
        [Locale.Japanese]: "芦花の闇",
        [Locale.Korean]: "로카의 어둠",
        [Locale.ChineseCN]: "芦花的黑暗",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DFrag],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 371,
    animationDuration: 1820,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
    images: [],
    element: ({ texts }: TemplateProps) => (
        <div
            style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                fontFamily: "Comic Sans MS",
            }}
        >
            <img
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/dfragRokaDarkness.gif"
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
                    height: "90px",
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
                        fontFamily: "Comic Sans MS",
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
