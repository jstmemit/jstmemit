import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const expandingBrain: Template = {
    name: "expandingBrain",
    displayName: buildLocales("Expanding brain", {
        [Locale.Russian]: "Расширяющийся мозг",
        [Locale.Ukrainian]: "Мозок, що розширюється",
        [Locale.Dutch]: "Groeiend brein",
        [Locale.French]: "Cerveau en expansion",
        [Locale.German]: "Expandierendes Gehirn",
        [Locale.Polish]: "Rozszerzający się mózg",
        [Locale.SpanishES]: "Cerebro expandiéndose",
        [Locale.SpanishLATAM]: "Cerebro expandiéndose",
        [Locale.PortugueseBR]: "Cérebro em expansão",
        [Locale.Turkish]: "Genişleyen beyin",
        [Locale.Italian]: "Cervello in espansione",
        [Locale.Indonesian]: "Otak yang membesar",
        [Locale.Czech]: "Rozšiřující se mozek",
        [Locale.Japanese]: "拡大する脳",
        [Locale.Korean]: "확장되는 뇌",
        [Locale.ChineseCN]: "膨胀的大脑",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.ThreeOption],
    width: 1440,
    height: 1403,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 18 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 18 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 18 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/expandingBrain.jpg"
                width={1440}
                height={1403}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "53%",
                    height: "33%",
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
                    top: "33%",
                    width: "53%",
                    height: "33%",
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
                    bottom: 0,
                    width: "53%",
                    height: "34%",
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
        </div>
    ),
};
