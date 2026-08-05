import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const sfAnyaForgerSmugShush: Template = {
    name: "sfAnyaForgerSmugShush",
    displayName: buildLocales("Anya Forger smug shush", {
        [Locale.Russian]: "Аня Форджер: довольное «тс-с»",
        [Locale.Ukrainian]: "Аня Форджер: задоволене «тс-с»",
        [Locale.Dutch]: "Anya Forger zelfingenomen sst",
        [Locale.French]: "Anya Forger chut suffisant",
        [Locale.German]: "Anya Forger selbstgefälliges pssht",
        [Locale.Polish]: "Anya Forger zadowolone ciii",
        [Locale.SpanishES]: "Anya Forger shhh engreído",
        [Locale.SpanishLATAM]: "Anya Forger shhh engreído",
        [Locale.PortugueseBR]: "Anya Forger shhh presunçoso",
        [Locale.Turkish]: "Anya Forger ukala şşşt",
        [Locale.Italian]: "Anya Forger shhh compiaciuto",
        [Locale.Indonesian]: "Anya Forger senyum sombong sst",
        [Locale.Czech]: "Anya Forger spokojené pšt",
        [Locale.Japanese]: "アーニャ・フォージャー ドヤ顔でシーッ",
        [Locale.Korean]: "아냐 포저 썩소 쉿",
        [Locale.ChineseCN]: "阿尼亚·福杰得意嘘声",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextRightWithBackground],
    width: 1400,
    height: 700,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sfAnyaForgerSmugShush.png"
                width={700}
                height={700}
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 80,
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
