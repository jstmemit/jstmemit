import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruExcited: Template = {
    name: "hucUmaruExcited",
    displayName: buildLocales("Excited Umaru", {
        [Locale.Russian]: "Восторженная Умару",
        [Locale.Ukrainian]: "Захоплена Умару",
        [Locale.Dutch]: "Enthousiaste Umaru",
        [Locale.French]: "Umaru enthousiaste",
        [Locale.German]: "Begeisterte Umaru",
        [Locale.Polish]: "Podekscytowana Umaru",
        [Locale.SpanishES]: "Umaru emocionada",
        [Locale.SpanishLATAM]: "Umaru emocionada",
        [Locale.PortugueseBR]: "Umaru animada",
        [Locale.Turkish]: "Heyecanlı Umaru",
        [Locale.Italian]: "Umaru entusiasta",
        [Locale.Indonesian]: "Umaru bersemangat",
        [Locale.Czech]: "Nadšená Umaru",
        [Locale.Japanese]: "ワクワクするうまる",
        [Locale.Korean]: "신난 우마루",
        [Locale.ChineseCN]: "兴奋的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 371,
    animationDuration: 2240,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruExcited.gif"
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
