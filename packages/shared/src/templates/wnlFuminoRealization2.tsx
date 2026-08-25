import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const wnlFuminoRealization2: Template = {
    name: "wnlFuminoRealization2",
    displayName: buildLocales("Fumino realization 2", {
        [Locale.Russian]: "Осознание Фумино 2",
        [Locale.Ukrainian]: "Усвідомлення Фуміно 2",
        [Locale.Dutch]: "Fumino realisatie 2",
        [Locale.French]: "Réalisation de Fumino 2",
        [Locale.German]: "Fumino Erkenntnis 2",
        [Locale.Polish]: "Uświadomienie Fumino 2",
        [Locale.SpanishES]: "Fumino dándose cuenta 2",
        [Locale.SpanishLATAM]: "Fumino dándose cuenta 2",
        [Locale.PortugueseBR]: "Fumino percebendo 2",
        [Locale.Turkish]: "Fumino'nun farkına varması 2",
        [Locale.Italian]: "Fumino che realizza 2",
        [Locale.Indonesian]: "Fumino menyadari 2",
        [Locale.Czech]: "Fumino si uvědomuje 2",
        [Locale.Japanese]: "文乃の気づき 2",
        [Locale.Korean]: "후미노 깨달음 2",
        [Locale.ChineseCN]: "文乃的觉悟 2",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.WeNeverLearn],
    types: [Type.TwoOption, Type.TextRightWithBackground],
    width: 1090,
    height: 608,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 12 },
        { id: 1, description: "second option", minLength: 1, maxLength: 12 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/wnlFuminoRealization2.png"
                width={545}
                height={608}
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
                    backgroundColor: "black",
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
                    bottom: 0,
                    width: "50%",
                    height: "50%",
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
                        fontSize: 50,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
