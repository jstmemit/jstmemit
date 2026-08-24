import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const officeDwightScreaming: Template = {
    name: "officeDwightScreaming",
    displayName: buildLocales("Dwight screaming", {
        [Locale.Russian]: "Дуайт кричит",
        [Locale.Ukrainian]: "Дуайт кричить",
        [Locale.Dutch]: "Dwight schreeuwt",
        [Locale.French]: "Dwight qui crie",
        [Locale.German]: "Dwight schreit",
        [Locale.Polish]: "Dwight krzyczy",
        [Locale.SpanishES]: "Dwight gritando",
        [Locale.SpanishLATAM]: "Dwight gritando",
        [Locale.PortugueseBR]: "Dwight gritando",
        [Locale.Turkish]: "Dwight bağırıyor",
        [Locale.Italian]: "Dwight che urla",
        [Locale.Indonesian]: "Dwight berteriak",
        [Locale.Czech]: "Dwight křičí",
        [Locale.Japanese]: "叫ぶドワイト",
        [Locale.Korean]: "소리치는 드와이트",
        [Locale.ChineseCN]: "大喊的德怀特",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 500,
    height: 362,
    animationDuration: 1600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/officeDwightScreaming.webp"
                width={500}
                height={272}
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
