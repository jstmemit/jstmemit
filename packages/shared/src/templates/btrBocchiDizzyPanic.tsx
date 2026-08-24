import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";

export const btrBocchiDizzyPanic: Template = {
    name: "btrBocchiDizzyPanic",
    displayName: buildLocales("Bocchi dizzy panic", {
        [Locale.Russian]: "Бокки в панике от головокружения",
        [Locale.Ukrainian]: "Боккі в паніці від запаморочення",
        [Locale.Dutch]: "Bocchi duizelig in paniek",
        [Locale.French]: "Bocchi étourdie et paniquée",
        [Locale.German]: "Bocchi schwindelig in Panik",
        [Locale.Polish]: "Bocchi oszołomiona w panice",
        [Locale.SpanishES]: "Bocchi mareada y en pánico",
        [Locale.SpanishLATAM]: "Bocchi mareada y en pánico",
        [Locale.PortugueseBR]: "Bocchi tonta em pânico",
        [Locale.Turkish]: "Bocchi baş dönmesiyle panikte",
        [Locale.Italian]: "Bocchi stordita e in preda al panico",
        [Locale.Indonesian]: "Bocchi pusing dan panik",
        [Locale.Czech]: "Bocchi v panice, točí se jí hlava",
        [Locale.Japanese]: "めまいでパニックのぼっち",
        [Locale.Korean]: "어지러워 패닉인 봇치",
        [Locale.ChineseCN]: "波奇晕眩恐慌",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.BocchiTheRock],
    types: [Type.TextBottom],
    width: 1080,
    height: 1080,
    texts: [{ id: 0, description: "caption", minLength: 1, maxLength: 12 }],
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/btrBocchiDizzyPanic.png"
                width={1080}
                height={1080}
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
                        lineClamp: 3,
                        wordBreak: "break-word",
                        textOverflow: "ellipsis",
                        fontFamily: font,
                        fontSize: 60,
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
