import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const kaguyasamaChikaDetectiveSmile: Template = {
    name: "kaguyasamaChikaDetectiveSmile",
    displayName: buildLocales("Detective Chika smiling", {
        [Locale.Russian]: "Чика-детектив улыбается",
        [Locale.Ukrainian]: "Чіка-детектив посміхається",
        [Locale.Dutch]: "Glimlachende detective Chika",
        [Locale.French]: "Détective Chika qui sourit",
        [Locale.German]: "Lächelnde Detektivin Chika",
        [Locale.Polish]: "Uśmiechnięta Chika detektyw",
        [Locale.SpanishES]: "Chika detective sonriendo",
        [Locale.SpanishLATAM]: "Chika detective sonriendo",
        [Locale.PortugueseBR]: "Chika detetive sorrindo",
        [Locale.Turkish]: "Gülümseyen dedektif Chika",
        [Locale.Italian]: "Chika detective che sorride",
        [Locale.Indonesian]: "Detektif Chika tersenyum",
        [Locale.Czech]: "Usmívající se detektiv Chika",
        [Locale.Japanese]: "微笑む探偵チカ",
        [Locale.Korean]: "미소 짓는 탐정 치카",
        [Locale.ChineseCN]: "微笑的侦探千花",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.KaguyaSama],
    types: [Type.TextTopWithBackground, Type.Animated],
    width: 540,
    height: 392,
    animationDuration: 2600,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/kaguyasamaChikaDetectiveSmile.gif"
                width={540}
                height={302}
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
