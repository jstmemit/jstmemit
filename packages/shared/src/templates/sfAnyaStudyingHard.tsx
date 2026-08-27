import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const sfAnyaStudyingHard: Template = {
    name: "sfAnyaStudyingHard",
    displayName: buildLocales("Anya studying hard", {
        [Locale.Russian]: "Аня усердно учится",
        [Locale.Ukrainian]: "Аня старанно вчиться",
        [Locale.Dutch]: "Anya hard aan het studeren",
        [Locale.French]: "Anya étudiant dur",
        [Locale.German]: "Anya lernt fleißig",
        [Locale.Polish]: "Anya pilnie się uczy",
        [Locale.SpanishES]: "Anya estudiando duro",
        [Locale.SpanishLATAM]: "Anya estudiando duro",
        [Locale.PortugueseBR]: "Anya estudando muito",
        [Locale.Turkish]: "Anya sıkı ders çalışıyor",
        [Locale.Italian]: "Anya studia duramente",
        [Locale.Indonesian]: "Anya belajar keras",
        [Locale.Czech]: "Anya se pilně učí",
        [Locale.Japanese]: "一生懸命勉強するアーニャ",
        [Locale.Korean]: "열심히 공부하는 아냐",
        [Locale.ChineseCN]: "阿尼亚努力学习",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.SpyFamily],
    types: [Type.TextBottomWithBackground],
    width: 447,
    height: 380,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/sfAnyaStudyingHard.png"
                width={447}
                height={290}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "90px",
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
