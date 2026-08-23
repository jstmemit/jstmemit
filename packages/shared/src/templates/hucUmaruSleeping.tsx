import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const hucUmaruSleeping: Template = {
    name: "hucUmaruSleeping",
    displayName: buildLocales("Sleeping Umaru", {
        [Locale.Russian]: "Спящая Умару",
        [Locale.Ukrainian]: "Спляча Умару",
        [Locale.Dutch]: "Slapende Umaru",
        [Locale.French]: "Umaru endormie",
        [Locale.German]: "Schlafende Umaru",
        [Locale.Polish]: "Śpiąca Umaru",
        [Locale.SpanishES]: "Umaru durmiendo",
        [Locale.SpanishLATAM]: "Umaru durmiendo",
        [Locale.PortugueseBR]: "Umaru dormindo",
        [Locale.Turkish]: "Uyuyan Umaru",
        [Locale.Italian]: "Umaru che dorme",
        [Locale.Indonesian]: "Umaru tidur",
        [Locale.Czech]: "Spící Umaru",
        [Locale.Japanese]: "寝ているうまる",
        [Locale.Korean]: "잠자는 우마루",
        [Locale.ChineseCN]: "睡觉的小埋",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.HimoutoUmaruChan],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 360,
    animationDuration: 1610,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/hucUmaruSleeping.gif"
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
