import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaExcitedPrincess: Template = {
    name: "sfAnyaExcitedPrincess",
    displayName: buildLocales("Anya excited princess", {
        [Locale.Russian]: "Восторженная принцесса Аня",
        [Locale.Ukrainian]: "Захоплена принцеса Аня",
        [Locale.Dutch]: "Enthousiaste prinses Anya",
        [Locale.French]: "Princesse Anya enthousiaste",
        [Locale.German]: "Begeisterte Prinzessin Anya",
        [Locale.Polish]: "Podekscytowana księżniczka Anya",
        [Locale.SpanishES]: "Princesa Anya emocionada",
        [Locale.SpanishLATAM]: "Princesa Anya emocionada",
        [Locale.PortugueseBR]: "Princesa Anya empolgada",
        [Locale.Turkish]: "Heyecanlı prenses Anya",
        [Locale.Italian]: "Principessa Anya entusiasta",
        [Locale.Indonesian]: "Putri Anya yang bersemangat",
        [Locale.Czech]: "Nadšená princezna Anya",
        [Locale.Japanese]: "興奮したアーニャ姫",
        [Locale.Korean]: "신난 아냐 공주",
        [Locale.ChineseCN]: "兴奋的阿尼亚公主",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 403,
    animationDuration: 1920,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/sfAnyaExcitedPrincess.gif"
                width={540}
                height={303}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
