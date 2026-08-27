import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const blendsChibiMaikaCheering: Template = {
    name: "blendsChibiMaikaCheering",
    displayName: buildLocales("Chibi Maika cheering", {
        [Locale.Russian]: "Чиби Майка ликует",
        [Locale.Ukrainian]: "Чібі Майка тішиться",
        [Locale.Dutch]: "Chibi Maika juicht",
        [Locale.French]: "Chibi Maika en liesse",
        [Locale.German]: "Chibi Maika jubelt",
        [Locale.Polish]: "Chibi Maika dopinguje",
        [Locale.SpanishES]: "Chibi Maika animando",
        [Locale.SpanishLATAM]: "Chibi Maika alentando",
        [Locale.PortugueseBR]: "Chibi Maika torcendo",
        [Locale.Turkish]: "Chibi Maika tezahürat yapıyor",
        [Locale.Italian]: "Chibi Maika che esulta",
        [Locale.Indonesian]: "Chibi Maika bersorak",
        [Locale.Czech]: "Chibi Maika jásá",
        [Locale.Japanese]: "チビマイカの応援",
        [Locale.Korean]: "치비 마이카 응원",
        [Locale.ChineseCN]: "Q版麻衣花欢呼",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BlendS],
    types: [Type.TextLeftWithBackground],
    width: 1472,
    height: 986,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 15 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/blendsChibiMaikaCheering.png"
                width={736}
                height={986}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
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
                        lineClamp: 10,
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
