import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dfragRokaDarkness1: Template = {
    name: "dfragRokaDarkness1",
    displayName: buildLocales("Roka's darkness 1", {
        [Locale.Russian]: "Тьма Роки 1",
        [Locale.Ukrainian]: "Темрява Роки 1",
        [Locale.Dutch]: "Roka's duisternis 1",
        [Locale.French]: "Les ténèbres de Roka 1",
        [Locale.German]: "Rokas Dunkelheit 1",
        [Locale.Polish]: "Ciemność Roki 1",
        [Locale.SpanishES]: "Oscuridad de Roka 1",
        [Locale.SpanishLATAM]: "Oscuridad de Roka 1",
        [Locale.PortugueseBR]: "Escuridão da Roka 1",
        [Locale.Turkish]: "Roka'nın karanlığı 1",
        [Locale.Italian]: "L'oscurità di Roka 1",
        [Locale.Indonesian]: "Kegelapan Roka 1",
        [Locale.Czech]: "Rokina temnota 1",
        [Locale.Japanese]: "芦花の闇 1",
        [Locale.Korean]: "로카의 어둠 1",
        [Locale.ChineseCN]: "芦花的黑暗 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DFrag],
    types: [Type.TextBottomWithBackground],
    width: 500,
    height: 381,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dfragRokaDarkness1.png"
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
