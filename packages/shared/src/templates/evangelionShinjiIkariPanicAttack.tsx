import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const evangelionShinjiIkariPanicAttack: Template = {
    name: "evangelionShinjiIkariPanicAttack",
    displayName: buildLocales("Shinji Ikari panic attack", {
        [Locale.Russian]: "У Синдзи Икари приступ паники",
        [Locale.Ukrainian]: "У Шінджі Ікарі напад паніки",
        [Locale.Dutch]: "Shinji Ikari paniekaanval",
        [Locale.French]: "Shinji Ikari crise de panique",
        [Locale.German]: "Shinji Ikari Panikattacke",
        [Locale.Polish]: "Shinji Ikari atak paniki",
        [Locale.SpanishES]: "Shinji Ikari ataque de pánico",
        [Locale.SpanishLATAM]: "Shinji Ikari ataque de pánico",
        [Locale.PortugueseBR]: "Shinji Ikari ataque de pânico",
        [Locale.Turkish]: "Shinji Ikari panik atak",
        [Locale.Italian]: "Shinji Ikari attacco di panico",
        [Locale.Indonesian]: "Shinji Ikari serangan panik",
        [Locale.Czech]: "Shinji Ikari záchvat paniky",
        [Locale.Japanese]: "パニック発作のシンジ・イカリ",
        [Locale.Korean]: "공황발작 신지 이카리",
        [Locale.ChineseCN]: "碇真嗣恐慌发作",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Evangelion],
    types: [Type.TextTopWithBackground],
    width: 509,
    height: 492,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/evangelionShinjiIkariPanicAttack.png"
                width={509}
                height={392}
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
                    padding: "15px",
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
