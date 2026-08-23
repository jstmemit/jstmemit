import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const dsTanjiroChibiAngry: Template = {
    name: "dsTanjiroChibiAngry",
    displayName: buildLocales("Tanjiro chibi angry", {
        [Locale.Russian]: "Чиби Тандзиро злится",
        [Locale.Ukrainian]: "Чібі Тандзіро злиться",
        [Locale.Dutch]: "Chibi Tanjiro boos",
        [Locale.French]: "Chibi Tanjiro en colère",
        [Locale.German]: "Chibi Tanjiro wütend",
        [Locale.Polish]: "Chibi Tanjiro zły",
        [Locale.SpanishES]: "Chibi Tanjiro enfadado",
        [Locale.SpanishLATAM]: "Chibi Tanjiro enojado",
        [Locale.PortugueseBR]: "Chibi Tanjiro bravo",
        [Locale.Turkish]: "Chibi Tanjiro kızgın",
        [Locale.Italian]: "Chibi Tanjiro arrabbiato",
        [Locale.Indonesian]: "Chibi Tanjiro marah",
        [Locale.Czech]: "Chibi Tanjiro naštvaný",
        [Locale.Japanese]: "怒るチビ炭治郎",
        [Locale.Korean]: "화난 치비 탄지로",
        [Locale.ChineseCN]: "Q版炭治郎生气",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DemonSlayer],
    types: [Type.TextRightWithBackground],
    width: 1780,
    height: 900,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dsTanjiroChibiAngry.png"
                width={890}
                height={900}
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
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 90,
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
