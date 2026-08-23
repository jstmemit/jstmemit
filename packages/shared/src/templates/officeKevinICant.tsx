import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const officeKevinICant: Template = {
    name: "officeKevinICant",
    displayName: buildLocales("Kevin I can't", {
        [Locale.Russian]: "Кевин «я не могу»",
        [Locale.Ukrainian]: "Кевін «я не можу»",
        [Locale.Dutch]: "Kevin 'ik kan het niet'",
        [Locale.French]: "Kevin « je ne peux pas »",
        [Locale.German]: "Kevin „ich kann nicht“",
        [Locale.Polish]: "Kevin „nie mogę”",
        [Locale.SpanishES]: "Kevin «no puedo»",
        [Locale.SpanishLATAM]: "Kevin «no puedo»",
        [Locale.PortugueseBR]: "Kevin 'eu não consigo'",
        [Locale.Turkish]: "Kevin 'yapamam'",
        [Locale.Italian]: "Kevin 'non posso'",
        [Locale.Indonesian]: "Kevin 'aku tidak bisa'",
        [Locale.Czech]: "Kevin „já nemůžu“",
        [Locale.Japanese]: "ケビン「できない」",
        [Locale.Korean]: "케빈 '나 못해'",
        [Locale.ChineseCN]: "凯文“我做不到”",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 470,
    height: 360,
    animationDuration: 2720,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/officeKevinICant.webp"
                width={470}
                height={270}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
