import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const dnNearListening1: Template = {
    name: "dnNearListening1",
    displayName: buildLocales("Near listening 1", {
        [Locale.Russian]: "Ниа слушает 1",
        [Locale.Ukrainian]: "Ніа слухає 1",
        [Locale.Dutch]: "Near luistert 1",
        [Locale.French]: "Near qui écoute 1",
        [Locale.German]: "Near hört zu 1",
        [Locale.Polish]: "Near słucha 1",
        [Locale.SpanishES]: "Near escuchando 1",
        [Locale.SpanishLATAM]: "Near escuchando 1",
        [Locale.PortugueseBR]: "Near ouvindo 1",
        [Locale.Turkish]: "Near dinliyor 1",
        [Locale.Italian]: "Near che ascolta 1",
        [Locale.Indonesian]: "Near mendengarkan 1",
        [Locale.Czech]: "Near poslouchá 1",
        [Locale.Japanese]: "話を聞くニア 1",
        [Locale.Korean]: "듣고 있는 니아 1",
        [Locale.ChineseCN]: "尼亚倾听 1",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.DeathNote],
    types: [Type.TextTopWithBackground],
    width: 500,
    height: 377,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/dnNearListening1.png"
                width={500}
                height={277}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
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
