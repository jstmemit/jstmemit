import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const shirobakoWorkStress: Template = {
    name: "shirobakoWorkStress",
    displayName: buildLocales("Work stress", {
        [Locale.Russian]: "Стресс на работе",
        [Locale.Ukrainian]: "Стрес на роботі",
        [Locale.Dutch]: "Werkstress",
        [Locale.French]: "Stress au travail",
        [Locale.German]: "Arbeitsstress",
        [Locale.Polish]: "Stres w pracy",
        [Locale.SpanishES]: "Estrés laboral",
        [Locale.SpanishLATAM]: "Estrés laboral",
        [Locale.PortugueseBR]: "Estresse no trabalho",
        [Locale.Turkish]: "İş stresi",
        [Locale.Italian]: "Stress da lavoro",
        [Locale.Indonesian]: "Stres kerja",
        [Locale.Czech]: "Pracovní stres",
        [Locale.Japanese]: "仕事のストレス",
        [Locale.Korean]: "직장 스트레스",
        [Locale.ChineseCN]: "工作压力",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Shirobako],
    types: [Type.ThreeOption, Type.TextRightWithBackground],
    width: 952,
    height: 794,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 6 },
        { id: 1, description: "second option", minLength: 1, maxLength: 6 },
        { id: 2, description: "third option", minLength: 1, maxLength: 6 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/shirobakoWorkStress.png"
                width={476}
                height={794}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "33%",
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
                        lineClamp: 3,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: "33%",
                    width: "50%",
                    height: "34%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "6px solid #000000",
                    borderTop: "3px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "33%",
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
        </div>
    ),
};
