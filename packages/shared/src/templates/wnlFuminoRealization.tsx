import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const wnlFuminoRealization: Template = {
    name: "wnlFuminoRealization",
    displayName: buildLocales("Fumino realization", {
        [Locale.Russian]: "Осознание Фумино",
        [Locale.Ukrainian]: "Усвідомлення Фуміно",
        [Locale.Dutch]: "Fumino realisatie",
        [Locale.French]: "Réalisation de Fumino",
        [Locale.German]: "Fumino Erkenntnis",
        [Locale.Polish]: "Uświadomienie Fumino",
        [Locale.SpanishES]: "Fumino dándose cuenta",
        [Locale.SpanishLATAM]: "Fumino dándose cuenta",
        [Locale.PortugueseBR]: "Fumino percebendo",
        [Locale.Turkish]: "Fumino'nun farkına varması",
        [Locale.Italian]: "Fumino che realizza",
        [Locale.Indonesian]: "Fumino menyadari",
        [Locale.Czech]: "Fumino si uvědomuje",
        [Locale.Japanese]: "文乃の気づき",
        [Locale.Korean]: "후미노 깨달음",
        [Locale.ChineseCN]: "文乃的觉悟",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.WeNeverLearn],
    types: [Type.FourOption, Type.TextRightWithBackground],
    width: 1088,
    height: 1237,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 12 },
        { id: 2, description: "third option", minLength: 1, maxLength: 12 },
        { id: 3, description: "fourth option", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/wnlFuminoRealization.png"
                width={544}
                height={1237}
                style={{ position: "absolute", bottom: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: "50%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
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
                        color: "#ffffff",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: "25%",
                    width: "50%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
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
                        color: "#ffffff",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    width: "50%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
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
                        color: "#ffffff",
                    }}
                >
                    {texts[2]}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    right: 0,
                    top: "75%",
                    width: "50%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundColor: "black",
                }}
            >
                <div
                    style={{
                        lineClamp: 5,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[3]),
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[3]}
                </div>
            </div>
        </div>
    ),
};
