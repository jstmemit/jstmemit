import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const ditfZeroTwoCrying1: Template = {
    name: "ditfZeroTwoCrying1",
    displayName: buildLocales("Zero Two crying 1", {
        [Locale.Russian]: "Zero Two плачет 1",
        [Locale.Ukrainian]: "Zero Two плаче 1",
        [Locale.Dutch]: "Zero Two huilt 1",
        [Locale.French]: "Zero Two qui pleure 1",
        [Locale.German]: "Zero Two weint 1",
        [Locale.Polish]: "Zero Two płacze 1",
        [Locale.SpanishES]: "Zero Two llorando 1",
        [Locale.SpanishLATAM]: "Zero Two llorando 1",
        [Locale.PortugueseBR]: "Zero Two chorando 1",
        [Locale.Turkish]: "Zero Two ağlıyor 1",
        [Locale.Italian]: "Zero Two che piange 1",
        [Locale.Indonesian]: "Zero Two menangis 1",
        [Locale.Czech]: "Zero Two pláče 1",
        [Locale.Japanese]: "泣くゼロツー 1",
        [Locale.Korean]: "우는 제로투 1",
        [Locale.ChineseCN]: "02哭泣 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DarlingInTheFranxx],
    types: [Type.TextBottomWithBackground],
    width: 498,
    height: 380,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/ditfZeroTwoCrying1.png"
                width={498}
                height={280}
                style={{ position: "absolute", top: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "10px",
                    backgroundColor: "white",
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
        </div>
    ),
};
