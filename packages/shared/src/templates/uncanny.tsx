import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const uncanny: Template = {
    name: "uncanny",
    displayName: buildLocales("Incredible uncanny", {
        [Locale.Russian]: "Невероятный и жуткий",
        [Locale.Ukrainian]: "Неймовірний і моторошний",
        [Locale.Dutch]: "Ongelooflijk griezelig",
        [Locale.French]: "Incroyable et troublant",
        [Locale.German]: "Unglaublich unheimlich",
        [Locale.Polish]: "Niesamowicie niepokojący",
        [Locale.SpanishES]: "Increíble e inquietante",
        [Locale.SpanishLATAM]: "Increíble e inquietante",
        [Locale.PortugueseBR]: "Incrível e sinistro",
        [Locale.Turkish]: "İnanılmaz tekinsiz",
        [Locale.Italian]: "Incredibilmente inquietante",
        [Locale.Indonesian]: "Sangat menakutkan",
        [Locale.Czech]: "Neuvěřitelně děsivý",
        [Locale.Japanese]: "ミスター・インクレディブル アンキャニー",
        [Locale.Korean]: "미스터 인크레더블 불쾌한 골짜기",
        [Locale.ChineseCN]: "超人总动员 惊悚",
    }),
    topics: [Topic.Cartoons, Topic.Reaction, Topic.Incredibles],
    types: [Type.TwoOption, Type.TextTopWithBackground],
    width: 950,
    height: 600,
    texts: [
        { id: 0, description: "left caption", minLength: 1, maxLength: 6 },
        { id: 1, description: "right caption", minLength: 1, maxLength: 6 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/uncanny.png"
                width={950}
                height={500}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderRight: "4px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
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
                    top: 0,
                    width: "50%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "white",
                    borderLeft: "4px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: "Comic Sans MS",
                        fontSize: fontSize(texts[1]),
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
