import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const hucUmaruExcited1: Template = {
    name: "hucUmaruExcited1",
    displayName: buildLocales("Excited Umaru 1", {
        [Locale.Russian]: "Восторженная Умару 1",
        [Locale.Ukrainian]: "Захоплена Умару 1",
        [Locale.Dutch]: "Enthousiaste Umaru 1",
        [Locale.French]: "Umaru enthousiaste 1",
        [Locale.German]: "Begeisterte Umaru 1",
        [Locale.Polish]: "Podekscytowana Umaru 1",
        [Locale.SpanishES]: "Umaru emocionada 1",
        [Locale.SpanishLATAM]: "Umaru emocionada 1",
        [Locale.PortugueseBR]: "Umaru animada 1",
        [Locale.Turkish]: "Heyecanlı Umaru 1",
        [Locale.Italian]: "Umaru entusiasta 1",
        [Locale.Indonesian]: "Umaru bersemangat 1",
        [Locale.Czech]: "Nadšená Umaru 1",
        [Locale.Japanese]: "ワクワクするうまる 1",
        [Locale.Korean]: "신난 우마루 1",
        [Locale.ChineseCN]: "兴奋的小埋 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground],
    width: 498,
    height: 371,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/hucUmaruExcited1.png"
                width={498}
                height={281}
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
