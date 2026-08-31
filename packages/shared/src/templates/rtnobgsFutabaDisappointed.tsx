import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const rtnobgsFutabaDisappointed: Template = {
    name: "rtnobgsFutabaDisappointed",
    displayName: buildLocales("Futaba disappointed", {
        [Locale.Russian]: "Разочарованная Футаба",
        [Locale.Ukrainian]: "Розчарована Футаба",
        [Locale.Dutch]: "Teleurgestelde Futaba",
        [Locale.French]: "Futaba déçue",
        [Locale.German]: "Enttäuschte Futaba",
        [Locale.Polish]: "Rozczarowana Futaba",
        [Locale.SpanishES]: "Futaba decepcionada",
        [Locale.SpanishLATAM]: "Futaba decepcionada",
        [Locale.PortugueseBR]: "Futaba decepcionada",
        [Locale.Turkish]: "Hayal kırıklığına uğramış Futaba",
        [Locale.Italian]: "Futaba delusa",
        [Locale.Indonesian]: "Futaba kecewa",
        [Locale.Czech]: "Zklamaná Futaba",
        [Locale.Japanese]: "がっかりした双葉",
        [Locale.Korean]: "실망한 후타바",
        [Locale.ChineseCN]: "失望的双叶",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.RascalDoesNotDreamOfBunnyGirlSenpai],
    types: [Type.TextLeftWithBackground, Type.Animated],
    width: 1006,
    height: 531,
    animationDuration: 4540,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/rtnobgsFutabaGlasses.gif"
                width={503}
                height={531}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
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
