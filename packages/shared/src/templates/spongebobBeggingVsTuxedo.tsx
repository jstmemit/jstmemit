import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const spongebobBeggingVsTuxedo: Template = {
    name: "spongebobBeggingVsTuxedo",
    displayName: buildLocales("Spongebob begging vs tuxedo", {
        [Locale.Russian]: "Губка Боб: умоляет и в смокинге",
        [Locale.Ukrainian]: "Губка Боб: благає і в смокінгу",
        [Locale.Dutch]: "Spongebob smekend vs smoking",
        [Locale.French]: "Bob l'éponge suppliant vs smoking",
        [Locale.German]: "Spongebob bettelt vs Smoking",
        [Locale.Polish]: "SpongeBob błagający vs w smokingu",
        [Locale.SpanishES]: "Bob Esponja suplicando vs smoking",
        [Locale.SpanishLATAM]: "Bob Esponja rogando vs esmoquin",
        [Locale.PortugueseBR]: "Bob Esponja implorando vs smoking",
        [Locale.Turkish]: "SüngerBob yalvaran vs smokinli",
        [Locale.Italian]: "SpongeBob che implora vs in smoking",
        [Locale.Indonesian]: "Spongebob memohon vs tuksedo",
        [Locale.Czech]: "Spongebob prosí vs smoking",
        [Locale.Japanese]: "スポンジ・ボブ 懇願 vs タキシード",
        [Locale.Korean]: "스폰지밥 구걸 vs 턱시도",
        [Locale.ChineseCN]: "海绵宝宝乞求与穿燕尾服",
    }),
    topics: [Topic.SpongeBob, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextRightWithBackground, Type.TwoOption],
    width: 755,
    height: 601,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 20 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 20 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/spongeBobBeggingVsTuxedo.png"
                width={755}
                height={601}
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
