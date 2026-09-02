import type { TemplateProps } from "#/models/TemplateProps.ts";
import type { Template } from "#/models/Template.ts";
import * as React from "react";
import { Topic } from "#/models/TemplateTopic.ts";
import { Type } from "#/models/TemplateType.ts";
import { buildLocales } from "@jstmemit/i18n/helpers/buildLocales";
import { Locale } from "discord.js";
import { fontSize } from "#/utils/fontSize.ts";

export const jkKidMegumiSeriouslyBro: Template = {
    name: "jkKidMegumiSeriouslyBro",
    displayName: buildLocales("Kid Megumi seriously bro", {
        [Locale.Russian]: "Маленький Мегуми: серьезно, бро?",
        [Locale.Ukrainian]: "Малий Мегумі: серйозно, бро?",
        [Locale.Dutch]: "Kind Megumi serieus gast",
        [Locale.French]: "Enfant Megumi sérieusement mec",
        [Locale.German]: "Kind Megumi im Ernst Bro",
        [Locale.Polish]: "Dziecko Megumi serio stary",
        [Locale.SpanishES]: "Niño Megumi en serio hermano",
        [Locale.SpanishLATAM]: "Niño Megumi en serio hermano",
        [Locale.PortugueseBR]: "Criança Megumi sério mano",
        [Locale.Turkish]: "Çocuk Megumi cidden mi kardeşim",
        [Locale.Italian]: "Bambino Megumi seriamente frate",
        [Locale.Indonesian]: "Anak Megumi serius bro",
        [Locale.Czech]: "Dítě Megumi vážně brácho",
        [Locale.Japanese]: "子供の伏黒 呆れ顔",
        [Locale.Korean]: "어린 메구미 진심이냐",
        [Locale.ChineseCN]: "小伏黑 无语",
    }),
    topics: [Topic.Reaction, Topic.Anime, Topic.JujutsuKaisen],
    types: [Type.TextTopWithBackground],
    width: 474,
    height: 517,
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
                src="https://wideunits.nl/cdn-cgi/image/f=webp,q=50,w=800,metadata=none,fit=scale-down,onerror=redirect/https://files.wideunits.nl/jstmemit/images/templates/jkKidMegumiSeriouslyBro.png"
                width={474}
                height={427}
                style={{ position: "absolute", bottom: 0, right: 0 }}
            />
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "90px",
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
