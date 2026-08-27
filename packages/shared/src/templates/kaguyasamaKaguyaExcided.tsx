import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const kaguyasamaKaguyaExcided: Template = {
    name: "kaguyasamaKaguyaExcided",
    displayName: buildLocales("Excited Kaguya", {
        [Locale.Russian]: "Кагуя в восторге",
        [Locale.Ukrainian]: "Каґуя в захваті",
        [Locale.Dutch]: "Enthousiaste Kaguya",
        [Locale.French]: "Kaguya enthousiaste",
        [Locale.German]: "Begeisterte Kaguya",
        [Locale.Polish]: "Podekscytowana Kaguya",
        [Locale.SpanishES]: "Kaguya emocionada",
        [Locale.SpanishLATAM]: "Kaguya emocionada",
        [Locale.PortugueseBR]: "Kaguya empolgada",
        [Locale.Turkish]: "Heyecanlı Kaguya",
        [Locale.Italian]: "Kaguya entusiasta",
        [Locale.Indonesian]: "Kaguya bersemangat",
        [Locale.Czech]: "Nadšená Kaguya",
        [Locale.Japanese]: "ワクワクするかぐや",
        [Locale.Korean]: "신난 카구야",
        [Locale.ChineseCN]: "兴奋的辉夜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextRightWithBackground, Type.Animated],
    width: 800,
    height: 444,
    animationDuration: 1300,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaKaguyaExcided.gif"
                width={400}
                height={444}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[0]),
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
