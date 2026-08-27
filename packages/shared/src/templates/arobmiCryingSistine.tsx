import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const arobmiCryingSistine: Template = {
    name: "arobmiCryingSistine",
    displayName: buildLocales("Crying Sistine", {
        [Locale.Russian]: "Плачущая Систина",
        [Locale.Ukrainian]: "Сістіна плаче",
        [Locale.Dutch]: "Huilende Sistine",
        [Locale.French]: "Sistine pleurant",
        [Locale.German]: "Weinende Sistine",
        [Locale.Polish]: "Płacząca Sistine",
        [Locale.SpanishES]: "Sistine llorando",
        [Locale.SpanishLATAM]: "Sistine llorando",
        [Locale.PortugueseBR]: "Sistine chorando",
        [Locale.Turkish]: "Ağlayan Sistine",
        [Locale.Italian]: "Sistine che piange",
        [Locale.Indonesian]: "Sistine menangis",
        [Locale.Czech]: "Plačící Sistine",
        [Locale.Japanese]: "泣くシスティーナ",
        [Locale.Korean]: "우는 시스티나",
        [Locale.ChineseCN]: "哭泣的希丝缇娜",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.AkashicRecords],
    types: [Type.TextBottomWithBackground],
    width: 1200,
    height: 855,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 10 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/arobmiCryingSistine.png"
                width={1200}
                height={675}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "180px",
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
