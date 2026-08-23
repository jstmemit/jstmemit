import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const umAgnesTachyonUncanny: Template = {
    name: "umAgnesTachyonUncanny",
    displayName: buildLocales("Agnes Tachyon Uncanny", {
        [Locale.Russian]: "Жуткая Агнес Тахион",
        [Locale.Ukrainian]: "Моторошна Агнес Тахіон",
        [Locale.Dutch]: "Agnes Tachyon griezelig",
        [Locale.French]: "Agnes Tachyon troublante",
        [Locale.German]: "Agnes Tachyon unheimlich",
        [Locale.Polish]: "Niepokojąca Agnes Tachyon",
        [Locale.SpanishES]: "Agnes Tachyon inquietante",
        [Locale.SpanishLATAM]: "Agnes Tachyon inquietante",
        [Locale.PortugueseBR]: "Agnes Tachyon sinistra",
        [Locale.Turkish]: "Tekinsiz Agnes Tachyon",
        [Locale.Italian]: "Agnes Tachyon inquietante",
        [Locale.Indonesian]: "Agnes Tachyon menakutkan",
        [Locale.Czech]: "Děsivá Agnes Tachyon",
        [Locale.Japanese]: "アグネスタキオン アンキャニー",
        [Locale.Korean]: "아그네스 타키온 불쾌한 골짜기",
        [Locale.ChineseCN]: "爱丽速子 惊悚",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.UmaMusume],
    types: [Type.TextTopWithBackground, Type.TwoOption],
    width: 1280,
    height: 878,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 8 },
        { id: 1, description: "second option", minLength: 1, maxLength: 8 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/umAgnesTachyonUncanny.png"
                width={1280}
                height={768}
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
