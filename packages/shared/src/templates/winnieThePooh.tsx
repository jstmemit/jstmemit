import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const winnieThePooh: Template = {
    name: "winnieThePooh",
    displayName: buildLocales("Winnie The Pooh", {
        [Locale.Russian]: "Винни-Пух",
        [Locale.Ukrainian]: "Вінні-Пух",
        [Locale.Dutch]: "Winnie de Poeh",
        [Locale.French]: "Winnie l'ourson",
        [Locale.German]: "Winnie Puuh",
        [Locale.Polish]: "Kubuś Puchatek",
        [Locale.SpanishES]: "Winnie the Pooh",
        [Locale.SpanishLATAM]: "Winnie Pooh",
        [Locale.PortugueseBR]: "Ursinho Pooh",
        [Locale.Turkish]: "Winnie The Pooh",
        [Locale.Italian]: "Winnie the Pooh",
        [Locale.Indonesian]: "Winnie The Pooh",
        [Locale.Czech]: "Medvídek Pú",
        [Locale.Japanese]: "くまのプーさん",
        [Locale.Korean]: "곰돌이 푸",
        [Locale.ChineseCN]: "小熊维尼",
    }),
    topics: [Topic.Cartoons, Topic.Reaction, Topic.WinnieThePooh],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 600,
    height: 600,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 8 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/winnieThePooh.jpg"
                width={600}
                height={600}
                style={{ position: "absolute", top: 0, left: 0 }}
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
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
                }}
            >
                <div
                    style={{
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 40,
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
