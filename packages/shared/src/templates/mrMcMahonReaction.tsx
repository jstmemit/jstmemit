import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const mrMcMahonReaction: Template = {
    name: "mrMcMahonReaction",
    displayName: buildLocales("Mr McMahon reaction", {
        [Locale.Russian]: "Реакция Винса МакМэна",
        [Locale.Ukrainian]: "Реакція Вінса Макмена",
        [Locale.Dutch]: "Mr McMahon reactie",
        [Locale.French]: "Réaction de Mr McMahon",
        [Locale.German]: "Mr McMahon Reaktion",
        [Locale.Polish]: "Reakcja Mr McMahona",
        [Locale.SpanishES]: "Reacción de Mr McMahon",
        [Locale.SpanishLATAM]: "Reacción de Mr McMahon",
        [Locale.PortugueseBR]: "Reação do Mr McMahon",
        [Locale.Turkish]: "Mr McMahon tepkisi",
        [Locale.Italian]: "Reazione di Mr McMahon",
        [Locale.Indonesian]: "Reaksi Mr McMahon",
        [Locale.Czech]: "Reakce Mr McMahona",
        [Locale.Japanese]: "ビンス・マクマホンのリアクション",
        [Locale.Korean]: "빈스 맥마흔 리액션",
        [Locale.ChineseCN]: "文斯·麦克曼反应",
    }),
    topics: [Topic.Reaction],
    types: [Type.TextLeftWithBackground, Type.FourOption],
    width: 1000,
    height: 1500,
    texts: [
        { id: 0, description: "first reaction", minLength: 1, maxLength: 18 },
        { id: 1, description: "second reaction", minLength: 1, maxLength: 18 },
        { id: 2, description: "third reaction", minLength: 1, maxLength: 18 },
        { id: 3, description: "fourth reaction", minLength: 1, maxLength: 20 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=auto,q=50,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/mrMcMahonReaction.png"
                width={1000}
                height={1500}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
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
                    left: 0,
                    top: "23%",
                    width: "50%",
                    height: "24%",
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
                        fontSize: 40,
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
                    bottom: "28%",
                    width: "50%",
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
                        lineClamp: 7,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
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
                    width: "50%",
                    height: "27%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                }}
            >
                <div
                    style={{
                        lineClamp: 8,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
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
