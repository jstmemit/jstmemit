import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const adChiyoShocked: Template = {
    name: "adChiyoShocked",
    displayName: buildLocales("Chiyo shocked", {
        [Locale.Russian]: "Чиё в шоке",
        [Locale.Ukrainian]: "Чійо в шоці",
        [Locale.Dutch]: "Chiyo geschokt",
        [Locale.French]: "Chiyo choquée",
        [Locale.German]: "Chiyo geschockt",
        [Locale.Polish]: "Chiyo w szoku",
        [Locale.SpanishES]: "Chiyo en shock",
        [Locale.SpanishLATAM]: "Chiyo en shock",
        [Locale.PortugueseBR]: "Chiyo chocada",
        [Locale.Turkish]: "Chiyo şokta",
        [Locale.Italian]: "Chiyo scioccata",
        [Locale.Indonesian]: "Chiyo terkejut",
        [Locale.Czech]: "Chiyo v šoku",
        [Locale.Japanese]: "ちよ ショック",
        [Locale.Korean]: "치요 충격",
        [Locale.ChineseCN]: "千代震惊",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AzumangaDaioh],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 498,
    height: 463,
    animationDuration: 5760,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/adChiyoShocked.gif"
                width={498}
                height={373}
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
