import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const monsterKenzoTenmaBeforeAfter: Template = {
    name: "monsterKenzoTenmaBeforeAfter",
    displayName: buildLocales("Kenzo Tenma before after", {
        [Locale.Russian]: "Кензо Тенма: до и после",
        [Locale.Ukrainian]: "Кензо Тенма: до і після",
        [Locale.Dutch]: "Kenzo Tenma voor en na",
        [Locale.French]: "Kenzo Tenma avant après",
        [Locale.German]: "Kenzo Tenma vorher nachher",
        [Locale.Polish]: "Kenzo Tenma przed i po",
        [Locale.SpanishES]: "Kenzo Tenma antes y después",
        [Locale.SpanishLATAM]: "Kenzo Tenma antes y después",
        [Locale.PortugueseBR]: "Kenzo Tenma antes e depois",
        [Locale.Turkish]: "Kenzo Tenma öncesi ve sonrası",
        [Locale.Italian]: "Kenzo Tenma prima e dopo",
        [Locale.Indonesian]: "Kenzo Tenma sebelum dan sesudah",
        [Locale.Czech]: "Kenzo Tenma před a po",
        [Locale.Japanese]: "天馬賢三 ビフォーアフター",
        [Locale.Korean]: "텐마 겐조 비포 애프터",
        [Locale.ChineseCN]: "天马贤三 之前与之后",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Monster],
    types: [Type.TextTopWithBackground, Type.TwoOption],
    width: 736,
    height: 530,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 6 },
        { id: 1, description: "second option", minLength: 1, maxLength: 6 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=55,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/monsterKenzoTenmaBeforeAfter.png"
                width={736}
                height={420}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
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
                    top: 0,
                    width: "50%",
                    height: "110px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
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
