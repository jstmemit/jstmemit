import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const expandingBrain1: Template = {
    name: "expandingBrain1",
    displayName: buildLocales("Expanding brain 1", {
        [Locale.Russian]: "Расширяющийся мозг 1",
        [Locale.Ukrainian]: "Мозок, що розширюється 1",
        [Locale.Dutch]: "Groeiend brein 1",
        [Locale.French]: "Cerveau en expansion 1",
        [Locale.German]: "Expandierendes Gehirn 1",
        [Locale.Polish]: "Rozszerzający się mózg 1",
        [Locale.SpanishES]: "Cerebro expandiéndose 1",
        [Locale.SpanishLATAM]: "Cerebro expandiéndose 1",
        [Locale.PortugueseBR]: "Cérebro em expansão 1",
        [Locale.Turkish]: "Genişleyen beyin 1",
        [Locale.Italian]: "Cervello in espansione 1",
        [Locale.Indonesian]: "Otak yang membesar 1",
        [Locale.Czech]: "Rozšiřující se mozek 1",
        [Locale.Japanese]: "拡大する脳 1",
        [Locale.Korean]: "확장되는 뇌 1",
        [Locale.ChineseCN]: "膨胀的大脑 1",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.FourOption],
    width: 857,
    height: 1202,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 12 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 12 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 12 },
        { id: 3, description: "fourth reaction", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/expandingBrain1.jpg"
                width={857}
                height={1202}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "49%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
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
                    left: 0,
                    top: "25%",
                    width: "49%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: "27%",
                    width: "49%",
                    height: "22%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[2]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "49%",
                    height: "26%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[3]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#000000",
                    }}
                >
                    {texts[3]}
                </div>
            </div>
        </div>
    ),
};
