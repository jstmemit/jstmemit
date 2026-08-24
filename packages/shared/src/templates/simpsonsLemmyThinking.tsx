import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const simpsonsLemmyThinking: Template = {
    name: "simpsonsLemmyThinking",
    displayName: buildLocales("Lenny thinking", {
        [Locale.Russian]: "Задумавшийся Ленни",
        [Locale.Ukrainian]: "Замислений Ленні",
        [Locale.Dutch]: "Lenny denkt na",
        [Locale.French]: "Lenny pensif",
        [Locale.German]: "Lenny denkt nach",
        [Locale.Polish]: "Myślący Lenny",
        [Locale.SpanishES]: "Lenny pensando",
        [Locale.SpanishLATAM]: "Lenny pensando",
        [Locale.PortugueseBR]: "Lenny pensando",
        [Locale.Turkish]: "Düşünen Lenny",
        [Locale.Italian]: "Lenny che pensa",
        [Locale.Indonesian]: "Lenny berpikir",
        [Locale.Czech]: "Přemýšlející Lenny",
        [Locale.Japanese]: "考えるレニー",
        [Locale.Korean]: "생각하는 레니",
        [Locale.ChineseCN]: "思考的伦尼",
    }),
    topics: [Topic.Simpsons, Topic.Cartoons, Topic.Reaction],
    types: [Type.TextBottom],
    width: 638,
    height: 438,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 8 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/simpsonsLemmyThinking.png"
                width={638}
                height={438}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "25%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "15px",
                    backgroundImage: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 40,
                        lineHeight: 1.05,
                        paddingBottom: "0.2em",
                        color: "#ffffff",
                        textShadow: "0 0 8px rgba(0, 0, 0, 1)",
                    }}
                >
                    {texts[0]}
                </div>
            </div>
        </div>
    ),
};
