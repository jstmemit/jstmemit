import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adChiyoPanic: Template = {
    name: "adChiyoPanic",
    displayName: buildLocales("Chiyo panic", {
        [Locale.Russian]: "Чиё в панике",
        [Locale.Ukrainian]: "Чійо в паніці",
        [Locale.Dutch]: "Chiyo in paniek",
        [Locale.French]: "Chiyo en panique",
        [Locale.German]: "Chiyo in Panik",
        [Locale.Polish]: "Chiyo w panice",
        [Locale.SpanishES]: "Chiyo en pánico",
        [Locale.SpanishLATAM]: "Chiyo en pánico",
        [Locale.PortugueseBR]: "Chiyo em pânico",
        [Locale.Turkish]: "Chiyo panikte",
        [Locale.Italian]: "Chiyo nel panico",
        [Locale.Indonesian]: "Chiyo panik",
        [Locale.Czech]: "Chiyo panikaří",
        [Locale.Japanese]: "ちよ パニック",
        [Locale.Korean]: "치요 패닉",
        [Locale.ChineseCN]: "千代慌乱",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 439,
    animationDuration: 520,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adChiyoPanic.gif"
                width={540}
                height={349}
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
                    padding: "15px",
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
