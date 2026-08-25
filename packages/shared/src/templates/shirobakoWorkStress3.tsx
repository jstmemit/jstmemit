import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const shirobakoWorkStress3: Template = {
    name: "shirobakoWorkStress3",
    displayName: buildLocales("Work stress 3", {
        [Locale.Russian]: "Стресс на работе 3",
        [Locale.Ukrainian]: "Стрес на роботі 3",
        [Locale.Dutch]: "Werkstress 3",
        [Locale.French]: "Stress au travail 3",
        [Locale.German]: "Arbeitsstress 3",
        [Locale.Polish]: "Stres w pracy 3",
        [Locale.SpanishES]: "Estrés laboral 3",
        [Locale.SpanishLATAM]: "Estrés laboral 3",
        [Locale.PortugueseBR]: "Estresse no trabalho 3",
        [Locale.Turkish]: "İş stresi 3",
        [Locale.Italian]: "Stress da lavoro 3",
        [Locale.Indonesian]: "Stres kerja 3",
        [Locale.Czech]: "Pracovní stres 3",
        [Locale.Japanese]: "仕事のストレス 3",
        [Locale.Korean]: "직장 스트레스 3",
        [Locale.ChineseCN]: "工作压力 3",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Shirobako],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 950,
    height: 528,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/shirobakoWorkStress3.png"
                width={475}
                height={528}
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
                    borderTop: "1px solid #000000",
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
