import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const winnieThePooh1: Template = {
    name: "winnieThePooh1",
    displayName: buildLocales("Winnie The Pooh 1", {
        [Locale.Russian]: "Винни-Пух 1",
        [Locale.Ukrainian]: "Вінні-Пух 1",
        [Locale.Dutch]: "Winnie de Poeh 1",
        [Locale.French]: "Winnie l'ourson 1",
        [Locale.German]: "Winnie Puuh 1",
        [Locale.Polish]: "Kubuś Puchatek 1",
        [Locale.SpanishES]: "Winnie the Pooh 1",
        [Locale.SpanishLATAM]: "Winnie Pooh 1",
        [Locale.PortugueseBR]: "Ursinho Pooh 1",
        [Locale.Turkish]: "Winnie The Pooh 1",
        [Locale.Italian]: "Winnie the Pooh 1",
        [Locale.Indonesian]: "Winnie The Pooh 1",
        [Locale.Czech]: "Medvídek Pú 1",
        [Locale.Japanese]: "くまのプーさん 1",
        [Locale.Korean]: "곰돌이 푸 1",
        [Locale.ChineseCN]: "小熊维尼 1",
    }),
    topics: [Topic.Cartoons, Topic.Reaction, Topic.WinnieThePooh],
    types: [Type.ThreeOption, Type.TextRightWithBackground],
    width: 640,
    height: 731,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 10 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 10 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 10 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/winnieThePooh1.jpg"
                width={640}
                height={731}
                style={{ position: "absolute", top: 0, left: 0 }}
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
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
                    right: 0,
                    top: "33%",
                    width: "50%",
                    height: "35%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
                    right: 0,
                    bottom: 0,
                    width: "50%",
                    height: "32%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
