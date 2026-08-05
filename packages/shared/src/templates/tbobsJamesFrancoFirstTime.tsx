import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const tbobsJamesFrancoFirstTime: Template = {
    name: "tbobsJamesFrancoFirstTime",
    displayName: buildLocales("James Franco first time", {
        [Locale.Russian]: "Джеймс Франко: первый раз?",
        [Locale.Ukrainian]: "Джеймс Франко: перший раз?",
        [Locale.Dutch]: "James Franco eerste keer",
        [Locale.French]: "James Franco première fois",
        [Locale.German]: "James Franco erstes Mal",
        [Locale.Polish]: "James Franco pierwszy raz",
        [Locale.SpanishES]: "James Franco primera vez",
        [Locale.SpanishLATAM]: "James Franco primera vez",
        [Locale.PortugueseBR]: "James Franco primeira vez",
        [Locale.Turkish]: "James Franco ilk defa",
        [Locale.Italian]: "James Franco prima volta",
        [Locale.Indonesian]: "James Franco pertama kali",
        [Locale.Czech]: "James Franco poprvé",
        [Locale.Japanese]: "ジェームズ・フランコ 初めて？",
        [Locale.Korean]: "제임스 프랭코 처음이야?",
        [Locale.ChineseCN]: "詹姆斯·弗兰科 第一次吗",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.TheBalladOfBusterScruggs],
    types: [Type.DefaultText, Type.FaceImage],
    width: 1200,
    height: 1296,
    texts: [],
    images: [
        { id: 0, description: "James Franco`s face" },
        { id: 1, description: "Old man face" },
    ],
    element: ({ images }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/tbobsJamesFrancoFirstTime.png"
                width={1200}
                height={1296}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <img
                src={images[0]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    top: 10,
                    left: 330,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(-10deg)",
                }}
            />
            <img
                src={images[1]}
                width={350}
                height={350}
                style={{
                    position: "absolute",
                    bottom: 250,
                    left: 370,
                    objectFit: "cover",
                    borderRadius: "100%",
                    transform: "rotate(10deg)",
                }}
            />
        </div>
    ),
};
