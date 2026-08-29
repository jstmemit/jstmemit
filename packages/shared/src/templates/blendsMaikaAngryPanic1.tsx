import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsMaikaAngryPanic1: Template = {
    name: "blendsMaikaAngryPanic1",
    displayName: buildLocales("Maika angry panic 1", {
        [Locale.Russian]: "Майка в гневной панике 1",
        [Locale.Ukrainian]: "Майка в гнівній паніці 1",
        [Locale.Dutch]: "Maika boos in paniek 1",
        [Locale.French]: "Maika en panique furieuse 1",
        [Locale.German]: "Maika wütend in Panik 1",
        [Locale.Polish]: "Maika w gniewnej panice 1",
        [Locale.SpanishES]: "Maika en pánico furioso 1",
        [Locale.SpanishLATAM]: "Maika en pánico furioso 1",
        [Locale.PortugueseBR]: "Maika em pânico furioso 1",
        [Locale.Turkish]: "Maika öfkeli panik içinde 1",
        [Locale.Italian]: "Maika in preda al panico furioso 1",
        [Locale.Indonesian]: "Maika panik dan marah 1",
        [Locale.Czech]: "Maika v naštvané panice 1",
        [Locale.Japanese]: "マイカの怒りパニック 1",
        [Locale.Korean]: "마이카 화난 패닉 1",
        [Locale.ChineseCN]: "麻衣花愤怒恐慌 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 382,
    animationDuration: 900,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/blendsMaikaAngryPanic1.gif"
                width={500}
                height={282}
                style={{ position: "absolute", bottom: 0, right: 0 }}
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
