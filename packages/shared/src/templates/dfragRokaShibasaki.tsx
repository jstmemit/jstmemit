import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dfragRokaShibasaki: Template = {
    name: "dfragRokaShibasaki",
    displayName: buildLocales("Roka Shibasaki", {
        [Locale.Russian]: "Рока Сибасаки",
        [Locale.Ukrainian]: "Рока Шібасакі",
        [Locale.Dutch]: "Roka Shibasaki",
        [Locale.French]: "Roka Shibasaki",
        [Locale.German]: "Roka Shibasaki",
        [Locale.Polish]: "Roka Shibasaki",
        [Locale.SpanishES]: "Roka Shibasaki",
        [Locale.SpanishLATAM]: "Roka Shibasaki",
        [Locale.PortugueseBR]: "Roka Shibasaki",
        [Locale.Turkish]: "Roka Shibasaki",
        [Locale.Italian]: "Roka Shibasaki",
        [Locale.Indonesian]: "Roka Shibasaki",
        [Locale.Czech]: "Roka Shibasaki",
        [Locale.Japanese]: "柴崎ロカ",
        [Locale.Korean]: "시바사키 로카",
        [Locale.ChineseCN]: "柴崎萝卡",
    }),
    topics: [Topic.Anime, Topic.DFrag],
    types: [Type.TextTopWithBackground, Type.FaceImage],
    width: 750,
    height: 543,
    texts: [{ id: 0, description: "the phrase Roka says", minLength: 1, maxLength: 8 }],
    images: [{ id: 0, description: "Roka`s face" }],
    element: ({ texts, images, font }: TemplateProps) => (
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dfragRokaShibasaki.png"
                width={750}
                height={433}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <img
                src={images[0]}
                width={230}
                height={230}
                style={{
                    position: "absolute",
                    top: 160,
                    left: 270,
                    borderRadius: "100%",
                    objectFit: "cover",
                }}
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
