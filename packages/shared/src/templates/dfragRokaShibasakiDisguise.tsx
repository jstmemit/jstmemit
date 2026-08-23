import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dfragRokaShibasakiDisguise: Template = {
    name: "dfragRokaShibasakiDisguise",
    displayName: buildLocales("Roka Shibasaki disguise", {
        [Locale.Russian]: "Рока Сибасаки в маскировке",
        [Locale.Ukrainian]: "Рока Шібасакі в маскуванні",
        [Locale.Dutch]: "Roka Shibasaki vermomd",
        [Locale.French]: "Roka Shibasaki déguisée",
        [Locale.German]: "Roka Shibasaki verkleidet",
        [Locale.Polish]: "Roka Shibasaki w przebraniu",
        [Locale.SpanishES]: "Roka Shibasaki disfrazada",
        [Locale.SpanishLATAM]: "Roka Shibasaki disfrazada",
        [Locale.PortugueseBR]: "Roka Shibasaki disfarçada",
        [Locale.Turkish]: "Roka Shibasaki kılık değiştirmiş",
        [Locale.Italian]: "Roka Shibasaki travestita",
        [Locale.Indonesian]: "Roka Shibasaki menyamar",
        [Locale.Czech]: "Roka Shibasaki v přestrojení",
        [Locale.Japanese]: "変装した柴崎ロカ",
        [Locale.Korean]: "변장한 시바사키 로카",
        [Locale.ChineseCN]: "柴崎萝卡伪装",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DFrag],
    types: [Type.TextTopWithBackground],
    width: 750,
    height: 532,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dfragRokaShibasakiDisguise.png"
                width={750}
                height={422}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "110px",
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
                        fontSize: 40,
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
