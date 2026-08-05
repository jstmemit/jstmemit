import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const lightVsDark: Template = {
    name: "lightVsDark",
    displayName: buildLocales("Light vs dark", {
        [Locale.Russian]: "Свет против тьмы",
        [Locale.Ukrainian]: "Світло проти темряви",
        [Locale.Dutch]: "Licht vs donker",
        [Locale.French]: "Lumière vs ténèbres",
        [Locale.German]: "Licht vs Dunkelheit",
        [Locale.Polish]: "Światło vs ciemność",
        [Locale.SpanishES]: "Luz vs oscuridad",
        [Locale.SpanishLATAM]: "Luz vs oscuridad",
        [Locale.PortugueseBR]: "Luz vs escuridão",
        [Locale.Turkish]: "Aydınlık ve karanlık",
        [Locale.Italian]: "Luce vs oscurità",
        [Locale.Indonesian]: "Terang vs gelap",
        [Locale.Czech]: "Světlo vs tma",
        [Locale.Japanese]: "光と闇",
        [Locale.Korean]: "빛과 어둠",
        [Locale.ChineseCN]: "光明与黑暗",
    }),
    topics: [Topic.Misc],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 474,
    height: 492,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 10 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/lightVsDark.png"
                width={237}
                height={492}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "53%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderBottom: "5px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
                    height: "47%",
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
                        lineClamp: 6,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: 30,
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
