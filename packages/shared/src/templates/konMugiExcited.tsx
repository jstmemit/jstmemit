import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const konMugiExcited: Template = {
    name: "konMugiExcited",
    displayName: buildLocales("Excited Mugi", {
        [Locale.Russian]: "Муги в восторге",
        [Locale.Ukrainian]: "Мугі в захваті",
        [Locale.Dutch]: "Enthousiaste Mugi",
        [Locale.French]: "Mugi enthousiaste",
        [Locale.German]: "Begeisterte Mugi",
        [Locale.Polish]: "Podekscytowana Mugi",
        [Locale.SpanishES]: "Mugi emocionada",
        [Locale.SpanishLATAM]: "Mugi emocionada",
        [Locale.PortugueseBR]: "Mugi empolgada",
        [Locale.Turkish]: "Heyecanlı Mugi",
        [Locale.Italian]: "Mugi entusiasta",
        [Locale.Indonesian]: "Mugi bersemangat",
        [Locale.Czech]: "Nadšená Mugi",
        [Locale.Japanese]: "ワクワクするムギ",
        [Locale.Korean]: "신난 무기",
        [Locale.ChineseCN]: "兴奋的䌷",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Kon],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 405,
    animationDuration: 700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/konMugiExcited.gif"
                width={500}
                height={315}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
