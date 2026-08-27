import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const frierenSittingAndSmiling: Template = {
    name: "frierenSittingAndSmiling",
    displayName: buildLocales("Frieren sitting and smiling", {
        [Locale.Russian]: "Фрирен сидит и улыбается",
        [Locale.Ukrainian]: "Фрірен сидить і посміхається",
        [Locale.Dutch]: "Frieren zit en glimlacht",
        [Locale.French]: "Frieren assise et souriante",
        [Locale.German]: "Frieren sitzt und lächelt",
        [Locale.Polish]: "Frieren siedzi i się uśmiecha",
        [Locale.SpanishES]: "Frieren sentada y sonriendo",
        [Locale.SpanishLATAM]: "Frieren sentada y sonriendo",
        [Locale.PortugueseBR]: "Frieren sentada e sorrindo",
        [Locale.Turkish]: "Oturan ve gülümseyen Frieren",
        [Locale.Italian]: "Frieren seduta e sorridente",
        [Locale.Indonesian]: "Frieren duduk dan tersenyum",
        [Locale.Czech]: "Frieren sedí a usmívá se",
        [Locale.Japanese]: "座って微笑むフリーレン",
        [Locale.Korean]: "앉아서 미소 짓는 프리렌",
        [Locale.ChineseCN]: "坐着微笑的芙莉莲",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.Frieren],
    types: [Type.TextBottom],
    width: 735,
    height: 528,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/frierenSittingAndSmiling.png"
                width={735}
                height={528}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: "20%",
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
                        fontSize: fontSize(texts[0]),
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
