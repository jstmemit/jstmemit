import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruSleeping1: Template = {
    name: "hucUmaruSleeping1",
    displayName: buildLocales("Sleeping Umaru 1", {
        [Locale.Russian]: "Спящая Умару 1",
        [Locale.Ukrainian]: "Спляча Умару 1",
        [Locale.Dutch]: "Slapende Umaru 1",
        [Locale.French]: "Umaru endormie 1",
        [Locale.German]: "Schlafende Umaru 1",
        [Locale.Polish]: "Śpiąca Umaru 1",
        [Locale.SpanishES]: "Umaru durmiendo 1",
        [Locale.SpanishLATAM]: "Umaru durmiendo 1",
        [Locale.PortugueseBR]: "Umaru dormindo 1",
        [Locale.Turkish]: "Uyuyan Umaru 1",
        [Locale.Italian]: "Umaru che dorme 1",
        [Locale.Indonesian]: "Umaru tidur 1",
        [Locale.Czech]: "Spící Umaru 1",
        [Locale.Japanese]: "寝ているうまる 1",
        [Locale.Korean]: "잠자는 우마루 1",
        [Locale.ChineseCN]: "睡觉的小埋 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 370,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruSleeping1.png"
                width={500}
                height={280}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
