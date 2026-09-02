import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenSmilingCrying: Template = {
    name: "frierenSmilingCrying",
    displayName: buildLocales("Frieren smiling crying", {
        [Locale.Russian]: "Фрирен улыбается и плачет",
        [Locale.Ukrainian]: "Фрірен посміхається і плаче",
        [Locale.Dutch]: "Frieren lacht en huilt",
        [Locale.French]: "Frieren sourit et pleure",
        [Locale.German]: "Frieren lächelt und weint",
        [Locale.Polish]: "Frieren uśmiecha się i płacze",
        [Locale.SpanishES]: "Frieren sonriendo y llorando",
        [Locale.SpanishLATAM]: "Frieren sonriendo y llorando",
        [Locale.PortugueseBR]: "Frieren sorrindo e chorando",
        [Locale.Turkish]: "Hem gülümseyip hem ağlayan Frieren",
        [Locale.Italian]: "Frieren sorride e piange",
        [Locale.Indonesian]: "Frieren tersenyum sambil menangis",
        [Locale.Czech]: "Frieren se usmívá a pláče",
        [Locale.Japanese]: "泣き笑いするフリーレン",
        [Locale.Korean]: "웃으며 우는 프리렌",
        [Locale.ChineseCN]: "微笑流泪的芙莉莲",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextTopWithBackground, Type.TwoOption],
    width: 686,
    height: 428,
    texts: [
        { id: 0, description: "first option", minLength: 1, maxLength: 5 },
        { id: 1, description: "second option", minLength: 1, maxLength: 5 },
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenSmilingCrying.png"
                width={686}
                height={298}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                    borderRight: "2px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[0]),
                        lineHeight: 1.05,
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
                    height: "130px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
                    borderLeft: "2px solid black",
                }}
            >
                <div
                    style={{
                        lineClamp: 2,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: fontSize(texts[1]),
                        lineHeight: 1.05,
                        color: "#000000",
                    }}
                >
                    {texts[1]}
                </div>
            </div>
        </div>
    ),
};
