import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const officeMichaelExcited: Template = {
    name: "officeMichaelExcited",
    displayName: buildLocales("Excited Michael", {
        [Locale.Russian]: "Майкл в восторге",
        [Locale.Ukrainian]: "Майкл у захваті",
        [Locale.Dutch]: "Enthousiaste Michael",
        [Locale.French]: "Michael enthousiaste",
        [Locale.German]: "Aufgeregter Michael",
        [Locale.Polish]: "Podekscytowany Michael",
        [Locale.SpanishES]: "Michael emocionado",
        [Locale.SpanishLATAM]: "Michael emocionado",
        [Locale.PortugueseBR]: "Michael empolgado",
        [Locale.Turkish]: "Heyecanlı Michael",
        [Locale.Italian]: "Michael entusiasta",
        [Locale.Indonesian]: "Michael yang bersemangat",
        [Locale.Czech]: "Nadšený Michael",
        [Locale.Japanese]: "興奮するマイケル",
        [Locale.Korean]: "신난 마이클",
        [Locale.ChineseCN]: "激动的迈克尔",
    }),
    topics: [Topic.Reaction, Topic.Movies, Topic.Office],
    types: [Type.TextBottomWithBackground, Type.Animated],
    width: 500,
    height: 400,
    animationDuration: 2100,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/gifs/officeMichaelExcited.gif"
                width={500}
                height={300}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    right: 0,
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
