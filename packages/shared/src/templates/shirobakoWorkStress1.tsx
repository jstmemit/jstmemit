import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const shirobakoWorkStress1: Template = {
    name: "shirobakoWorkStress1",
    displayName: buildLocales("Work stress 1", {
        [Locale.Russian]: "Стресс на работе 1",
        [Locale.Ukrainian]: "Стрес на роботі 1",
        [Locale.Dutch]: "Werkstress 1",
        [Locale.French]: "Stress au travail 1",
        [Locale.German]: "Arbeitsstress 1",
        [Locale.Polish]: "Stres w pracy 1",
        [Locale.SpanishES]: "Estrés laboral 1",
        [Locale.SpanishLATAM]: "Estrés laboral 1",
        [Locale.PortugueseBR]: "Estresse no trabalho 1",
        [Locale.Turkish]: "İş stresi 1",
        [Locale.Italian]: "Stress da lavoro 1",
        [Locale.Indonesian]: "Stres kerja 1",
        [Locale.Czech]: "Pracovní stres 1",
        [Locale.Japanese]: "仕事のストレス 1",
        [Locale.Korean]: "직장 스트레스 1",
        [Locale.ChineseCN]: "工作压力 1",
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/shirobakoWorkStress1.png"
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
                    borderBottom: "4px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
                    borderTop: "3px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 4,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
