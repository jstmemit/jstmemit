import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const shirobakoWorkStress2: Template = {
    name: "shirobakoWorkStress2",
    displayName: buildLocales("Work stress 2", {
        [Locale.Russian]: "Стресс на работе 2",
        [Locale.Ukrainian]: "Стрес на роботі 2",
        [Locale.Dutch]: "Werkstress 2",
        [Locale.French]: "Stress au travail 2",
        [Locale.German]: "Arbeitsstress 2",
        [Locale.Polish]: "Stres w pracy 2",
        [Locale.SpanishES]: "Estrés laboral 2",
        [Locale.SpanishLATAM]: "Estrés laboral 2",
        [Locale.PortugueseBR]: "Estresse no trabalho 2",
        [Locale.Turkish]: "İş stresi 2",
        [Locale.Italian]: "Stress da lavoro 2",
        [Locale.Indonesian]: "Stres kerja 2",
        [Locale.Czech]: "Pracovní stres 2",
        [Locale.Japanese]: "仕事のストレス 2",
        [Locale.Korean]: "직장 스트레스 2",
        [Locale.ChineseCN]: "工作压力 2",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Shirobako],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 952,
    height: 525,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
    ],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/shirobakoWorkStress2.png"
                width={476}
                height={525}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "6px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderTop: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
