import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const wnlMafuyuKirisuIntrovert: Template = {
    name: "wnlMafuyuKirisuIntrovert",
    displayName: buildLocales("Mafuyu Kirisu introvert", {
        [Locale.Russian]: "Мафую Кирису интроверт",
        [Locale.Ukrainian]: "Мафую Кірісу інтроверт",
        [Locale.Dutch]: "Mafuyu Kirisu introvert",
        [Locale.French]: "Mafuyu Kirisu introvertie",
        [Locale.German]: "Mafuyu Kirisu Introvertiert",
        [Locale.Polish]: "Mafuyu Kirisu introwertyk",
        [Locale.SpanishES]: "Mafuyu Kirisu introvertida",
        [Locale.SpanishLATAM]: "Mafuyu Kirisu introvertida",
        [Locale.PortugueseBR]: "Mafuyu Kirisu introvertida",
        [Locale.Turkish]: "İçe dönük Mafuyu Kirisu",
        [Locale.Italian]: "Mafuyu Kirisu introversa",
        [Locale.Indonesian]: "Mafuyu Kirisu introvert",
        [Locale.Czech]: "Mafuyu Kirisu introvert",
        [Locale.Japanese]: "桐須真冬 陰キャ",
        [Locale.Korean]: "키리수 마후유 내향인",
        [Locale.ChineseCN]: "桐须真冬 社恐",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.WeNeverLearn],
    types: [Type.TwoOption, Type.TextRightWithBackground, Type.DefaultText],
    width: 948,
    height: 658,
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/wnlMafuyuKirisuIntrovert.png"
                width={474}
                height={658}
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
                    borderLeft: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
                    borderLeft: "1px solid #000000",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
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
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "100%",
                    height: "50%",
                    borderBottom: "1px solid #000000",
                }}
            ></div>
        </div>
    ),
};
